<?php
    class Booking{


        // Table
        public static $db_table = "booking";

        // Columns
        public $id;
        public $name_hotel;
        public $id_place;
        public $distance;
        public $price;

        // Db connection
        public function __construct($id, $name_hotel, $id_place, $distance, $price){
            $this->id = $id;
            $this->name_hotel = $name_hotel;
            $this->id_place = $id_place;
            $this->distance = $distance;
            $this->price = $price;
        }

        // GET ALL
        static function getBookings(){
            $list_booking=[];
            $db = Database::getConnection();
            $req = $db->query('Select * from '.self::$db_table);
            foreach($req->fetchAll() as $item){
                $list_booking[] = new Booking($item['ID_booking'], $item['ID_place'], $item['name_hotel'], $item['distance'], $item['price']);
            }
            return $list_booking;
        }
        
        // Post database
        static function postBookings(){
            // $_POST;
            $db = Database::getConnection();

            // echo("hey hey");
            // $req = $db->query('INSERT * from '.self::$db_table);
            // echo($_POST["price"]);
            // var_dump($_POST);
            // // $name = $_POST['ID_booking'];
            // // echo($name);
            // // echo(gettype($_POST));
            // echo(gettype($_POST));
            $content = trim(file_get_contents("php://input"));
            var_dump($content);
            $data = json_decode($content, true);
            // echo($decoded["ID_booking"]);

            // $data = json_decode($_POST);
            // echo($data);
            $data_query = [
                'ID_booking' => (int)$data["ID_booking"],
                'Id_place' => (int)$data["ID_place"],
                'name_hotel' => $data["name_hotel"],
                'distance' => (int)$data["distance"],
                'price' => (int)$data["price"]
            ];

            $query = "INSERT INTO booking (ID_booking, Id_place, name_hotel, distance, price) VALUES (:ID_booking, :Id_place, :name_hotel, :distance, :price)";
            // // $res = $stmt->exec($data);

            // //$query = "INSERT INTO booking (ID_booking, ID_place, name_hotel, distance, price) VALUES (112,122,'dasd', 12,42)";
            try {
            $stmt = $db->prepare($query);
            $res = $stmt->execute($data_query);
            } catch(PDOException $e) {
            echo("Error");
            }
        }
    }
?>
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
                $list_booking[] = new Booking($item['id'], $item['name_hotel'], $item['id_place'], $item['distance'], $item['price']);
            }
            return $list_booking;
        }      
    }
?>
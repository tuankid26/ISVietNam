<?php
    class Place{


        // Table
        static $db_table = "place";

        // Columns
        public $id_place;
        public $id_province;
        public $description;

        // Db connection
        public function __construct($id_place, $id_province, $description){
            $this->id_place = $id_place;
            $this->id_province = $id_province;
            $this->description = $description;
        }

        // GET ALL
        static function getPlaces(){
            $list_places = [];
            $db = Database::getConnection();
            $req = $db->query("SELECT * FROM " . self::$db_table);
            foreach($req->fetchAll() as $item){
                $list_places[] = new Place($item['id_place'], $item['id_province'], $item['description']);
            }
            return $list_places;
        }   
    }
?>
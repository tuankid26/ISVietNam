<?php
    class Province{
        // Table
        static $db_table = "province";

        // Columns
        public $id_province;
        public $name;

        public function __construct($id_province, $name){   
            $this->id_province = $id_province;
            $this->name = $name;
        }

        // GET ALL
        static function getProvinces(){
            $list_provinces=[];
            $db = Database::getConnection();
            $req =$db->query("SELECT * FROM " . self::$db_table);
            foreach($req->fetchAll() as $item){
                $list_provinces[] = new Province($item['id_province'], $item['name']);
            }
            return $list_provinces;
        }   
    }
?>
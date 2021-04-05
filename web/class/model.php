<?php
    class Employee{

        // Connection
        private $conn;

        // Table
        private $db_table = "place";

        // Columns
        public $id_place;
        public $id_province;
        public $description;

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // GET ALL
        public function getEmployees(){
            $sqlQuery = "SELECT id_place, id_province, description FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }   
        public function getSingleEmployee(){
        $sqlQuery = "SELECT id_place, id_province, description FROM " . $this->db_table . " WHERE id_place = ? LIMIT 0,1";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(1, $this->id_place);
            $stmt->execute();
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->id_place = $dataRow['id_place'];
            $this->id_province = $dataRow['id_province'];
            $this->description = $dataRow['description'];
        }   
    }
?>
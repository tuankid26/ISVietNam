<?php 
    class Database {
        const host = "localhost";
        const database_name = "test";
        const username = "root";
        const password = "";

        private static $instance = NULL;
        public static function getConnection(){
            if (!isset(self::$instance))
            try{
                self::$instance = new PDO("mysql:host=" . self::host . ";dbname=" . self::database_name, self::username, self::password);
                self::$instance->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Database could not be connected: " . $exception->getMessage();
            }
            return self::$instance;
        }
    }  
?>
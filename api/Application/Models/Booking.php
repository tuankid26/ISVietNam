<?php

use MVC\Model;
// use JWT\JWT;
// define('SECRET_KEY', 'secret');
class ModelsBooking extends Model {
    public function getAllBooking(){
        return $this->db->query('SELECT * from booking');
    }
    public function insert_booking($data)
    {
        // echo'123123123';
        $stmt = $this->db->prepare('
            insert into booking (`ID_hotel`, `Name`,`Phone`,`Customer`,`TimeTo`,`TimeOut`) values (?,?,?,?,?,?)
        ');
        // $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        print_r(array_values($data));
        return $stmt->execute(array_values($data));
    }
}

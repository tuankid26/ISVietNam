<?php

use MVC\Model;
// use JWT\JWT;
// define('SECRET_KEY', 'secret');
class ModelsUser extends Model {
    public function find_username($username)
    {

        $stmt = $this->db->prepare('
            SELECT * from user where username = ?
        ');
        $stmt->execute(array($username));
        
        return $stmt->fetchAll();
        
    }
    public function getAllUsers(){
        return $this->db->query('SELECT * from user');
    }
    public function create_user($data)
    {
       
        if (!isset($data['user_email'])){
            $data['user_email'] = '';
        }
        
        $stmt = $this->db->prepare('
            insert into user (`username`, `password`,`user_email`) values (?,?,?)
        ');
        // $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        // print_r(array_values($data));
        return $stmt->execute(array_values($data));
    }
}

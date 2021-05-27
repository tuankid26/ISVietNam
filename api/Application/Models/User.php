<?php

use MVC\Model;
// use JWT\JWT;
// define('SECRET_KEY', 'secret');
class ModelsUser extends Model
{
    public function find_username($username)
    {
        $stmt = $this->db->prepare('
            SELECT * from user where username = ?
        ');
        $stmt->execute(array($username));
        return $stmt->fetchAll();
    }
    public function create_user($data)
    {
        $user = ($this->find_username($data['username']));
        if ($user) return null;
        else {
            $stmt = $this->db->prepare('
            insert into user (username, password,`user_email`) values (?,?,?)
        ');
            return $stmt->execute(array_values($data));
        }
    }
}
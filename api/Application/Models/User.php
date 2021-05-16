<?php

use MVC\Model;

class ModelsUser extends Model {
    public function getAllUsers(){
        return $this->db->query('SELECT * FROM user');
    }
}

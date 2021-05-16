<?php

use MVC\Model;

class ModelsHotel extends Model {
    public function getAllHotels(){
        return $this->db->query('SELECT * FROM hotel');
    }
}

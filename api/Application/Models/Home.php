<?php

use MVC\Model;

class ModelsHome extends Model {
    public function getListImage(){
        return $this->db->query('SELECT * FROM home');
    }
}

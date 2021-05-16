<?php

use MVC\Model;

class ModelsNews extends Model {
    public function getAllNews(){
        return $this->db->query('SELECT * FROM news');
    }
}

<?php

use MVC\Model;

class ModelsPlace extends Model {
    public function getAllPlace(){
        return $this->db->query('SELECT * FROM place');
    }
}

<?php

use MVC\Model;

class ModelsIPlace extends Model {
    public function getAllIPlace(){
        return $this->db->query('SELECT * FROM image_place');
    }
}

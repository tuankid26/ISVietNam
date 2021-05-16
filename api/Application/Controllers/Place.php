<?php

use MVC\Controller;

class ControllersPlace extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('place');
    }
    public function get_all_places(){
        $place = $this->_model->getAllPlace();
        if (isset($place)){
            $response = ['place'=>$place];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $response = ['place'=>array()];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);     
        }

    }

}

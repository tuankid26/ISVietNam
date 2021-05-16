<?php

use MVC\Controller;

class ControllersHotel extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('hotel');
    }
    public function get_all_hotels(){
        $hotels = $this->_model->getAllHotels();
        if (isset($hotels)){
            $response = ['hotel'=>$hotels];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $response = ['user'=>array()];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);     
        }

    }

}
<?php

use MVC\Controller;

class ControllersIPlace extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('iplace');
    }
    public function get_all_iplaces(){
        $iplace = $this->_model->getAllIPlace();
        if (isset($iplace)){
            $response = ['iplace'=>$iplace];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $response = ['iplace'=>array()];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);     
        }

    }

}
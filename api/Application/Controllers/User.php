<?php

use MVC\Controller;

class ControllersUser extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('user');
    }
    public function get_all_users(){
        $users = $this->_model->getAllUsers();
        if (isset($users)){
            $response = ['user'=>$users];
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

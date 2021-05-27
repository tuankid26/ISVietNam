<?php

use MVC\Controller;
use JWT\JWT;
require SYSTEM . 'JWT.php';
class ControllersBooking extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('booking');
    }
    public function booking()
    {
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        // print_r($data);
        if ($this->_model->insert_booking($data)){   
            $response = 'Success';
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $response = 'Error';
            $this->response->sendStatus(401);
            $this->response->setContent(['response' => $response]);
        }
    }
}

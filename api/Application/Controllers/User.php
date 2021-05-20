<?php

use MVC\Controller;
use JWT\JWT;
require SYSTEM . 'JWT.php';
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
    public function register()
    {
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        // $data =

        //     ['username' => 'bmtuan',

        //     'password' => '123123',
        //     ];
            // print_r($this->_model->create_user($data));
        if ($this->_model->create_user($data)){
            $user = ($this->_model->find_username($data['username']));
            $user = $user[0];
            $token = JWT::encode($user, SECRET_KEY);        
            $response = ['user'=>$user];
            $this->response->sendStatus(200);
            $this->response->setContent(['token' => $token, 'response'=> $response]);    
        }
        else{
            $response = 'Error creating user';
            $this->response->sendStatus(401);
            $this->response->setContent(['response' => $response]);
        }
    }
    public function validate()
    {
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        print_r($data);
        $username = $data['username'];
        $password = $data['password'];
        $user = ($this->_model->find_username($username));
        // print_r($user);
        $response ='';
        if(sizeof($user) == 0)
        {
            $response = 'invalid_username';
            $this->response->sendStatus(401);
            $this->response->setContent(['response'=> $response]);
        }
        else{
            $user = $user[0];
            // echo $password;
            // echo $user['password'];
            // if(password_verify($password, $user['password']))
            if ($password == $user['password'])
            {
                $token = JWT::encode($user, SECRET_KEY);
                $response = ['user'=>$user];
                $this->response->sendStatus(200);
                $this->response->setContent(['token' => $token, 'response'=> $response]);    
            }
            else
            {
                $response = 'invalid_password';
                $this->response->sendStatus(401);
                $this->response->setContent([ 'response'=> $response]);
            }
        }
        
        
    
    }

}

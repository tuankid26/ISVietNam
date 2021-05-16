<?php

use MVC\Controller;

class ControllersNews extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('news');
    }
    public function get_all_news(){
        $news = $this->_model->getAllNews();
        if (isset($news)){
            $response = ['news'=>$news];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $response = ['news'=>array()];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);     
        }

    }

}

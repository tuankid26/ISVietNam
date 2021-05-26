<?php

use MVC\Controller;

class ControllersHome extends Controller {

    public function index() {
        $model = $this->model('home');
        $images = $model->getListImage();
        $data = ['data' => $images];
        $this->response->sendStatus(200);
        $this->response->setContent($data);
    }

}

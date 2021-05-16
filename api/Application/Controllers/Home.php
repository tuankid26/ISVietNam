<?php

use MVC\Controller;

class ControllersHome extends Controller {

    public function index() {

        // Connect to database
        $model = $this->model('home');

        // Read All Task
        $images = $model->getListImage();

        // Prepare Data
        $data = ['data' => $images];

        // Send Response
        $this->response->sendStatus(200);
        $this->response->setContent($data);
    }

}

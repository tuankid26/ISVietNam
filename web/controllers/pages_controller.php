<?php
require_once('controllers/base_controller.php');
class PagesController extends BaseController
{
  public function home()
  {
    $data = array(
      'content' => 'HomePage'
    );
    $this->render('home', $data);
  }

  public function error()
  {
    $this->render('error');
  }
}
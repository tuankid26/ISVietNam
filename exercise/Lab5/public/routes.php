<?php
$controllers = array(
  'pages' => ['home', 'error'],
  'categorys' => ['index','add'],
  'business' => ['index','add'],
  'bucat' => ['index','get']
); 

if (!array_key_exists($controller, $controllers) || !in_array($action, $controllers[$controller])) {
  $controller = 'pages';
  $action = 'error';
}

include_once('controllers/' . $controller . '_controller.php');
$klass = str_replace('_', '', ucwords($controller, '_')) . 'Controller';
// echo $klass;
$controller = new $klass;
// echo $controller;
// die();
$controller->$action();
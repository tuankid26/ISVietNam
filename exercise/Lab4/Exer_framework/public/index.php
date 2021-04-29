<?php	

define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)));

$url = str_replace('/ISVietNam/exercise/Lab4/Exer_framework/','', $_SERVER['REQUEST_URI']);
// echo ROOT . DS . 'library' . DS . 'bootstrap.php<br>';
// echo $url;
require_once (ROOT . DS . 'library' . DS . 'bootstrap.php'); 
<?php

$path = $_SERVER['REQUEST_URI'];

if ($path === '/'){
    require '../index.php';
}else{
    require '../view/404.html';
}
<?php
// $router->get('/home', 'home@index');
// $router->get('/user', 'user@get_all_users');

$router->get('/news', 'news@get_all_news');
$router->get('/hotel','hotel@get_all_hotels');
$router->get('/iplace' , 'iplace@get_all_iplaces');
$router->get('/place','place@get_all_places');
$router->post('/register','user@register');
$router->post('/validate','user@validate');
$router->post('/booking','booking@booking');
$router->get('/', function() {
    echo 'Welcome ';
});

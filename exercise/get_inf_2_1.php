<?php
$post = $_POST;
$name = $post['name'];
$birthday = $post['birthday'];
$phone = $post['phone'];
$email = $post['email'];
$class = $post['class'];
$university = $post['university'];
$hobby = $post['hobby'];
echo('Tên của bạn là: '.$name.'<br>');
echo('Ngày sinh của bạn là: '.$birthday.'<br>');
echo('Email của bạn là: '.$email.'<br>');
echo('Số điện thoại của bạn là: '.$phone.'<br>');
echo('Lớp của bạn là: '.$class.'<br>');
echo('Trường của bạn là: '.$university.'<br>');
echo('Sở thích của bạn là:<br>');
foreach($hobby as $key => $item){
    $n = $key+1;
    echo($n.'. '.$item.'<br>');
};

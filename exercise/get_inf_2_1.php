<?php
$post = $_POST;
$name = $post['name'];
$birthday = $post['birthday'];
$phone = $post['phone'];
$email = $post['email'];
$class = $post['class'];
$university = $post['university'];
echo('Tên của bạn là: <b>'.$name.'</b><br><br>');
echo('Ngày sinh của bạn là: <b>'.$birthday.'</b><br><br>');
echo('Email của bạn là: <b>'.$email.'</b><br><br>');
echo('Số điện thoại của bạn là: <b>'.$phone.'</b><br><br>');
echo('Lớp của bạn là: <b>'.$class.'</b><br><br>');
echo('Trường của bạn là: <b>'.$university.'</b><br><br>');
if (isset($post['hobby'])){
    echo('Sở thích của bạn là:<br>');
    foreach($post['hobby'] as $key => $item){
        $n = $key+1;
        echo($n.'. <i>'.$item.'</i><br>');
    }
}
else{
    echo('<i>Bạn không có sở thích nào!!! :(<i>');
}

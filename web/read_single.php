<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once './config/database.php';
    include_once './class/model.php';

    $database = new Database();
    $db = $database->getConnection();

    $item = new Employee($db);

    $item->id_place = isset($_GET['id_place']) ? $_GET['id_place'] : die();
  
    $item->getSingleEmployee();

    if($item->id_province != null){
        // create array
        $emp_arr = array(
            "id_place" => $item->id_place,
            "id_province" => $item->id_province,
            "description" => $item->description,
        );
      
        http_response_code(200);
        echo json_encode($emp_arr);
    }
      
    else{
        http_response_code(404);
        echo json_encode("Employee not found.");
    }
?>
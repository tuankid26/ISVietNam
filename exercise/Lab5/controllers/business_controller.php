<?php
require_once('controllers/base_controller.php');
require_once('models/business.php');
require_once('models/category.php');
class BusinessController extends BaseController
{
    function __construct()
    {
        $this->folder = 'business';
    }
    public function index()
    {
        $categories = Category::all();
        $data = array('category' => $categories);
        $this->render('index', $data);
    }
    public function add()
    {
        $id = $_POST['idbiz'];
        $name = $_POST['name'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $tele = $_POST['tele'];
        $url = $_POST['url'];
        $arr = $_POST['cate'];
        Business::add($id, $name,$address,$city,$tele,$url,$arr);
        $this->render('add');
    }
}

<?php
require_once('controllers/base_controller.php');
require_once('models/category.php');

class CategorysController extends BaseController
{
    function __construct()
    {
        $this->folder = 'categorys';
    }

    public function index()
    {
        $categorys = Category::all();
        $data = array('categorys' => $categorys);
        $this->render('index', $data);
    }
    public function add()
    {
        $id = $_POST['id'];
        $title = $_POST['title'];
        $des = $_POST['des'];
        Category::add($id, $title, $des);
        $this->render('add');
    }
}

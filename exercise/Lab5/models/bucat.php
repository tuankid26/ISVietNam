<?php
require_once('models/category.php');
require_once('models/business.php');
class Bucat
{
    public $BusinessID;
    public $Category;

    public function __construct($id, $cat)
    {
        $this->BusinessID = $id;
        $this->Category = $cat;
    }
    static function all()
    {
        $list = [];
        $db = DB::getInstance();
        $req = $db->query('SELECT * FROM categories');
        foreach ($req->fetchAll() as $item) {
            $list[] = new Category($item['CategoryID'], $item['Title']);
        }
        return $list;
    }
    static function get($id)
    {
        // $list = [];
        $db = DB::getInstance();
        $q = 'SELECT * FROM biz_categories WHERE Category = \'' . $id . '\'';
        $req = $db->query($q);
        // print_r($req);
        $req = $req->fetchAll();
        // echo '<pre>';
        if ($req != null){
            // print_r($req['BusinessID']);
            return $req;
        }
    }
}

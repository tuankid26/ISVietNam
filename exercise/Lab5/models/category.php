<?php

class Category
{
    public $CategoryID;
    public $Title;
    public $Description;

    function __construct($CategoryID_ =null, $Title_=null, $Description_=null)
    {
        $this->CategoryID = $CategoryID_;
        $this->Title = $Title_;
        $this->Description = $Description_;
    }

    static function all()
    {
        $list = [];
        $db = DB::getInstance();
        $req = $db->query('SELECT * FROM categories');

        foreach ($req->fetchAll() as $item) {
            $list[] = new Category($item['CategoryID'], $item['Title'], $item['Description']);
        }

        return $list;
    }
    static function add($id, $title, $des){
        $db = DB::getInstance();
        $q = 'INSERT INTO categories (CategoryID, Title, Description) VALUES (\'' .$id.'\',\''.$title.'\',\''.$des.'\')';
        $db->query($q);
    }
}

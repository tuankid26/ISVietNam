<?php

class Business
{
    public $ID;
    public $Name;
    public $Address;
    public $City;
    public $Telephone;
    public $URL;

    public function __construct($ID = null, $name = null, $add = null, $city = null, $tele = null, $url = null)
    {
        $this->ID = $ID;
        $this->Name = $name;
        $this->Address = $add;
        $this->City = $city;
        $this->Telephone = $tele;
        $this->URL = $url;
    }

    static function add($id, $name, $add, $city, $tele, $url, $name_cat)
    {
        $db = DB::getInstance();
        // $q = 'INSERT INTO categories (CategoryID, Title, Description) VALUES (\'' .$id.'\',\''.$title.'\',\''.$des.'\')';
        $q = 'INSERT INTO businesses (BusinessID ,Name, Address, City, Telephone, URL) VALUES (\'' . $id . '\',\'' . $name . '\',\'' . $add . '\',\'' . $city . '\',\'' . $tele . '\',\'' . $url . '\')';
        // echo $q;
        $db->query($q);
        // var_dump($name_cat);
        foreach ($name_cat as $name) {
            $q_ = 'INSERT INTO biz_categories (BusinessID, Category) VALUES (\'' . $id . '\',\'' . $name . '\')';
            // echo $q_;
            $db->query($q_);
        }
    }
    static function all()
    {
        $list = [];
        $db = DB::getInstance();
        $req = $db->query('SELECT * FROM businesses');

        foreach ($req->fetchAll() as $item) {
            $list[] = new Business($item['BusinessID'], $item['Name'], $item['Address'], $item['City'], $item['Telephone'], $item['URL']);
        }

        return $list;
    }
    static function get($id)
    {
        $list = [];
        $db = DB::getInstance();
        $q = 'SELECT * FROM businesses WHERE BusinessID = \'' . $id . '\'';
        // echo $q;
        $req = $db->query($q);

        foreach ($req->fetchAll() as $item) {
            $list[] = new Business($item['BusinessID'], $item['Name'], $item['Address'], $item['City'], $item['Telephone'], $item['URL']);
        }
        return $list;
    }
}

<?php
require_once('controllers/base_controller.php');
require_once('models/bucat.php');
require_once('models/business.php');

class BucatController extends BaseController
{
    function __construct()
    {
        $this->folder = 'bucat';
    }

    public function index()
    {
        // echo '<pre>';
        $bucat = Bucat::all();
        // print_r($bucat);
        $busi = Business::all();
        // print_r($bucat); 
        foreach($bucat as $b){
            // echo '<pre>';
            // print_r($b);
            // print_r(Bucat::get($b->Title));
            $Cate[] = Bucat::get($b->Title);
        }
        // print_r($Cate);
        $data = array('bucat' => $bucat,
                    'bucat_id' => $Cate,
                    'business' => $busi
                    );
        // $data['bucat_id'] = $Cate;
        // echo '<pre>';
        // print_r($Cate);
        $this->render('index', $data);
    }
}

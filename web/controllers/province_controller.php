<?php
    require_once 'models/province.php';
    require_once 'controllers/base_controller.php';
class ProvinceController extends BaseController
{
    public function getProvinces(){
        $provinces = Province::getProvinces();
        $data = array('provinces' => $provinces);
        $this->render('province', $data);
    }
}
<?php
    require_once 'models/place.php';
    require_once 'controllers/base_controller.php';
class PlaceController extends BaseController
{
    public function getPlaces(){
        $places = Place::getPlaces();
        $data = array('places' => $places);
        $this->render('place', $data);
    }
}
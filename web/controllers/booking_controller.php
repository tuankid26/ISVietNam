<?php
    require_once 'models/booking.php';
    require_once 'controllers/base_controller.php';
class BookingController extends BaseController
{
    public function getBookings(){
        $bookings = Booking::getBookings();
        $data = array('bookings' => $bookings);
        $this->render('booking', $data);
    }
    public function postBookings(){
        Booking::postBookings();
    }
}
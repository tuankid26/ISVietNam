<?php
echo '<ul>';
foreach ($bookings as $booking) {
  echo '<li>
    <a href="#">' . $booking->name_hotel . '</a>
  </li>';
}
echo '</ul>';
    // echo json_encode($bookings);
?>
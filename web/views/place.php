<?php
echo '<ul>';
foreach ($places as $place) {
  echo '<li>
    <a href="#">' . $place->id_place . '</a>
  </li>';
}
echo '</ul>';
    // echo json_encode($bookings);
?>
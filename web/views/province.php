<?php
echo '<ul>';
foreach ($provinces as $province) {
  echo '<li>
    <a href="#">' . $province->name . '</a>
  </li>';
}
echo '</ul>';
    // echo json_encode($bookings);
?>
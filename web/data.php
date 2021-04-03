<?php
$servername = "localhost";
$username = "pma";
$password = "";
$dbname =  "test";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
$sql = "SELECT id, name, sdt , email FROM test";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["sdt"]. "<br>";
    }
  } else {
    echo "0 results";
  }
  $conn->close();
?>


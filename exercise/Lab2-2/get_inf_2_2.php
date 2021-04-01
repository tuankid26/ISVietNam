<html>

<head>
    <link rel="stylesheet" href="./style_2_2.css">
</head>
<body>  
    <?php
    $post = $_POST;
    if (isset($post['name']))
        $name = $post['name'];
    if (isset($post['second']))
        $second = $post['second'];
    if (isset($post['minute']))
        $minute = $post['minute'];
    if (isset($post['hour']))
        $hour = $post['hour'];
    if (isset($post['date'])) {
        $date = $post['date'];
        $month = date('m', strtotime($date));
        $year = date('y', strtotime($date));
        $day = date('d', strtotime($date));
    }
    $m31 = array(1, 3, 5, 7, 8, 10, 12);
    $m30 = array(4, 6, 9, 11);
    ?>
    <div class="form" id="form">
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
            <div class="name">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value="<?= isset($name) ? $name : '' ?> " required></input><br>
            </div>
            <div class="date">
                <label for="date">Date</label>
                <input type="date" id="date" name="date" value=<?= isset($date) ? $date : null ?> ><br>
            </div>
            <div class="time">
                <label for="time">Time</label>
                <select name="second" id="second" required>
                    <?php
                    for ($i = 0; $i <= 59; $i++) {
                        if ($second == $i)
                            print("<option selected>$i</option>");
                        else
                            print("<option>$i</option>");
                    }
                    ?>
                </select>
                <label for="">s</label>
                <select name="minute" id="minute" required>
                    <?php
                    for ($i = 0; $i <= 59; $i++) {
                        if ($minute == $i)
                            print("<option selected>$i</option>");
                        else
                            print("<option>$i</option>");
                    }
                    ?>
                </select>
                <label for="">m</label>
                <select name="hour" id="hour" required>
                    <?php
                    for ($i = 0; $i <= 23; $i++) {
                        if ($hour == $i)
                            print("<option selected>$i</option>");
                        else
                            print("<option>$i</option>");
                    }
                    ?>
                </select>
                <label for="">h</label><br>
            </div>
            <div class="button">
                <button class="submit-button" type="submit" onclick="set_value()">Submit</button>
                <button class="reset-button" onclick="reset_value()">Reset</button><br>
            </div>
        </form>
    </div>
    <div class="print">
        <?php
        if (isset($name)) {
            echo ('Hi, <b>' . $name . '</b>!<br>');
            echo ('You have choose to have an appointment on <b>' . $second . ':' . $minute . ':' . $hour . ' ' . $day . '/' . $month . '/' . $year . '</b>');
            echo ('<br><br>More information:<br><br>');
            echo ('In 12 hours, the time and date is ');
            $days = cal_days_in_month(CAL_GREGORIAN, intval($month), intval($year));
            if ($hour > 12) {

                echo ('<b>' . $second . ':' . $minute);
                echo ('<b>:' . ($hour - 12) . '</b> PM</b><br>');
            } else {

                echo ('<b>' . $second . ':' . $minute);
                echo ('<b>:' . $hour . '</b> AM</b><br>');
            }
            if (in_array($month, $m31)) {
                echo ('This month has 31 days!');
            } elseif (in_array($month, $m30)) {
                echo ('This month has 30 days!');
            }
            echo("This month has ".$days." days");
        }

        ?>
    </div>
    <script>
        function reset_value(){
            document.getElementById("name").value = "";
            document.getElementById("date").value = null;
            document.getElementById("second").value= 0;
            document.getElementById("minute").value= 0;
            document.getElementById("hour").value= 0;
        }
    </script>
</body>

</html>
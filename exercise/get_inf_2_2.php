<html>

<head>
    <link rel="stylesheet" href="./assets/style_2_2.css">
</head>

<body>
<?php
    $post = $_POST;
    $name = $post['name'];
    $second = $post['second'];
    $minute = $post['minute'];
    $hour = $post['hour'];
    $date = $post['date'];
    $month = date('m', strtotime($date));
    $year = date('y', strtotime($date));
    $day = date('d', strtotime($date));
    $m31 = array(1, 3, 5, 7, 8, 10, 12);
    $m30 = array(4, 6, 9, 11);
    ?>
    <div class="form">
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">    
            <div class="name">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value="<?= isset($name)? $name:'' ?> " required></input><br>
            </div>
            <div class="date">
                <label for="date">Date</label>
                <input type="date" name="date" value="<?= isset($date)? $date:'' ?> " required><br>
            </div>
            <div class="time">
                <label for="time">Time</label>
                <select name="second" id="" required>
                    <?php
                    for ($i = 1; $i <= 60; $i++) {
                        if ($second == $i)
                            print("<option selected>$i</option>");
                    }
                    ?>
                </select>
                <label for="">s</label>
                <select name="minute" id="" required>
                    <?php
                    for ($i = 1; $i <= 60; $i++) {
                        if ($minute == $i)
                            print("<option selected>$i</option>");
                    }
                    ?>
                </select>
                <label for="">m</label>
                <select name="hour" id="" required>
                    <?php
                    for ($i = 1; $i <= 24; $i++) {
                        if( $hour== $i)
                            print("<option selected>$i</option>");
                    }
                    ?>
                </select>
                <label for="">h</label><br>
            </div>
            <div class="button">
            <button type="submit">Submit</button>
            <!-- <button type="reset" name="reset">Reset</button><br> -->
            <input type="reset" value="Reset">
                </div>
        </form>
    </div>
    <div class="print">
        <?php
        echo ('Hi, <b>' . $name . '</b>!<br>');
        echo ('You have choose to have an appointment on <b>' . $second . ':' . $minute . ':' . $hour . ' ' . $day . '/' . $month . '/' . $year . '</b>');
        echo ('<br><br>More information:<br><br>');
        echo ('In 12 hours, the time and date is ');
        if ($hour > 12) {

            echo ('<b>' . $second . ':' . $minute);
            echo ('<b>:' . ($hour - 12) . '</b>PM</b><br>');
        } else {

            echo ('<b>' . $second . ':' . $minute);
            echo ('<b>:' . $hour . '</b>AM</b><br>');
        }
        if (in_array($month, $m31)) {
            echo ('This month has 31 days!');
        } elseif (in_array($month, $m30)) {
            echo ('This month has 30 days!');
        } elseif ($month % 4 == 0 and $month % 100 != 0) {
            echo ('This month has 28 days!');
        } else {
            echo ('This month has 29 days!');
        }

        ?>
    </div>
</body>

</html>
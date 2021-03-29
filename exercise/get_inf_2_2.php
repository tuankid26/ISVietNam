<html>

<head>
    <link rel="stylesheet" href="./assets/style2_2.css">
</head>

<body>
    <div class="form">
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
        <label for="name">Name</label>
        <input type="text" id="name" name="name"></input><br>
        <label for="date">Date</label>
        <select name="day" id="">
            <?php
            for ($i = 1; $i <= 31; $i++) {
                print("<option>$i</option>");
            }
            ?>
        </select>
        <select name="month" id="">
            <?php
            for ($i = 1; $i <= 12; $i++) {
                print("<option>$i</option>");
            }
            ?>
        </select>
        <select name="year" id="">
            <?php
            for ($i = 1980; $i <= 2030; $i++) {
                print("<option>$i</option>");
            }
            ?>
        </select><br>
        <label for="time">Time</label>
        <select name="second" id="">
            <?php
            for ($i = 1; $i <= 60; $i++) {
                print("<option>$i</option>");
            }
            ?>
        </select>
        <select name="minute" id="">
            <?php
            for ($i = 1; $i <= 60; $i++) {
                print("<option>$i</option>");
            }
            ?>
        </select>
        <select name="hour" id="">
            <?php
            for ($i = 1; $i <= 24; $i++) {
                print("<option>$i</option>");
            }
            ?>
        </select><br>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button><br>
    </form>
    <?php 
            $post = $_POST;
            $name = $post['name'];
            $second = $post['second'];
            $minute = $post['minute'];
            $hour = $post['hour'];
            $day = $post['day'];
            $month = $post['month'];
            $year = $post['year'];
            echo('Hi,'.$name.'!<br>');
            echo('You have choose to have an appointment on '.$hour.':'.$minute.':'.$second.' '.$day.'/'.$month.'/'.$year);
            echo('<br><br>More information:<br><br>');
            echo('In 12 hours, the time and date is ');
            if ($hour > 12){
                echo($hour -12);
                echo(':'.$minute.':'.$second.' PM<br>');
            }
            else{
                echo($hour);
                echo(':'.$minute.':'.$second.' AM<br>');
            }
            $m31 = array(1,3,5,7,8,10,12);
            $m30 = array(4,6,9,11);
            if (in_array($month, $m31)){
                echo('This month has 31 days!');
            }
            elseif (in_array($month, $m30)){
                echo('This month has 30 days!');
            }
            elseif ($month % 4 == 0 and $month % 100 != 0){
                echo('This month has 28 days!');
            }
            else{
                echo('This month has 29 days!');
            }

        ?>
        </div>
</body>
</html>
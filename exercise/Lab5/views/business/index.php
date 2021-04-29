<html>

<head>
    <style>
        select#cars {
            margin: 20px;
        }
        a, label{
            color: #222222;
            font-family: georgia, times;
            font-size: 24px;
            font-weight: normal;
            line-height: 1.2em;
            color: black;
            text-decoration: none;

        }

        a:hover {
            background-color: #BCFC3D;
        }
    </style>
</head>

<body>
    <a href="http://localhost/ISVietNam/exercise/Lab5/">Home</a>
    <h1>Business Registration</h1>
    <!-- <?php print_r($category); ?> -->
    <form action="index.php?controller=business&action=add" method="POST">
        <table>
            <tr>
                <label for="cars">Cick one or ctrl + click to multil choice</label><br>
                <select id="cars" name="cate[]" size="3" multiple require>
                    <?php 
                    foreach ($category as $cate){
                        echo '<option value="'.$cate->Title.'">'.$cate->Title.'</option>';
                    }
                    ?>
                    <!-- <option value="Automotive Parts and Supplies">Automotive Parts and Supplies</option>
                    <option value="Seafood Stores and Restaurant">Seafood Stores and Restaurant</option>
                    <option value="Health and Beauty">Health and Beauty</option>
                    <option value="Schools and Colleges">Schools and Colleges</option>
                    <option value="Community Sports and ReCreation">Community Sports and ReCreation</option> -->
                </select>
            </tr>
            <tr>
                <td><label for="name">ID</label></td>
                <td><input type="text" name="idbiz" require></td>
            </tr>
            <tr>
                <td><label for="name">Business Name</label></td>
                <td><input type="text" name="name" require></td>
            </tr>
            <tr>
                <td><label for="address">Address</label></td>
                <td><input type="text" name="address" require></td>
            </tr>
            <tr>
                <td><label for="city">City</label></td>
                <td><input type="text" name="city" require></td>
            </tr>
            <tr>
                <td><label for="tele">Telephone</label></td>
                <td><input type="text" name="tele" require></td>
            </tr>
            <tr>
                <td><label for="url">URL</label></td>
                <td><input type="text" name="url" require></td>
            </tr>

        </table>
        <button type="submit">Add Business</button>
    </form>
</body>

</html>
<html>

<head>
    <style>
        th {
            background: wheat;
        }

        input {
            width: 100%;
        }
        a {
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
    <h1>Category Administration</h1>
    <form action="index.php?controller=categorys&action=add" method="POST">
        <table style="width: 50%;">
            <tr>
                <th style="width: 20%;">Cat ID</th>
                <th>Title</th>
                <th>Description</th>
            </tr>

            <?php foreach ($categorys as $category) {
                echo '<tr>';
                echo '<td>' . $category->CategoryID . '</td>';
                echo '<td>' . $category->Title . '</td>';
                echo '<td>' . $category->Description . '</td>';
                echo '</tr>';
            } ?>
            <tr>
                <td><input type="text" name="id"></td>
                <td><input type="text" name="title"></td>
                <td><input type="text" name="des"></td>
            </tr>
            <tr>
                <td style="text-align: left;"><button type="submit">Add category</button></td>
            </tr>
        </table>

    </form>
</body>

</html>
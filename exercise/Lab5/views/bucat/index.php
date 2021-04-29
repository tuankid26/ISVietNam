<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
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

        h1 {
            color: #000000;
            font-size: 40px;
            letter-spacing: -2px;
            line-height: 1em;
            font-family: helvetica, arial, sans-serif;
            border-bottom: 1px dotted #cccccc;
        }
    </style>
</head>

<body>
    <a href="http://localhost/ISVietNam/exercise/Lab5/">Home</a>
    <h1>Business Listings</h1>
    <form action="" method="GET">
        <table style="width:60%">
            <tr>
                <th>
                    <h2>Click on a category to find business listings</h2>
                </th>
            </tr>
            <tr>
                <td>
                    <?php foreach ($bucat as $k => $b) {
                        // echo '<tr>';
                        echo "<a href='http://localhost/ISVietNam/exercise/Lab5/?controller=bucat&tab=$k'>" . $b->Title . '</a><br>';
                        // echo '</tr>';
                    } ?>
                </td>
            </tr>
        </table>
        <table style="width: 60%;">
            <tr>
                <th>
                    <h2>Name</h2>
                </th>
                <th>
                    <h2>Address</h2>
                </th>
                <th>
                    <h2>City</h2>
                </th>
                <th>
                    <h2>Telephone</h2>
                </th>
                <th>
                    <h2>URL</h2>
                </th>
            </tr>
            <?php
            if (isset($_GET['tab']))
                $num = $_GET['tab'];
            else $num = 0;
            foreach ($bucat_id as $x) {
                if (isset($x)) {
                    foreach ($x as $x_) {
                        if ($x_[1] == $bucat[$num]->Title) {
                            foreach ($business as $busi) {
                                if ($x_[0] == $busi->ID) {
                                    echo '<tr>';
                                    echo '<td><h3>' . $busi->Name . '</h3></td>';
                                    echo '<td><h3>' . $busi->Address . '</h3></td>';
                                    echo '<td><h3>' . $busi->City . '</h3></td>';
                                    echo '<td><h3>' . $busi->Telephone . '</h3></td>';
                                    echo '<td><h3>' . $busi->URL . '</h3></td>';
                                    echo '</tr>';
                                }
                            }
                        }
                    }
                }
            }
            // echo '<pre>';
            // print_r($bucat);
            // print_r($bucat_id);
            // print_r($business);
            ?>
            </tr>
        </table>
    </form>
</body>

</html>
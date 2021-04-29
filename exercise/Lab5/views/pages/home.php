<html>

<head>
  <link rel="stylesheet" href="../../public/config.php">
  <style>
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
      font-size: 41px;
      letter-spacing: -2px;
      line-height: 1em;
      font-family: helvetica, arial, sans-serif;
      border-bottom: 1px dotted #cccccc;
    }
  </style>
</head>

<body>
  <h1>LAB5</h1>
  <?php echo '<a href='.BASE_PATH.'index.php?controller=business>Business Registration</a><br>'  ?>
  <?php echo '<a href='.BASE_PATH.'index.php?controller=categorys>Category Adminstration</a><br>'  ?>
  <?php echo '<a href='.BASE_PATH.'index.php?controller=bucat>Business Listing</a>'  ?>
</body>

</html>
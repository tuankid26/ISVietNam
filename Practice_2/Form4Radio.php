<html>
        <head><title> Receiving Input </title></head>
        <body> 
            <font size = 5> Thankyou: Got your input </font>
            <?php 
            $email = $_POST(email);
            $contact = $_POst("contact");
            print(("<br Your email address is $email"));
            print("<br> Contact preference is $contact");
            ?>
        </body>
    </html>
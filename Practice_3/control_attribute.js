<DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<BODY>
<SCRIPT type = "text/javascript">

$(document).ready
(
  function()
  {
    $("..showItLink").click
    (
      function(event) 
      {
        var containerPosition;
        var createdDiv;

        //see if the div already exists
        createdDiv = $(this).children(".postComment");

        if (createdDiv.length == 0) 
        {
          //This is where the attribute is used so that the CreateDiv
          //method can take the textToShow and fill the div's innerText
          //with it                  V V V V V V
          createdDiv = CreateDiv(this.textToShow, "postComment"); 
          $(this).append(createdDiv);
          $(this).children(".postComment").hide();
        }

        $(createdDiv).toggle();
        event.preventDefault();
      }
    );
  }
);

</SCRIPT>

</BODY>


</HTML>
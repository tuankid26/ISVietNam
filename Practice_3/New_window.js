<DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<BODY>
<SCRIPT type = "text/javascript">

var myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
myWindow.document.write("<p>This is 'myWindow'</p>");   // Text in the new window
myWindow.opener.document.write("<p>This is the source window!</p>");  // Text in the window that created the new window

</SCRIPT>

</BODY>


</HTML>
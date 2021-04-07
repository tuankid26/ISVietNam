<DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<BODY>
<SCRIPT type = "text/javascript">

var count = 0;
function _showHello() {
	count = count++;
    if (!LabelWithText) {
        LabelWithText = new LabelWidget();
	LabelWithText.text = "output:" + parseInt(count);
        Main.uiGroup.add_actor(LabelWithText);
    }

</SCRIPT>

</BODY>


</HTML>
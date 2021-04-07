<DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<BODY>
<SCRIPT type = "text/javascript">
//Create array and add three elements

var myArray = new Array();
myArray.push("Tim");
myArray.push("Janice");
myArray.push("Joe");

document.writeln(myArray.toString());
documetn.writeln("<BR>");

//access array element by index 
document.writeln(myArray[1]);
documnet.writeln("<BR>");

//printout the length of the array and newline 
document.writeln("Array Size: ", + myArray.length);
document.writeln("<BR>");

//Pop the last element off the array and display it 
var who = myArray.pop();
document.writeln("Popped element: "+ who);
document.writeln("<BR>");

//print out the length of the array and newline
document.writeln("Array Size: ", + myArray.length);
document.writeln("<BR>");
document.writeln("<BR>");


var otherArray = new Array("dog",3,8.4);
document.writeln(otherArray.toString());
document.writeln("<BR>");
document.writeln("<BR>");

//setting and accessing associative arrays
otherArray["key"] = "value"
document.writeln(otherArray["key"]);
document.writeln("<BR>");

</SCRIPT>

</BODY>


</HTML>
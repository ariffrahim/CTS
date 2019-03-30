function add_field()
{
  var total_text=document.getElementsByClassName("input_text");
  total_text=total_text.length+1;
  document.getElementById("field_div").innerHTML=document.getElementById("field_div").innerHTML+
  "<p id='input_text"+total_text+"_wrapper' ><input type='text1' class='input_text' id='input_text"+total_text+"' placeholder='Code Course:Course Name'> &nbsp <input type='text1' class='input_text' id='input_text"+total_text+"' placeholder='Grade'><input type='button' value='Remove' onclick=remove_field('input_text"+total_text+"');></p>";
}
function remove_field(id)
{
  document.getElementById(id+"_wrapper").innerHTML="";
}

function add_field1()
{
  var total_text=document.getElementsByClassName("input_text");
  total_text=total_text.length+1;
  document.getElementById("field_div1").innerHTML=document.getElementById("field_div1").innerHTML+
  "<p id='input_text"+total_text+"_wrapper' ><input type='text1' class='input_text' id='input_text"+total_text+"' placeholder='Code Course:Course Name'> &nbsp <input type='text1' class='input_text' id='input_text"+total_text+"' placeholder='Grade'><input type='button' value='Remove' onclick=remove_field1('input_text"+total_text+"');></p>";
}
function remove_field1(id)
{
  document.getElementById(id+"_wrapper").innerHTML="";
}

	var countDownDate = localStorage.getItem("setTime");

	// Update the count down every 1 second
	var x = setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();
    
	// Find the distance between now and the count down date
	var distance = countDownDate - now;
    
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
	// Output the result in an element with id="demo"
	document.getElementById("demo").innerHTML = days + "d " + hours + "h "
	+ minutes + "m " + seconds + "s ";
    
	// If the count down is over, write some text 
	if (distance < 0) {
		clearInterval(x);
		//habis masa
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
	}, 1000);

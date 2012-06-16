$(document).bind('mobileinit', function() {
	//alert("document ready");
 var head = logo_head();
//alert(document.getElementById("gstar_header").innerHTML);
//document.getElementById("gstar_header").innerHTML = "test2";
//document.getElementById("gstar_header").innerHTML = head;
//alert(head);
alert($('#gstar_header').html);
 $('#gstar_header').html = head;

});

function logo_head() {
	
	var html = '	<div class="ui-block-a">';
	html += '		<center><img name="logo" id="logo" src="images/giftedstar_alpha.png" alt="GiftedStar Logo" style="height:100%"/></center>';
	html += '	</div>';
	html += '	<div class="ui-block-b">';
	html += '		<center><img name="register" id="register" src="images/monkey_signup.png" alt="Register" style="height:90%"/></center>';
	html += '	</div>';
	html += '	<div class="ui-block-c">';
	html += '		<center><img name="about" id="about" src="images/monkey_about.png" alt="About Us" style="height:90%"/></center>';
	html += '	</div>';
	return html;

}
function validateForm(){
	for(var i = 0; i < myform.elements.length; i++){
		if(myform.elements[i].className == "req" && myform.elements[i].value.length == 0){
		alert("Fill in the required fields.");
		return false;
		}
	}
	var email = document.getElementById('email').value;
	var atpos = email.indexOf('@');
	var dotpos = email.indexOf('.');
	if(atpos < 1 || dotpos < atpos+2 || dotpos >= email.length){
		alert("Enter a valid email address.")
	}

}
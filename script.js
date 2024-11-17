function confirmation(){
	let text = "Press a button!\nEither OK or Cancel.";
	if (confirm(text) == true) {
		alert("Successful signup!")
	} else {
		location.reload();
	}
	

}

function validate(){


	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let email = document.getElementsByName("email")[0].value
	let password = document.getElementsByName("password")[0].value
    if ( re.test(email) && password.length>8 ) {
		console.log("valid email and password")
		document.getElementById("email_error").innerHTML  = ""
		document.getElementById("password_error").innerHTML  = ""

		document.getElementById("valid_message").innerHTML = ""
		document.getElementById("valid_message").innerHTML += "All good to go!"
		document.getElementById("valid_message").style.color = "green" 
        
    }
    else {
        // invalid email, maybe show an error to the user.
		
		document.getElementById("valid_message").innerHTML = ""
		if(!re.test(email)){
			document.getElementById("email_error").innerHTML  =""
			document.getElementById("email_error").innerHTML  += "Make sure email is more than 3 characters and has @ and a ."
			
		}else{
			document.getElementById("email_error").innerHTML  = ""
			
		}


		if(password.length <= 8){
			document.getElementById("password_error").innerHTML  =""
			document.getElementById("password_error").innerHTML  += "Make sure password is more than 8 characters."
			
		}else{
			document.getElementById("password_error").innerHTML  = ""
			
		}


    }

	



}


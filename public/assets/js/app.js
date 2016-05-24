// signup/signin 

$('#login').on("click", function(){  
    //stores 
	var loginStuff= {
		username: $("username").val().trim(), 
		email:$("email").val().trim(), 
		password:$("password").val().trim()
	}
	//grabs
	$("username").val().trim(); 
	$("email").val().trim(); 
	$("password").val().trim(); 
	
	//clears all 
	$("username").val("") 

	$.ajax({
		type:"POST",
		url:"users/login", 
		data: loginStuff 

	}) 

}); 

// signup/signin 

$('#signUp').on("click", function(){  
    //stores 
	var loginStuff= {
		username: $("username").val().trim(), 
		email:$("email").val().trim(), 
		password:$("password").val().trim()
	}
	//grabs
	$("username").val().trim(); 
	$("email").val().trim(); 
	$("password").val().trim(); 
	
	//clears all 
	$("username").val("") 

	$.ajax({
		type:"POST",
		url:"users/login", 
		data: loginStuff 

	}) 

});
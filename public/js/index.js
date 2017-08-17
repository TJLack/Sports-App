// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myOtherModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myOtherBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("firstClose");
var span2 = document.getElementById("secondClose");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
   
    modal.style.display = "none";
}
span2.onclick = function() {
  console.log("Stuff"); 
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}





// need to grab the users data when they try to log in or when they sign-up and push / check that via the database. 
//If it returns a result, take the user to the homepage. Otherwise tell the user there password or username was invalid
$("#loginSubmit").on("click",function(){

	event.preventDefault();
	
	console.log("User attemping to sign-in");
	var userEmail = $("#email").val().trim();
	var userPassword = $("#pwd").val().trim();

	console.log(userEmail);
	console.log(userPassword);

	checkUser(userEmail,userPassword);

	
});

$("#signSubmit").on("click",function(){

	event.preventDefault();
	
	console.log("New User signing up");
	var userEmail = $("#newEmail").val().trim();
	var userPassword = $("#newPwd").val().trim();
	var confirmedPassword = $("#confirmedPwd").val().trim();
	var userFirstname = $("#firstName").val().trim();
	var userLastname = $("#lastName").val().trim();

	console.log(userEmail);
	console.log(userPassword);
	console.log(confirmedPassword);
	console.log(userFirstname);
	console.log(userLastname);

	insertUser(userEmail,userPassword,confirmedPassword,userFirstname,userLastname);

})

 function insertUser(userEmail,userPwd,confirmedPwd,userFirstname,userLastname) {
    
    var user = {
      userEmail: userEmail,
      userPwd: userPwd,
      userFirstname: userFirstname,
      userLastname: userLastname

    };

    if(user.userPwd === user.confirmedPwd){

    $.post("/api/users/", user, loadNewPage);

	}else{
		//let the user know the passwords don't match
	}
   
  }
  function checkUser(userEmail,userPwd){
    $.get("/api/users", function(data) {
      
      for(var i = 0; i < data.length ; i++){
      	if(userEmail === data[i].userEmail){
      		if(userPwd === data[i].userPwd){
      			loadNewPage();

      		}else{
      			//let the user know the password was invalid
      		}
      	}else{
      		//let the user know the email was invalid
      	}
      }
    });

  }

  function loadNewPage(){
  	// this would load chatroom.html
  	console.log("new page loaded!")
  }
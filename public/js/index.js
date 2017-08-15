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
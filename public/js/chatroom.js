//Page direction buttons

$("#infoBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#information").offset().top},
        'slow');
});
$("#chatBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#chatroom").offset().top},
        'slow');
});
$("#mapBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#map").offset().top},
        'slow');
});



//chatroom submit clicked
$("#chatSubmit").on("click",function(){

	event.preventDefault();
	console.log("New Chat message");

	var userName = $("#username").val().trim();
	var userMessage = $("#message").val().trim();
	var groupName = $("#group").val().trim();

	insertPost(userName,userMessage,groupName);
})


function insertPost(userName, userMessage, groupName) {
    
    var chat = {
      title: userName,
      body: userMessage,
      group: groupName
	};
    $.post("/api/posts/", chat, checkPosts);
}


function checkPosts(){

	//check all posts 

	//append posts

}
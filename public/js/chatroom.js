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
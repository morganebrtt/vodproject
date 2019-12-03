$(document).ready(function() {
    $("#myBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#carousel-v").offset().top
        }, 2700);
    });

});
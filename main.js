$(document).ready(function () {

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('#menu').addClass('stickytop');
            } else {
                $('#menu').removeClass('stickytop');
            }
        });
    });

    
//    ANIMATE
    
    $(".sent-head h1").addClass("animated  fadeIn");
    $(".sent-head p").addClass("animated fadeInUp");
    
//     MAGNIFIC-POPUP

	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});
// 
    
    
});

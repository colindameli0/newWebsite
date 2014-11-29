$(document).ready(function(){

	// SCROLL-TO-NEXT-PAGE
	$(".page-down").click(function(e) {
		event.preventDefault();
	    $('body').animate({
	    	scrollTop: $("#about").offset().top}, 700);
	});

	//SMOOTH SCROLL MENU TOGGLE
	$('a[href^="#"]').click(function(e) {
	    var target = $(this.hash);
	    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
	    if (target.length == 0) target = $('html');
	    $('html, body').animate({ scrollTop: target.offset().top -60 }, 500);
	    return false;
	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 400) {
	        $(".nav").addClass("switch");
	        $(".nav").addClass("logo");
	        $(".nav h3").removeClass("hide");
	    } else {
	        $(".nav").removeClass("switch");
	        $(".nav h3").addClass("hide");
	    }
	});





});
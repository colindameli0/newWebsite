

$(document).ready(function() {

    // (function($) {
        // SCROLL-TO-NEXT-PAGE
        $(".page-down").click(function(e) {
            event.preventDefault();
            $('body').animate({
                scrollTop: $("#about").offset().top
            }, 700);
        });

        //SMOOTH SCROLL MENU TOGGLE
        $('a[href^="#"]').click(function(e) {
            var target = $(this.hash);
            if (target.length === 0) target = $('a[name="' + this.hash.substr(1) + '"]');
            if (target.length === 0) target = $('html');
            $('html, body').animate({
                scrollTop: target.offset().top - 75
            }, 500);
            return false;
        });

        //SHOW FIXED NAV ON SCROLL
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 350) {
                $(".nav").addClass("switch");
                $(".nav").addClass("logo");
                $(".nav h3").removeClass("hide");
                $(".nav ul").addClass("collapse");
                $(".nav ul").addClass("space");
            } else {
                $(".nav").removeClass("switch");
                $(".nav h3").addClass("hide");
            }
        });

        var $mobileMenu = $('.mobile-menu');

        //MOBILE MENU DISPLAY
        $mobileMenu.click(function(e) {
            e.preventDefault();
            $('.nav ul').slideToggle('fast');
        });


        //HIDE MENU ON LINK CLICK
        $(".nav li a").on('click', function() {
            $(".nav-menu").hide();
            $mobileMenu.toggleClass('open');
        });

        $(function() {
            $mobileMenu.click(function(e) {
                e.preventDefault();
                $(this).toggleClass('open');
            });
        });

        //RANDOM COLOUR GENERATOR FOR FOOTER SOCIAL ICONS
        $('.social-footer a').on('mouseover', function() {
            $(this).css('color', randomColor());
        });

        $('.social-footer a').on('mouseout', function() {
            $(this).css('color', '#fff');
        });


    // })(jQuery);
});

// if($(window).width() <= 600){
//   // do your stuff
// }
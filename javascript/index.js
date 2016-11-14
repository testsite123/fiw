$(document).ready(function(){

	var windowWidth = $(window).width();

// Header---Header---Header---Header---Header---Header---
	$(".slider").bxSlider({
		auto: true,
		pause: 4000
	});


	// header-block margin
		$(window).resize(function(){
			windowWidth = $(window).width();
			headerBlockWidth = $(".header-block").width();

			if (windowWidth < 1300) {
				$(".header-block").css("margin-left", -windowWidth/2);
			} else {
				$(".header-block").css("margin-left", -headerBlockWidth / 2);
			}
		});
	// end header-block margin

	// плавний якір
	$(".menu li, .footer-menu li").on("click", "a", function(event){
		event.preventDefault();

		var idMenu = $(this).attr("href")
		
		var top = $(idMenu).offset().top;


		$("body, html").animate({scrollTop: top}, 1500);
	});
	// end плавний якір

// Header---Header---Header---Header---Header---Header---
	
// Portfolio---Portfolio---Portfolio---Portfolio---Portfolio---
	$(".open-projects").click(function(){
		$(".portfolio-open-projects").css("display", "none");
		$(".portfolio-block-hidden, .resizer-hidden").css("display", "block");
		$(window).trigger('resize').trigger('scroll');
	});

	$(".close-projects").click(function(){
		$(".portfolio-open-projects").css("display", "block");
		$(".portfolio-block-hidden, .resizer-hidden").css("display", "none");
		$(window).trigger('resize').trigger('scroll');

		$("html, body").animate({
          	scrollTop: $(".portfolio").offset().top
    	}, 1500);
	});
// Portfolio---Portfolio---Portfolio---Portfolio---Portfolio---

// Services---Services---Services---Services---Services---

	// changing information on click 
	$(".categories-wrapper").children().click(function(){
		for (var i = 0; i < $(".categories-description").children().eq(0).children().eq(0).children().length; i++) {
			if( $(".categories-description").children().eq(0).children().eq(0).children().eq(i).hasClass($(this)[0].id + "-description") ) {
				if ($(".categories-description").children().eq(0).children().eq(0).children().eq(i).hasClass("description-hidden")) {
					$(".categories-description").children().eq(0).children().eq(0).children().eq(i).toggleClass("description-hidden");
				}
				
			} else {
				if ($(".categories-description").children().eq(0).children().eq(0).children().eq(i).hasClass("description-hidden") !== true) {
					$(".categories-description").children().eq(0).children().eq(0).children().eq(i).addClass("description-hidden");
				}
			}
		}

		$(".categories-description").children().eq(0).children().eq(0).css("top", 0);
		$(globalCustomScroll).mCustomScrollbar("update");

	});
	// changing information on click 

// Services---Services---Services---Services---Services---

// Contacts---Contacts---Contacts---Contacts---Contacts---
	$(".parallax-layer").parallax({
		imageSrc: 'image/parallax/parallax.png'
	});

	$(window).on('resize', function(){
	    if(screen.height === window.innerHeight){
	      document.location.reload(true);
	    }
	});
// Contacts---Contacts---Contacts---Contacts---Contacts---
});


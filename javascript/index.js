$(document).ready(function(){

	var windowWidth = $(window).width();

// Header---Header---Header---Header---Header---Header---
	$(".slider").bxSlider({
		auto: true,
		pause: 6000
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

// Header---Header---Header---Header---Header---Header---

// Portfolio---Portfolio---Portfolio---Portfolio---Portfolio---
	$(".portfolio-resizer-text").click(function(){
		$(".portfolio-resizer").css("display", "none");
		$(".portfolio").css("height", "100%").css("overflow", "visible").css("padding-bottom", "50px");
		$(window).trigger('resize').trigger('scroll');
	});
// Portfolio---Portfolio---Portfolio---Portfolio---Portfolio---

// Services---Services---Services---Services---Services---
	$(".categories-wrapper").children().click(function(){
		for (var i = 0; i < $(".categories-description").children().length; i++) {
			if( $(".categories-description").children().eq(i).hasClass($(this)[0].id + "-description") ) {
				if ($(".categories-description").children().eq(i).hasClass("description-hidden")) {
					$(".categories-description").children().eq(i).toggleClass("description-hidden");
				}
				
			} else {
				if ($(".categories-description").children().eq(i).hasClass("description-hidden") !== true) {
					$(".categories-description").children().eq(i).addClass("description-hidden");
				}
			}
		}
	});
// Services---Services---Services---Services---Services---

// Contacts---Contacts---Contacts---Contacts---Contacts---
	$(".parallax-layer").parallax({
		imageSrc: 'image/parallax/parallax.png'
	});
// Contacts---Contacts---Contacts---Contacts---Contacts---
});


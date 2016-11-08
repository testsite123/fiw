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

	// $("#architecture").click(function(){
	// 	$(".categories-description").children().eq(0).toggleClass("description-hidden");
	// 	$(".categories-description").children().eq(1).toggleClass("description-hidden");
	// 	$(".categories-description").children().eq(2).toggleClass("description-hidden");
	// 	$(".categories-description").children().eq(3).toggleClass("description-hidden");
	// });

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

// Header---Header---Header---Header---Header---Header---
});
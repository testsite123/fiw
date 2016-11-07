$(document).ready(function(){

	var windowWidth = $(window).width();

// Header---Header---Header---Header---Header---Header---

	// slider in header
	var sliderImage = document.getElementById("main_image");
	var imageArray = ["image/header/slider/img1.png", "image/header/slider/img2.png", "image/header/slider/img3.png", "image/header/slider/img4.png", "image/header/slider/img5.png"];
	var imageIndex = 0;

	$("#main_image").css("transition", "0.6s");

	function changeImage() {
		sliderImage.setAttribute("src", imageArray[imageIndex]);
		imageIndex++;
		if (imageIndex >= imageArray.length) {
			imageIndex = 0;
		}
	}

	setInterval(changeImage, 4000);
	// end slider in header

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

	// header menu after-before
	
	// header menu after-before

// Header---Header---Header---Header---Header---Header---
});
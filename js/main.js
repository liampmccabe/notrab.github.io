$(function() {

	$(".logo a").typed({
		strings: ["codthsi", "codethisway."],
		backDelay: 300,
		typeSpeed: 30
	});

	$(window).scroll(function() {
		var top = $(window).scrollTop();
		var opacity, top;
		if(top > 0) {
			$('.main-header').addClass('bg');

			top = Math.floor(top/2);
			opacity = 1-(top*0.002);

			$('.hero-content').css({
				'top': top,
				'opacity': opacity
			});
		} else {
			$('.main-header').removeClass('bg');
		}
	});

});

$(function() {

	$(".logo a").typed({
		strings: ["codthsi", "codethisway."],
		backDelay: 300,
		typeSpeed: 30
	});

	$(window).scroll(function() {
		var top = $(window).scrollTop();
		var opacityv, topv;

		topv = Math.floor(top/2);
		opacityv = 1-(top*0.002);

		$('.hero-content').css({
			'top': topv,
			'opacity': opacityv
		});

		if(top > 200 && top < $('.hero').height()) {
			$('.main-header').addClass('hidden');
		} else {
			$('.main-header').removeClass('hidden');
		}

		if(top > $('.hero').height()) {
			$('.main-header').addClass('bg');
		} else {
			$('.main-header').removeClass('bg');
		}

	});

	var top = $(window).scrollTop();

	if(top > 200 && top < $('.hero').height()) {
		$('.main-header').addClass('hidden');
	} else {
		$('.main-header').removeClass('hidden');
	}

	if(top > $('.hero').height()) {
		$('.main-header').addClass('bg');
	} else {
		$('.main-header').removeClass('bg');
	}

});

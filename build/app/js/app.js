// Начальная функция

$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();
(function(){
	// variables
	var slider = $('.hero__slider'),
		dots = $('.hero__dot')
		activeClass = 'active'
	
	// listen init for addClass for first dot
	slider.on('init', function() { dots.first().addClass(activeClass) });

	// init slick with options
	slider.slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	})

	// listen change slide for change class for dot
	slider.on('afterChange', function(event, slick, currentSlide){
		dots.eq(currentSlide).addClass(activeClass).siblings().removeClass(activeClass)
	});

	// click dots - change slide
	dots.click(function(){ slider.slick('slickGoTo', $(this).index(), false) });
})();
(function(){
	var section = $('.numbers'),
		blocks = $('.numbers__num'),
		flag = true,
		animateNumbers = function () {
			for (i=0; i<blocks.length;i++) {
				var currentNumber = blocks.eq(i).data('num')
				blocks.eq(i).animate({num: currentNumber - 3}, {
					duration: 2000,
					step: function (num) {
						this.innerHTML = (num + 3).toFixed(0);
					}
				});
			}
		}
	
	$(window).scroll(function() {
		var scrollEvent = ($(window).scrollTop() > (section.position().top - $(window).height() + 200));
		if (scrollEvent && flag) {
			flag = false;
			animateNumbers()
		}
	});
})();
(function(){
	$('.header__burger').click(function(){
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
	});

	$(window).resize(function(){
		if (window.innerWidth > 768) {
			$('.header__burger').removeClass('active');
			$('.header__menu').removeClass('active');
		}
	})
})();
(function(){
	$('.doing__block-header').click(function(){
		var block = $(this).closest('.doing__block');
		if (block.hasClass('active')) {
			block.removeClass('active')
		} else {
			$(this).closest('.doing__block').addClass('active').siblings().removeClass('active')
		}
	});
})();
(function(){
	$('.review-slider').slick()
})();
(function(){
	// click menu item for scroll page
	$('.menu__item').click(function(e){
		e.preventDefault()
		var id = $(this).attr('href'),
			pos = $(id).offset().top;
		
		$('html,body').animate({ scrollTop: pos },400);

		if (window.innerWidth <= 768) {
			$('.header__burger').toggleClass('active');
			$('.header__menu').toggleClass('active');
		}
	});
})();
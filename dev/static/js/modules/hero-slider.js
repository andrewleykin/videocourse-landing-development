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
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
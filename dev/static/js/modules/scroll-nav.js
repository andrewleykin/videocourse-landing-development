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
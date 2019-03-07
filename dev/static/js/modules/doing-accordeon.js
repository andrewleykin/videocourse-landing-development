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
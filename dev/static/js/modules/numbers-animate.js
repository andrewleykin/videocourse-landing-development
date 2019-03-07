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
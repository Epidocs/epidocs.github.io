$(document).ready(function() {
	if ($('#header').length) {
		// Header resizing
		var resize = function() {
			$('#header').css('height', $(window).height() + 'px');
		}
		resize();
		$(window).resize(resize);
		
		// Go to content
		$('#header .bottom-container').click(function() {
			$('html, body').animate({
				scrollTop: $('#main').offset().top
			}, 800);
		});
	}
	
	// Go to top
	$('#go-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
	
	// Document scroll
	$(document).scroll(function() {
		if ($(document).scrollTop() <= 0) $('#go-to-top').fadeOut();
		else $('#go-to-top').fadeIn();
	});
});
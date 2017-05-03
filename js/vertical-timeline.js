jQuery(document).ready(function($){
	var $timeline_blocks = $('.cd-timeline-block');
	var $hide_classes = '.cd-timeline-img, .cd-timeline-point, .cd-timeline-content';

	//hide timeline blocks which are outside the viewport
	$timeline_blocks.each(function(){
		if(!inViewport(this)) {
			$(this).find($hide_classes).addClass('hide-timeline');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_blocks.each(function(){
			var is_hidden = $(this).find($hide_classes).hasClass('hide-timeline');

			if(is_hidden && inViewport(this)) {
				$(this).find($hide_classes).removeClass('hide-timeline').addClass('bounce-in');
			}
		});
	});

	function inViewport(selector) {
		return $(selector).offset().top <= $(window).scrollTop()+$(window).height()*0.75;
	}
});
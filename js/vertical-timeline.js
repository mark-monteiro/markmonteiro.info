jQuery(document).ready(function($){
    var $timeline_blocks = $('.cd-timeline-block');
    var $hide_classes = '.cd-timeline-img, .cd-timeline-point, .cd-timeline-content';

    //hide timeline blocks which are outside the viewport
    $timeline_blocks.each(function(){
        if(!inViewport(this)) {
            $(this).find($hide_classes).addClass('hide-timeline');
        }
    });

    //on scrolling, show/animate timeline blocks when they enter the viewport
    $(window).on('scroll', function(){
        $timeline_blocks.each(function(){
            var is_hidden = $(this).find($hide_classes).hasClass('hide-timeline');

            if(is_hidden && inViewport(this)) {
                $(this).find($hide_classes).removeClass('hide-timeline').addClass('bounce-in');
            }
        });
    });

    // Initialize toggle button text
    var defaultToggleText = 'Read More'
    var $toggleButtons = $('.cd-timeline-block [data-toggle="collapse"]');
    $toggleButtons.text(defaultToggleText);
    
    // Update button text when its target content is shown or hidden
    $toggleButtons.each(function(index, elem) {
        var $button = $(elem);
        var $collapseTarget = $($(elem).data('target'));
        $collapseTarget.on('show.bs.collapse hide.bs.collapse', function(e) {
            $button.text(e.type === 'show' ? "Collapse" : defaultToggleText);
        });
    });

    // Add handler for the 'show' event on each collapse target
    $collapseTargets = $toggleButtons.map(function(index, elem) { return $($(elem).data('target')).get(); });
    $collapseTargets.on('show.bs.collapse', function(e) {
        // Get the total height of all expanded items before this one
        var $currentCollapseTarget = $(this);
        var $currentTimelineBlock = $currentCollapseTarget.closest('.cd-timeline-block');
        var $prevExpandedTargets = $currentTimelineBlock.prevAll().find('.collapse.in')
        var prevExpandedTargetsHeight = $prevExpandedTargets
            .map(function(index, elem) { return $(elem).outerHeight(); })
            .get()
            .reduce(function(a, b) { return a + b; }, 0);

        // Scroll the current timeline block into view
        var scrollTop =
            $currentTimelineBlock.offset().top -
            parseFloat($currentTimelineBlock.css('margin-top')) - 
            $('.navbar-fixed-top .navbar-header').outerHeight() -
            prevExpandedTargetsHeight;
        $('html, body').stop().animate({ scrollTop: scrollTop });

        // Collapse all the other timeline items
        $collapseTargets
            .not($currentCollapseTarget)
            .filter('.collapse.in')
            .collapse('hide');

        // Update the URL hash
        // TODO: Add polyfill for URL()
        var newUrl = new URL(window.location.href);
        newUrl.hash = $currentTimelineBlock.attr('id');
        var stateFunction = 'scrollRestoration' in history ? history.pushState : history.replaceState;
        stateFunction(null, document.title, newUrl.href);
    });

    /**
     * Determine whether an element is within the viewport.
     *
     * @param {*} selector A selector for the element to check.
     * @returns True if the element is in the viewport, otherwise false.
     */
    function inViewport(selector) {
        return $(selector).offset().top <= $(window).scrollTop()+$(window).height()*0.75;
    }
});

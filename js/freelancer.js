/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function() {
    // Scroll to href hash targets on the same page
    // NOTE: Requires jQuery Easing plugin
    $('body').on('click', '.page-scroll a', function(event) {
        
        // Skip handling if this browser does not support the URL API
        if (typeof URL !== 'function') return;

        // Get the target URL; do nothing if the target is on a different page
        var $anchor = $(this);
        var targetUrl = new URL($anchor.attr('href'));
        if (window.location.pathname !== targetUrl.pathname) return;
        
        // Get the target element to scroll to; default to the top of the page
        var $target = $(targetUrl.hash || '#page-top');
        if (!$target || !$target.length) return;

        // Scroll to target
        var scrollTop = $target.offset().top - $('.navbar-fixed-top .navbar-header').height();
        $('html, body').stop().animate({ scrollTop: scrollTop }, 1500);
        event.preventDefault();

        // Update URL
        window.location.hash = targetUrl.hash;
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 10 + $('.navbar-fixed-top .navbar-header').height()
    });

    // Close the Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
});


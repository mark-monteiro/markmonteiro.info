/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function() {

    // Set scroll restoration to manual if supported
    var scrollRestorationSupported = 'scrollRestoration' in history;
    if (scrollRestorationSupported) history.scrollRestoration = 'manual';

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 10 + $('.navbar-fixed-top .navbar-header').height()
    });

    // Close the Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Scroll to hash target section on page load and when the hash changes
    if (window.location.hash) scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    // Add click handler for page scrolling links
    $('body').on('click', 'a.page-scroll', function(event) {
        
        // Make sure the target URL is on the same page. If it is not, do nothing.
        var $anchor = $(this);
        var targetUrl = URL && new URL($anchor.attr('href'), window.location.origin);
        if (!targetUrl || window.location.pathname !== targetUrl.pathname) return;
        
        // Update the URL manually to prevent the default browser behaviour of jumping to the target element
        if (!scrollRestorationSupported) {
            // If scrollRestoration is not supported, update location using replaceState()
            // to prevent forward/back navigation
            history.replaceState(null, document.title, targetUrl.href);
        } else {
            // Otherwise, use pushState() to update the URL
            history.pushState(null, document.title, targetUrl.href);
        }

        // Scroll to the target hash in the updated URL
        scrollToHash();

        // Cancel the click event. Navigation will be handled by scrolling.
        event.preventDefault();
        return false;
    });

    /**
     * Scroll to the section identified by the current URL hash, if any.
     */
    function scrollToHash() {
        scrollToSection(window.location.hash);
    }

    /**
     * Scroll to a specific section on the current page.
     *
     * @param {*} sectionId The id of the element to scroll to. If a falsy value is provided, the top of the page
     *                      (<body>) will be used instead.
     */
    function scrollToSection(sectionId) {
        // Get the target element to scroll to; default to the top of the page
        var $target = $(sectionId || 'body');
        if (!$target.length) return;

        // Scroll to target
        var scrollTop = $target.offset().top - $('.navbar-fixed-top .navbar-header').height();
        scrollTop = Math.max(scrollTop, 0);
        $('html, body').stop().animate({ scrollTop: scrollTop }, 1500);
    }
});


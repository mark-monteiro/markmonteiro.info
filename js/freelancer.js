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

    // If scrollRestoration is not supported, update location using replaceState(),
    // because scroll position cannot be controlled is user navigates forward/back.
    // We also need support for the URL API in this function so check for that as well.
    if (!scrollRestorationSupported && typeof URL === 'function') {
        $('body').on('click', '.page-scroll a', function(event) {
            // Make sure the target URL is on the same page
            var $anchor = $(this);
            var targetUrl = new URL($anchor.attr('href'));
            if (window.location.pathname !== targetUrl.pathname) return;
            
            // Update URL with replaceState() and also cancel the original click event
            history.replaceState(null, document.title, targetUrl.href);
            event.preventDefault();
            return false;
        });
    }

    // Scroll to hash target section on page load and when the hash changes
    if (window.location.hash) scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    /**
     * Scroll to the section identified by the current URL hash, if any.
     */
    function scrollToHash() {

        // Replace #page-top with an empty hash
        // NOTE: An empty hash cannot be used in the link directly because it causes the scroll
        // position to jump, even if scrollRestoration is set to 'manual'
        if (window.location.hash === "#page-top") {
            var baseUrl = window.location.href.substring(0, window.location.href.indexOf('#'));
            history.replaceState(null, document.title, baseUrl + '#');
        }

        // Scroll to the section
        scrollToSection(window.location.hash);
    }

    /**
     * Scroll to a specific section on the current page.
     *
     * @param {*} sectionId The id of the section to scroll to. This should correspond to the
     *                      value in a [data-section-id] attribute on the target element. If
     *                      a falsy value is provided, the top of the page will be used instead.
     */
    function scrollToSection(sectionId) {
        // Get the target element to scroll to; default to the top of the page
        sectionId = sectionId || "#page-top";
        var $target = $("[data-section-id='" + sectionId + "']");

        // Scroll to target
        var scrollTop = $target.offset().top - $('.navbar-fixed-top .navbar-header').height();
        scrollTop = Math.max(scrollTop, 0);
        $('html, body').stop().animate({ scrollTop: scrollTop }, 1500);
    }
});


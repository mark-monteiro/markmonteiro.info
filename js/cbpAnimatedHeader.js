/**
 * cbpAnimatedHeader.js v1.0.0
 * https://www.codrops.com
 *
 * Licensed under the MIT license.
 * https://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * https://www.codrops.com
 */

 /**
  * This code block monitors the scroll position of the page in order to dynamically set a style
  * class on the site header. When scrolled past a certain position, the `navbar-shrink` class
  * is added which reduces the size of the header. 
  */
(function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function() {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$(header).addClass('navbar-shrink');
		}
		else {
			$(header).removeClass('navbar-shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

}());

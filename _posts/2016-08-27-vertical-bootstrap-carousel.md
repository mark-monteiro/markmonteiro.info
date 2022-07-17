---
layout: post
title: Vertical Bootstrap Carousel (CSS Only)
---

Like using Bootstrap's carousel component but want it to scroll vertically
instead of horizontal? This functionality can be implemented using only CSS...no
Javascript required!

Bootstrap Carousel performs transitions between slides with only CSS using
absolute positioning and the `translate3d` transform property. We can switch
this transition from horizontal to vertical by updating the position to
transition on `top` instead of `left`, and updating the `translate3d` to
transition on the Y-axis instead of X-axis.

The CSS below contains everything you need to create a vertical carousel. Just
add the `vertical` class to the carousel element.

``` css
.carousel.vertical .carousel-inner {
  height: 100%;
}
.carousel.vertical .carousel-inner > .item {
  transition: .6s ease-in-out top;
}
@media all and (transform-3d) {
.carousel.vertical .carousel-inner > .item {
    transition: transform .6s ease-in-out;
    backface-visibility: hidden;
    perspective: 1000;
  }
.carousel.vertical .carousel-inner > .item.next,
.carousel.vertical .carousel-inner > .item.active.right {
    top: 0;
    transform: translate3d(0, 100%, 0);
  }
.carousel.vertical .carousel-inner > .item.prev,
.carousel.vertical .carousel-inner > .item.active.left {
    top: 0;
    transform: translate3d(0, -100%, 0);
  }
.carousel.vertical .carousel-inner > .item.next.left,
.carousel.vertical .carousel-inner > .item.prev.right,
.carousel.vertical .carousel-inner > .item.active {
    top: 0;
    transform: translate3d(0, 0, 0);
  }
}
.carousel.vertical .carousel-inner > .active {
  top: 0;
}
.carousel.vertical .carousel-inner > .next,
.carousel.vertical .carousel-inner > .prev {
  top: 0;
  height: 100%;
  width: 100%;
}
.carousel.vertical .carousel-inner > .next {
  left: 0;
  top: 100%;
}
.carousel.vertical .carousel-inner > .prev {
  left: 0;
  top: -100%
}
.carousel.vertical .carousel-inner > .next.left,
.carousel.vertical .carousel-inner > .prev.right {
  top: 0;
}
.carousel.vertical .carousel-inner > .active.left {
  left: 0;
  top: -100%;
}
.carousel.vertical .carousel-inner > .active.right {
  left: 0;
  top: 100%;
}
```

It may be valuable to also lay out the carousel indicators vertically to match
the new transition. You can do this with the following CSS.

``` css
.carousel.vertical .carousel-indicators {
    right: 20px;
    top: 50%;
    transform: translate(-50%);
    bottom: auto;
    left: auto;
    width: auto;
    margin: 0;
    padding: 0;
}
.carousel.vertical .carousel-indicators li {
    display: block;
    margin: 5px 0;
}
```

As a nice final touch, you may want to enable the user to use the scroll wheel
to change slides. Now that the slides transition vertically, this will be a
natural interaction with the element. The code below monitors scroll events and
adjusts the current slide as necessary. This code also supports slides with
scrolling content.

``` javascript
var delta = 0;
var scrollThreshold = 5;

// detect available wheel event
wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
    document.onmousewheel !== undefined ? "mousewheel" :         // Webkit and IE support at least "mousewheel"
    "DOMMouseScroll";                                            // let's assume that remaining browsers are older Firefox

// Bind event handler
$(window).on(wheelEvent, function (e) {
    // Do nothing if we weren't scrolling the carousel
    var carousel = $('.carousel.vertical:hover');
    if (carousel.length === 0)  return;

    // Get the scroll position of the current slide
    var currentSlide = $(e.target).closest('.item')
    var scrollPosition = currentSlide.scrollTop();

    // --- Scrolling up ---
    if (e.originalEvent.detail < 0 || e.originalEvent.deltaY < 0 || e.originalEvent.wheelDelta > 0) {
        // Do nothing if the current slide is not at the scroll top
        if(scrollPosition !== 0) return;

        delta--;

        if ( Math.abs(delta) >= scrollThreshold) {
            delta = 0;
            carousel.carousel('prev');
        }
    }

    // --- Scrolling down ---
    else {
        // Do nothing if the current slide is not at the scroll bottom
        var contentHeight = currentSlide.find('> .content').outerHeight();
        if(contentHeight > currentSlide.outerHeight() && scrollPosition + currentSlide.outerHeight() !== contentHeight) return;

        delta++;
        if (delta >= scrollThreshold)
        {
            delta = 0;
            carousel.carousel('next');
        }
    }

    // Prevent page from scrolling
    return false;
});
```

## Demo

<p data-height="688" data-theme-id="0" data-slug-hash="WxVOYE" data-default-tab="result" data-user="mark-monteiro" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/mark-monteiro/pen/WxVOYE/">Vertical Bootstrap Carousel</a> by Monteiro (<a href="https://codepen.io/mark-monteiro">@mark-monteiro</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Credits

This solution is based on the
[Stack Overflow post](https://stackoverflow.com/a/30330303/1988326) by
[Stefan C](https://stackoverflow.com/users/4672658/stefan-c).

The Javascript code to transition the slides when scrolling is based off of the
[scroll-jacking tutorial](https://web.archive.org/web/20140221105017/https://www.hugeinc.com/ideas/perspective/scroll-jacking-on-hugeinc)
from [hugeinc.com](https://www.hugeinc.com).

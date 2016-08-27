---
layout: post
title: Block Browser History With Javascript
comments: true
---
Recently I was working on a site with a unique requirement: no pages on the site should be stored in the user's browser history. This was a site for the [Women & HIV/AIDS Health Initiative (WHAI)](http://www.whai.ca/){:target="_blank"}, where users naturally require privacy while using the site due to the sensitive subject matter of the site.

Before we go any further, I have to preface this post by saying that implementing behaviour like this is probably a bad idea in most scenarios. Preventing pages from being stored in the browser history this prevents the back button in the browser from working (since there is no history to go back to). Manipulating standard browser behaviour like this is always very confusing for users and may make it appear as if the site is broken. In fact, this funtionality was removed from the WHAI site before it launched once the client saw how confusing it was. That being said, if you have found yourself in a scenario where you **do** want this behaviour (or if you're just interested in how it would work) then read on!

Suprisingly, this feature can be easily implmeneted with just a couple lines of code using the `location.repace()` Javascipt method. The [W3C page](http://www.w3schools.com/jsref/met_loc_replace.asp) for the `location.replace()` method describes what the method does:

> replace() removes the URL of the current document from the document history, meaning that it is not possible to use the "back" button to navigate back to the original document.

Here is the code snippet you need to get this working:

``` javascript
// Intercept all link clicks and use location.replace so that no history is saved
$('body').on('click', 'a', function(event) {

    // Allow links opening in new tabs to handle normally
    if($this.attr('target') == '_blank') return;

    location.replace($(this).attr('href'));
});
```

The above code will cancel the click event for any links on the site and use the `location.replace` method instead. Note the use of the delegate event handler to also handle elements dynamically added to the page. I also am not calling the `event.PreventDefault()` method so that any other event handlers attached to links will still be run.

You'll also have to make sure to intercept any other Javascript code running on the site that changes the browser location. This might be easier said than done, depending on which libraries you need to integrate with your site.

Submitting forms will also change the window location. Here is a quick way to intercept the submit event to prevent saving the new page location when redirected. Note that this will not work on forms that submit via `POST`.

``` javascript
// Intercept form submit
$("form[method='get']").submit(function(event) {
    $this = $(this);
    event.preventDefault();
    window.location.replace($this.attr('action') + '?' + $this.serialize());
});
```

And that's all there is to it!
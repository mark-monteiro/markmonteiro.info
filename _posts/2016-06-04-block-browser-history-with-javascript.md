---
layout: post
title: Block Browser History With Javascript
comments: true
---
Recently I was working on a site with a unique requirement: no pages on the site should be stored in the user's browser history. This was a site for the [Women & HIV/AIDS Health Initiative (WHAI)](http://www.whai.ca/){:target="_blank"}, where users naturally require privacy while using the site due to the sensitive subject matter. Being able to quickly hide the site from any coworkers that happen to walk by was of particular importance.

If you click the link above and go to the site, you can browse around as much as you want without any of the pages being saved to your browser's history. You'll notice that hitting the back button in your browser will always bring you right back to this page, leaving no trace at all that you were ever on that site. Pretty cool!

When first approaching the problem, I intuitively thought there would be no way to control the user's browser history in this way, but a quick search found the exact opposite. This feature can be easily implmeneted with a couple lines of code using the `location.repace` Javascipt method:

```
    // Intercept all link clicks and use location.replace so that no history is saved
    $('body').on('click', 'a', function(event) {
        event.preventDefault();
        location.replace($(this).attr('href'));
    });
```

And that's it! The above code will cancel the click event for any links on the site and use the `location.replace` method instead. Note the use of the delegate event handler to also handle elements dynamically added to the page.

The [W3C page](http://www.w3schools.com/jsref/met_loc_replace.asp) for the `location.replace()` method describes what the method does:

> replace() removes the URL of the current document from the document history, meaning that it is not possible to use the "back" button to navigate back to the original document.

Of course, you'll have to make sure to intercept any other Javascript running on the site that changes the brownser location. This might be easier said than done, depending on which libraries you need to integrate with your site, but I'll leave that problem up to you!

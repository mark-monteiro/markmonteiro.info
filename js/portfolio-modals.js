$(document).ready(function() {
    // Initialize the Stackshare embed when the modal opens
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        // Remove any prevoiusly added embeds from the entire document
        var $modal = $(this);
        $modal.find('.stackshare-embed').empty();

        // Wait for the modal to open then add the embed
        setTimeout(function() {
            var $embedContainer = $modal.find('.stackshare-embed');
            var embedCode = $embedContainer.data('embedCode');
            $embedContainer
                .append('<a frameborder="0" data-theme="light" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/'+embedCode+'"></a>')
                .append('<script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>');
        }, 500);
    });
});

// window.addEventListener("message", function(e) {
//     debugger;
// }, false);

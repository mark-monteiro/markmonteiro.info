require 'html-proofer'

task test: [] do
    options = {
        :check_html => true,
        :check_favicon => true,
        :check_opengraph => true,
        :check_img_http => true,
        :url_ignore => [/linkedin.com/, /codepen.io/, /twitter.com/]
    }
    HTMLProofer.check_directory("./_site", options).run
end
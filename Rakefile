require 'html-proofer'

task :build do
    system "npm install"
    system "bundle exec jekyll build"
end

task test: [:build] do
    options = {
        :check_html => true,
        :check_favicon => true,
        :check_opengraph => true,
        :check_img_http => true,
        :url_ignore => [/linkedin.com/, /codepen.io/]
    }
    HTMLProofer.check_directory("./_site", options).run
end

task :serve do
    system 'bundle exec jekyll serve --incremental --livereload'
end
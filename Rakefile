require 'html-proofer'

task htmlproofer: [] do
    options = {
        :checks => ['Links', 'Images', 'Scripts', 'Favicon', 'OpenGraph'],
        :check_external_hash => true,
        :check_internal_hash => true,
        :ignore_urls => [/linkedin.com/, /codepen.io/, /twitter.com/]
    }
    HTMLProofer.check_directory("./_site", options).run
end
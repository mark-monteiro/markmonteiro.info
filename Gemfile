source "https://rubygems.org"

# Retrieve the current version of github-pages from GitHub server and include it
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
gem "github-pages", versions['github-pages'] #includes jekyll

group :jekyll_plugins do
    gem 'jekyll-seo-tag'
    gem 'jekyll-compose'
end

# Travis CI required gems
gem "html-proofer"

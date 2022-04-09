source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.2"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# Enable support for sass-embedded, which uses dart-sass. The default
# configuration uses the deprecated sassc/LibSass implementation
# See: https://github.com/jekyll/jekyll-sass-converter#sass-embedded
gem 'sass-embedded', '~> 1.4'

# Fix issue with jekyll-autoprefixer
# See: https://github.com/vwochnik/jekyll-autoprefixer/issues/11
gem 'execjs', '~> 2.7.0'

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'jekyll-seo-tag'
  gem 'jekyll-autoprefixer'
  gem 'jekyll-sitemap'
  gem 'jekyll-compose'
end

# Gems required for Rake tasks
gem "html-proofer"
gem "rake"
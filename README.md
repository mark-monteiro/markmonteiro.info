# markmonteiro.info

[![Build Status](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io.svg)](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io) [![Code Climate](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io/badges/gpa.svg)](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io)

My personal website. Hosted on Github Pages, which uses the Jekyll static website framework.

# Running Locally

## Dependencies
- Ruby
- Rubygems
- Bundler

See https://pages.github.com/versions/ for the latest version information used by Github Pages.

## Install
```
bundle install
npm install --dev
```

## Serve
To build the site and run with a BrowserSync server, just run the following:
```
gulp
```

To use the default server bundled with Jekyll (no BrowserSync), run the following:
```
bundle exec jekyll serve
```

## Run Html-Proofer
Html-Proofer is run on all builds in TravisCI. To run Html-Proofer locally, use the following commands:
```
bundle exec jekyll build
bundle exec htmlproofer ./_site --check-favicon --check-html --url-ignore /linkedin\.com*/
```

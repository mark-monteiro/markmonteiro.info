# markmonteiro.info

[![Build Status](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io.svg)](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io) [![Code Climate](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io/badges/gpa.svg)](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io)

My personal website. Hosted on Github Pages, which uses the Jekyll static website framework.

# Running Locally

## Dependencies
- Ruby
- Rubygems
- NodeJS

See https://pages.github.com/versions/ for the latest version information used by Github Pages.

## Install
```
bundle install
```

## Serve
```
bundle exec jekyll serve
```

## Run Html-Proofer
To run html proofer run the following commands:
```
bundle exec jekyll build
bundle exec htmlproofer ./_site --check-favicon --check-html --url-ignore /linkedin\.com*/
```
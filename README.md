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
```

## Serve
```
bundle exec jekyll serve
```

## Run BrowserSync
Among other things, BrowserSync will refresh the browser window every time any source files
have changes. Installing BrowserSync requires Node.js and NPM installed on the system. To
install BrowserSync (globally):

```
npm install -g browser-sync
```

To start the BrowserSync server, `cd` into the build folder and run the `browser-sync` command:

```
cd _site
browser-sync start --server --files ./**
```

## Run Html-Proofer
To run html proofer run the following commands:
```
bundle exec jekyll build
bundle exec htmlproofer ./_site --check-favicon --check-html --url-ignore /linkedin\.com*/
```
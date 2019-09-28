# markmonteiro.info

[![Build Status](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io.svg)](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io) [![Code Climate](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io/badges/gpa.svg)](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io)

My personal website. Hosted on Github Pages, which uses the Jekyll static website framework.

## Development

The site can be developed in either Linux, Windows, or using the Linux Subsystem for Windows. The instructions below can be followed to get the site up and running locally in any of these environments.

### Install Dependencies

The following system dependencies must be installed to build and run the project locally.

- Ruby + Rubygems + Bundler. The version of Ruby that should be used is noted in the `.ruby-version` file.
  - On Linux, use [rbenv](https://github.com/rbenv/rbenv)
  - On Windows, use [RubyInstaller](https://rubyinstaller.org/)
- Node/NPM

To install the application dependencies run the following commands:

```bash
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

# markmonteiro.info

[![Build Status](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io.svg)](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io)
[![Code Climate](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io/badges/gpa.svg)](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io)

My personal website. Built with Jekyll, a static website generation framework, and hosted on Netlify.

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
npm install --dev # Only required if you want to run with a BrowserSync server
```

### Serve

To build the site and run with a BrowserSync server, just run the following:

```bash
gulp
```

To use the default server bundled with Jekyll (no BrowserSync), run the following:

```bash
bundle exec jekyll serve
```

## Testing

Html-Proofer is run on all builds in TravisCI. To run Html-Proofer locally, you can refer to the script defined in `travis-ci.yml`

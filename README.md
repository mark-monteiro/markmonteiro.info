# markmonteiro.info

[![Build Status](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io.svg)](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io)
[![Code Climate](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io/badges/gpa.svg)](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io)

My personal website. Built with Jekyll, a static website generation framework, and hosted on Netlify.

## Development

The site can be developed in either Linux, Windows, or using the Linux Subsystem for Windows. The instructions below can be followed to get the site up and running locally in any of these environments.

### Install Dependencies

The following system dependencies must be installed to build and run the project locally.

- Ruby + Rubygems. The version of Ruby that should be used is noted in the `.ruby-version` file.
  - On Linux, use [rbenv](https://github.com/rbenv/rbenv)
  - On Windows, use [RubyInstaller](https://rubyinstaller.org/)
- Bundler: After Ruby + Rubygems has been installed, run `gem install bundler -v 1.17.3`
- Rake: After Ruby + Rubygems has been installed, run `gem install rake`
  
**NOTE:** Bundler v2.x cannot be used until the [this issue](https://github.com/netlify/build-image/issues/250) has been resolved with Netlify.

Once the above dependencies have been installed, add the application dependencies by runing the following:

```bash
bundle install
```

### Serve

To run the development server bundled with Jekyll, run the following:

```bash
rake serve
```

## Testing

This project is configured to test the generated HTML files using [Html-Proofer](https://github.com/gjtorikian/html-proofer). To run this test, execute the `test` task:

```bash
rake test
```

# markmonteiro.info

[![Build Status](https://travis-ci.com/mark-monteiro/markmonteiro.info.svg?branch=master)](https://travis-ci.com/mark-monteiro/markmonteiro.info)
[![Code Climate](https://codeclimate.com/github/mark-monteiro/markmonteiro.info/badges/gpa.svg)](https://codeclimate.com/github/mark-monteiro/markmonteiro.info)

My personal website. Built with Jekyll, a static website generation framework,
and hosted on Netlify.

## Development

The site can be developed in either Linux, Windows, or using the Linux Subsystem
for Windows. The instructions below can be followed to get the site up and
running locally in any of these environments.

### Install Dependencies

The following system dependencies must be installed to build and run the project
locally.

- Node + NPM. The version that should be used is noted in the `.nvmrc` file. A
  node version manager may be helpful when working on a development machine with
  multiple projects:
  - On Linux, use [nvm](https://github.com/nvm-sh/nvm)
  - On Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows)
- Ruby + Rubygems. The version of Ruby that should be used is noted in the
  `.ruby-version` file. A ruby version manager may be helpful when working on a
  development machine with multiple projects:
  - On Linux, use [rbenv](https://github.com/rbenv/rbenv)
  - On Windows, use [RubyInstaller](https://rubyinstaller.org/)
- Bundler: After Ruby + Rubygems has been installed, run `gem install bundler`
- Rake: After Ruby + Rubygems has been installed, run `gem install rake`

Once the above dependencies have been installed, add the application
dependencies by running the following commands:

```bash
npm ci
bundle install
```

### Serve

To run the development server bundled with Jekyll, run the following:

```bash
npm start
```

### VS Code Extensions

See [.vscode/extensions.json](.vscode/extensions.json) for a list of VS Code
extensions that are supported/recommended to be used during development.

## Testing

To run tests on the site execute the npm `test` task:

```bash
npm test
```

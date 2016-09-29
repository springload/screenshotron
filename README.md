screenshotron [![npm](https://img.shields.io/npm/v/screenshotron.svg?style=flat-square)](https://www.npmjs.com/package/screenshotron) [![Build Status](https://img.shields.io/travis/springload/screenshotron.svg?style=flat-square)](https://travis-ci.org/springload/screenshotron) [![dependency Status](https://img.shields.io/david/springload/screenshotron.svg?style=flat-square)](https://david-dm.org/springload/screenshotron) [![devDependency Status](https://img.shields.io/david/dev/springload/screenshotron.svg?style=flat-square)](https://david-dm.org/springload/screenshotron)
==========

> The most aptly-named way to take screenshots of pages with Electron.

## Installation

Requires Node 4+. From the command line, run

```sh
npm install -g screenshotron
```

## Usage

From the command line, run

```sh
screenshotron example.com
✔ Generated 1 screenshot from 1 url and 1 size
# With a specific time to wait for before screenshotroning
screenshotron --delay 3000 example.com bananas.com
✔ Generated 2 screenshots from 2 urls and 1 size
```

## Contributing

> You first need to clone the project on your computer, and to install [Node](https://nodejs.org). This project uses [nvm](https://github.com/creationix/nvm) to execute a specific node version.

Install the project with:

```sh
git clone git@github.com:springload/screenshotron.git
cd screenshotron
nvm install
npm install
npm install -g eslint babel-eslint eslint-config-airbnb
./.githooks/deploy
```

To run the tests:

```sh
npm run test
```

To release a new version:

```sh
npm version minor -m "Release %s"
git push origin master
git push --tags
npm publish
```

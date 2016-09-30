screenshotron [![npm](https://img.shields.io/npm/v/screenshotron.svg?style=flat-square)](https://www.npmjs.com/package/screenshotron) [![Build Status](https://img.shields.io/travis/springload/screenshotron.svg?style=flat-square)](https://travis-ci.org/springload/screenshotron) [![dependency Status](https://img.shields.io/david/springload/screenshotron.svg?style=flat-square)](https://david-dm.org/springload/screenshotron) [![devDependency Status](https://img.shields.io/david/dev/springload/screenshotron.svg?style=flat-square)](https://david-dm.org/springload/screenshotron)
==========

> The most aptly-named way to take screenshots of pages with [Electron](http://electron.atom.io/).

:warning: This is alpha software, no matter which tool you are using always check the screenshots yourself.

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

## Automated screenshot taking

To take screenshots of web pages, you need to display the pages inside a browser. To do reliably and at large scales, you need the navigation to the site and dimensioning of the viewport to be automated. You need an automated (headless?) browser.

The best automated browsers are:

- [PhantomJS](http://phantomjs.org/) (WebKit, engine of Safari, headless).
- [SlimerJS](https://slimerjs.org/) (Gecko, engine of Firefox, not truly headless yet).
- [Electron](http://electron.atom.io/) (Chromium/Blink, engine of Chrome, not truly headless?).

I have had issues with the screenshots taken by Phantom (via [pageres](https://github.com/sindresorhus/pageres/), via [screenshot-stream](https://github.com/kevva/screenshot-stream)), and SlimerJS ([homemade](https://github.com/springload/madewithwagtail/blob/c4a6e16b0196e794cd807709b5a00da807181039/scripts/slimerjs-screenshot.js)), so it is now time to try Electron.

- Nightmare screenshots implementation https://github.com/segmentio/nightmare/blob/master/lib/runner.js#L416
- Electron screenshot https://github.com/electron/electron/blob/master/docs/api/browser-window.md#wincapturepagerect-callback, https://gist.github.com/twolfson/0d374d9d7f26eefe7d38
- https://github.com/FWeinb/electron-screenshot-app
- https://github.com/FWeinb/electron-screenshot-service
- https://github.com/JamesKyburz/electron-screenshot
- https://github.com/victorferraz/break-shot

Code originally taken from https://github.com/thibaudcolas/is-js-error, and https://github.com/sindresorhus/pageres/

Here are common pitfalls of automated screenshot taking:

- Web fonts support and loading
- HTTPS or mixed-source support
- Images loading
- Animations that execute on page load (carousels)
- Modals, overlays, and interstitials
- EU-law cookie messages

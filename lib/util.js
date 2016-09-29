import plur from 'plur';
import logSymbols from 'log-symbols';
import easydate from 'easydate';
import template from 'lodash.template';
import filenamifyUrl from 'filenamify-url';

// Taken from https://github.com/sindresorhus/pageres/blob/master/lib/util.js
export function successMessage(stats) {
    const {screenshots, sizes, urls} = stats;
    const words = {
        screenshots: plur('screenshot', screenshots),
        sizes: plur('size', sizes),
        urls: plur('url', urls),
    };

    console.log(`\n${logSymbols.success} Generated ${screenshots} ${words.screenshots} from ${urls} ${words.urls} and ${sizes} ${words.sizes}`);
}

// Taken from https://github.com/sindresorhus/pageres/blob/master/lib/util.js
export function makeFilename(uri, size, options) {
    const sizes = size.split('x');
    const filename = template(`${options.filename}.${options.format}`);

    return filename({
        crop: options.crop ? '-cropped' : '',
        date: easydate('Y-M-d'),
        time: easydate('h-m-s'),
        size,
        width: sizes[0],
        height: sizes[1],
        url: filenamifyUrl(uri),
    });
}

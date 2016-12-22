import vo from 'vo';
import nightmare from 'nightmare';
import { makeFilename } from '../lib/util';

function* takeScreenshot(urls, delay, size) {
    const [ width, height ] = size.split('x').map(s => parseInt(s, 10));

    const night = nightmare({
        show: false,
        width: width,
        height: height,
        titleBarStyle: 'hidden',
    });

    for (const url of urls) {
        const filename = makeFilename(url, `${width}x${height}`, {
            crop: false,
            filename: '<%= url %>-<%= size %><%= crop %>',
            format: 'png',
        });

        yield night.goto(url).wait(delay);

        yield night.screenshot(filename, {
            x: 0,
            y: 0,
            width: width,
            height: height,
        });

        if (urls.indexOf(url) === urls.length - 1) {
            yield night.end();
        }
    }

    return {
        success: true,
        screenshots: 1 * urls.length,
        sizes: 1,
        urls: urls.length,
    };
}

export default vo([takeScreenshot]);

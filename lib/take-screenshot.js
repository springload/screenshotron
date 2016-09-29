import vo from 'vo';
import nightmare from 'nightmare';
import { makeFilename } from '../lib/util';

function* takeScreenshot(urls, delay) {
    const night = nightmare({
        show: false,
        width: 1440,
        height: 1200,
        titleBarStyle: 'hidden',
    });

    for (const url of urls) {
        const filename = makeFilename(url, '1440x1200', {
            crop: false,
            filename: '<%= url %>-<%= size %><%= crop %>',
            format: 'png',
        });

        yield night.goto(url).wait(delay);

        yield night.screenshot(filename, {
            x: 0,
            y: 0,
            width: 1440,
            height: 1200,
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

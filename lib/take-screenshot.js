import vo from 'vo';
import nightmare from 'nightmare';
import sharp from 'sharp';
import { makeFilename } from '../lib/util';

function* takeScreenshot(urls, delay, size) {
    const [ width, height ] = size.split('x').map(s => parseInt(s, 10));

    const night = nightmare({
        show: false,
        width: width,
        height: height,
        titleBarStyle: 'hidden',
        frame: true,
        enableLargerThanScreen: true,
    });

    const injectStyles = () => {
        const styles = document.createElement('style');
        // Always hide the scrollbar.
        styles.innerHTML = `
            ::-webkit-scrollbar {
                display: none;
            }
        `;
        document.body.appendChild(styles);
    };

    for (const url of urls) {
        const filename = makeFilename(url, `${width}x${height}`, {
            crop: false,
            filename: '<%= url %>-<%= size %><%= crop %>',
            format: 'png',
        });

        yield night.goto(url)
            .evaluate(injectStyles)
            .wait(delay);

        const buffer = yield night.screenshot({
            x: 0,
            y: 0,
            width: width,
            height: height,
        });

        sharp(buffer)
            .resize(width, height)
            .toFile(filename, (err) => {
                if (err) {
                    console.log(err);
                }
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

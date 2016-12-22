import 'babel-polyfill';

import meow from 'meow';
import logSymbols from 'log-symbols';
import parseURL from './lib/parse-url';
import takeScreenshot from './lib/take-screenshot';
import { successMessage } from './lib/util';

const cli = meow(`
    Example
      $ screenshotron example.com
      ${logSymbols.success} OK
      $ screenshotron example.com bananas.com --delay 3000
      ${logSymbols.success} OK

    Options
      --help,      Display this help
      --version,   Display the version number
      --delay [ms], Wait for a given period before taking a screenshot.
      --size [widthxheight], Configure screenshot size. Default: 1440x1200
`);

if (cli.input.length === 0) {
    console.error('Specify one or multiple URLs');
    process.exit(1);
}

const urls = cli.input.map(parseURL);
const size = cli.flags.size ? cli.flags.size : '1440x1200';
const delay = cli.flags.delay ? Math.max(parseInt(cli.flags.delay, 10), 1) : 1;

takeScreenshot(urls, delay, size, (err, results) => {
    if (err) {
        console.log(`${logSymbols.warning} ${err}`);
        process.exit(1);
    } else {
        const stats = results[0];

        if (stats.success) {
            successMessage(stats);
        } else {
            console.log(`${logSymbols.error} KO`);
        }

        process.exit(stats.success ? 0 : 2);
    }
});

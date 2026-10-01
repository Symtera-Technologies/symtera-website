/**
 * Passenger startup file for cPanel Application Manager.
 *
 * Application Manager runs Node apps under Phusion Passenger, which does not
 * invoke `next start`. It requires a script that creates an HTTP server and
 * listens on the port it hands over in `process.env.PORT`. This is that script.
 *
 * Set "Application startup file" to `server.js` in Application Manager.
 *
 * `next build` must have been run before this starts — it serves the contents
 * of `.next` and does not compile anything itself.
 */

// Set before Next is required, so nothing reads a stray "development" on the
// way in. Passenger normally sets it itself.
process.env.NODE_ENV = 'production';

const http = require('node:http');
const next = require('next');

const port = Number.parseInt(process.env.PORT ?? '3000', 10);
// Not HOSTNAME: on Linux that is the machine's own name, which Passenger sets
// and which is not an address this process should bind or report.
const hostname = process.env.APP_HOSTNAME ?? '0.0.0.0';

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        http
            .createServer((req, res) => {
                handle(req, res).catch((error) => {
                    console.error('request failed:', error);
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                });
            })
            .listen(port, () => {
                console.log(`Symtera website listening on ${hostname}:${port}`);
            });
    })
    .catch((error) => {
        // Passenger surfaces this in stderr.log — it is the first place to look
        // when the app shows a 503 in the browser.
        console.error('Failed to start Next.js:', error);
        process.exit(1);
    });

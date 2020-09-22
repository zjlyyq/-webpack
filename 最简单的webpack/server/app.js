if (typeof window === 'undefined') {
    global.window = {};
}

const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server.js');
console.log('../dist/search-server.js', express);

const server = (port) => {
    const app = express();
    app.use(express.static('dist'));
    app.get('/search', (req, res) => {
        const html = renderMarkup(renderToString(SSR));
        console.log(html);
        res.status(200).send(html);
    });

    app.listen(port, res => {
        console.log('success');
    })
}

server(3000);

function renderMarkup(template) {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>服务端渲染</title>
        </head>
        <body>
            <div id="app">${template}</div>
        </body>
    </html>
    `;
}

if (typeof window === 'undefined') {
    global.window = {};
}

const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server.js');
const path = require('path');
const fs = require('fs');

const template = fs.readFileSync(path.join(__dirname, '../dist/search_uglify.html'), 'utf-8');
console.log(template);
const data = require('./data.json');

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

function renderMarkup(str) {
    return template.replace('<!--HTML_PLACEHOLDER-->', str)
                   .replace('<!--INITIAL-DATA-->', `<script> window.__initial_data = ${JSON.stringify(data)}</script>`);
}

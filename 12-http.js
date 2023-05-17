const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page!');
    }
    if (req.url === '/about') {
        res.end('Here is a short history of us.');
    }
    res.end(`
        <h1>Error</h1>
        <p>We could not find the page you were looking for.</p>
        <a href="/">Go back</a>
    `);
});

server.listen(5000);
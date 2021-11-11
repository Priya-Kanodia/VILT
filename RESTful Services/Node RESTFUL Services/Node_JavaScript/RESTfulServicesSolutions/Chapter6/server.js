const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World from the Server');
});

server.listen(8081);
var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '192.168.43.26');

console.log('Server running at http://192.168.43.26:1337/');

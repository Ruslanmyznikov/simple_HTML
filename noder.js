var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Vlad!</h1>');
    console.log('Im here!');
}).listen(8080);
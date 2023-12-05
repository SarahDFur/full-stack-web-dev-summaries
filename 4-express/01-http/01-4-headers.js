const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    // text/plain - plain text
    // text/html - treated as html
    // if we change the status code, it does matter!!
    res.write('<h1>home page</h1>');
    res.end();   
     
    // OR res.end('<h1>home page</h1>');
});

server.listen(5000);
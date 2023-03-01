const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1> Hello World </h1>');
    res.write('</html>');
})

server.listen(3000)


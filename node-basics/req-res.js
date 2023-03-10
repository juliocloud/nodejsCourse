const http = require('http');
const fs = require('fs')

/*
* Here we are sending a response to the request: setting a header and
* sending an html
*/
const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    /*
    * We have a form with a POST method pointing /message address. And then
    * we return the 302 status code
    */
    if(url === '/'){
        res.write('<html>')
        res.write('<head> <title> Enter Message </title> </head>');
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"></input><button type="submit"> Send </button> </form> </body>')
        res.write('</html>')
        return res.end()
    }

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync("textoexemplo.txt", "Texto escrito com sucesso")
        res.statusCode = 302
        res.setHeader('Location', '/');
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My page</title></head>')
    res.write('<body><h1> Hello </h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)


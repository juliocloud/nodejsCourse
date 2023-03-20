const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>')
        res.write('<head> <title> Enter Message </title> </head>');
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"></input><button type="submit"> Send </button> </form> </body>')
        res.write('</html>')
        return res.end()
    }
    
    if(url === '/message' && method === 'POST'){
        const body = []
    
        req.on('data', (chunk) => {
            body.push(chunk)
        })
    
        return req.on('end', () => { //When  we return the function, it gets executed immediatly
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
    
            console.log(">>>>", message)
            //fs.writeFileSync("textoexemplo.txt", message) //Write file sync will stop the code until it already wrote it. We must use write file instead
    
            fs.writeFile('textoexemplo.txt', message, (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/');
                return res.end()
            })
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My page</title></head>')
    res.write('<body><h1> Hello </h1></body>')
    res.write('</html>')
    res.end()

};

// module.exports = requestHandler;

exports.handler = requestHandler
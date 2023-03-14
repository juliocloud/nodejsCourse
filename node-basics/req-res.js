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
        const body = []
        /*
        * For every data chunk we receive as a request, we're going to
        * push it to an array
        */

        req.on('data', (chunk) => {
            body.push(chunk)
        })

        /* 
        * 
        * Then, at the end of the stream of the data, we're going to call a buffer method called "concat"
        * This method will take the hex values of the buffer and convert it
        * 
        */

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
})

server.listen(3000)

/* Important to know:
* Once we hit the declaration of a listener function, 
* it will only set the listener, but it will not execute
* the function immediatly. That's why  when we put that "return res.end()"
* inside of the callback of req.on, the code will end at the line 57
* without even executing the callback
*/

const requestListener = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');

        res.write("<html>");

        res.write('<head> <title> Enter Message </title> </head>');

        res.write('<body>')

        res.write("<h1> Greetings </h1>");
        
        res.write("<form action='/create-user' method='POST'>");
        res.write("<input type='text' name='message'>");
        res.write("</input>");
        res.write("<button type='submit'>");
        res.write("Send now");
        res.write("</button>");
        res.write("</form>");

        res.write("</body>");

        res.write("</html>");
        return res.end(); 
        /*
        * 
        * Detail: if we don't have anything oustide of the if statements
        * we wouldn't need the return.
        * 
        */
    }

    if(url === '/users'){
        res.write("<html>");
        res.write("<ul>");
        res.write("<li> User 1 </li>");
        res.write("<li> User 2 </li>");
        res.write("<li> User 3 </li>");
        res.write("</ul>");
        res.write("</html>");
        res.end();
    }

    if(url === '/create-user'){
        const message = []
        console.log(" Create user ")

        req.on('data', (chunk) => {
            message.push(chunk)
        })

        req.on('end', () => {
            const data  = Buffer.concat(message).toString()
            const parsedData = data.split('=')[1]
            console.log(parsedData)
        })
        res.statusCode = 302;
        res.setHeader('Location', '/'); //Redirecting user again to '/'
        res.end();
    }

    

}

exports.listener = requestListener
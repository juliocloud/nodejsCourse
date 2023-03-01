# NodeJS Academind

### All code and comments written by Júlio Juriolli

- This is the summary of how the web works.

![How the web works](assets/webflow.png)

# Server Creation
In order to create a server, we have to firstly call the http package (that is installed in the machine)

    const http = require('http');

With this, we have access to all http's methods and properties. The method we want to call is http.createServer()

    http.createServer()

The server itself is returned from the call of the function above. So we got to create a variable and assign the server call to it

    const server = http.createServer()

In order to listen for incoming requests, we have to create pass a function as a parameter to the server creation function

    const server = http.createServer((req, res) => {
        console.log(req);
    })

    
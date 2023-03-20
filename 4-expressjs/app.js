const express = require('express');
const http = require('http');

const app = express();

/* 
* 
* With expressjs, we usually work with middlewares, which are all functions placed 
* between an http request and the response from the server to the client
* 
*/

app.use((req, res, next) => {
    console.log("Inside the middleware");
    next(); //When we start a middleware, we have to call the next() function in order to continue the execution of the other mws
})

app.use((req, res, next) => {
    console.log("Next middleware");
    res.send("<html> <h1> Express JS </h1> </html>")
});

const server = http.createServer(app)

server.listen(3000)
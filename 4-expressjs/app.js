const express = require('express');

const app = express();

/* 
* 
* With expressjs, we usually work with middlewares, which are all functions placed 
* between an http request and the response from the server to the client
* 
*/

app.use('/product',(req, res, next) => {
    console.log("Inside the middleware");
    res.send("<html> <h1> Adicao de produtos </h1> </html>")
 //When we start a middleware, we have to call the next() function in order to continue the execution of the other mws
})

app.use('/',(req, res, next) => {
    console.log("Next middleware");
    res.send("<html> <h1> Express JS </h1> </html>")
});

app.listen(3000)
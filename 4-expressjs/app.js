const express = require('express');
const bodyParser = require('body-parser')

const app = express();

/* 
* 
* With expressjs, we usually work with middlewares, which are all functions placed 
* between an http request and the response from the server to the client
* 
*/

app.use(bodyParser.urlencoded());

app.use('/add-product',(req, res, next) => {
    res.send("<form action='/product' method='POST'> <input type='text' name='title'> <button type='submit'> Add product </button> </input> </form>")
 //When we start a middleware, we have to call the next() function in order to continue the execution of the other mws
})

app.use('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
});

app.use('/',(req, res, next) => {
    res.send("<html> <h1> Express JS </h1> </html>")
});

app.listen(3000)
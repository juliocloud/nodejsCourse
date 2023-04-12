const path = require('path')

const express = require('express')

const router = express.Router();

router.get('/add-product',(req, res, next) => {
     res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
     //When we start a middleware, we have to call the next() function in order to continue the execution of the other mws
 })
 
 router.post('/add-product',(req, res, next) => {
     console.log(req.body)
     res.redirect('/')
 });
 
 module.exports = router;
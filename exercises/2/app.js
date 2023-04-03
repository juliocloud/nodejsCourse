const express = require('express')

const app = express()

app.use('/express', (req, res, next) => {
    console.log('Express JS')
    res.send('<html> <h1> Express JS ROUTE! <h1/> <html/>')
})

app.use('/', (req, res, next) => {
    console.log('Slash ROUTE')
    res.send('<html> <h1> Slash ROUTE <h1/> <html/>')
})

app.listen(3000)
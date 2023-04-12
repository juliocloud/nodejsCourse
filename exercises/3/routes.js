const express = require('express');
const path = require('path');

const routes = express.Router();

routes.get('/users', (req, res, next) => {
     res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

routes.get('/', (req, res, next) => {
          res.send("<h1 style='font-family: sans-serif'> Default page </h1>")
});

module.exports = routes
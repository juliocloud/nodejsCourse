const express = require('express');

const routes = express.Router();

routes.get('/', (req, res, next) => res.send("<h1> Notion HQ </h1>"))

module.exports = routes
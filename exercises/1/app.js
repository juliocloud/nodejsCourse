const http = require('http')
const routes = require('./routes')

const server = http.createServer(routes.listener);

server.listen(3000)
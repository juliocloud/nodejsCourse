const express = require('express')

const app = express();

const useRoutes = require('./routes')

app.use(useRoutes)

app.listen(3000);


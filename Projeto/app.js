const express = require('express');

const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 453

const routes = require('./Scripts/routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);

server.listen(port, () => {
    console.log('Server listening at port %d', port);
})
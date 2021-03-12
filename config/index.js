const config = require('./config.js')
const mongoose = require('./mongo.js')(config)
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('hola mundo !!!');
});

app.listen(config.PORT, config.HOST, () => {
    console.log(`App listening on http:\\${config.HOST}:${config.PORT}`);
});
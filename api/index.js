const config = require('../config/config.js')
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('hola mundo !!!');
});

app.listen(config.PORT, config.HOST, () => {
    console.log(`App listening on http:\\${config.HOST}:${config.PORT}`);
});
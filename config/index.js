const config = require('./config.js')
const express = require('express')
const app = express()

// configuracion mantenedor urls
app.use(express.json()) // for parsing application/json
require('./urls.js')(app)
// configuracion mongoDB
require('./mongo.js')

// app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('home')
});

app.listen(config.PORT, config.HOST, () => {
    console.log(`App listening on http:\\${config.HOST}:${config.PORT}`);
});
const express = require('express')
var app = express()
// const hbs = require('')

// cargar configuracion de App
require('./config.js')(app)
// configuracion mantenedor urls
require('./urls.js')(app)
// configuracion mongoDB
require('./mongo.js')

// app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log(this)
    res.render('home')
});

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`App listening on http:\\${process.env.HOST}:${process.env.PORT}`);
});
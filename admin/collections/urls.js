// urls para la API
var express = require('express')
var router = express.Router()
var controllers = require('./controllers.js')

router.route('/')
    .get(controllers.index);
    // .post(controllers.postCondominio);


module.exports = router
// urls para la API
var express = require('express')
var router = express.Router()
var controllers = require('./controllers.js')

router.route('/')
    .get(controllers.getCasas)
    .post(controllers.postCasa);

router.route('/:id')
    .get(controllers.getCasaId)
    .put(controllers.putCasaId)
    .delete(controllers.deleteCasaId)

module.exports = router
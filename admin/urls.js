// urls para la API
var express = require('express')
var router = express.Router()
var controllers = require('./controllers.js')

router.route('/')
    .get(controllers.home);
    // .post(controllers.postCondominio);

// router.route('/:id')
//     .get(controllers.getCondominioId)
//     .put(controllers.putCondominioId)
//     .delete(controllers.deleteCondominioId)

module.exports = router
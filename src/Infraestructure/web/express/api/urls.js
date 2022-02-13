const express = require("express")
const Route = express.Router()
// urls APIs
const urlsCondominio = require('./condominio/urls.js')
const urlsCasa = require('./casa/urls.js')

Route.use('/condominio', urlsCondominio)
Route.use('/casa', urlsCasa)

module.exports = Route
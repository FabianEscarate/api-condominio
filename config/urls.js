var urlsCondominio = require('./../api/condominio/urls.js')
var urlsCasa = require('./../api/casa/urls.js')

const manageUrls = (app) => {
    app.use('/condominio', urlsCondominio)
    app.use('/casa', urlsCasa)
}

module.exports = manageUrls
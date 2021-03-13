var urlsCondominio = require('./../api/condominio/urls.js')

const manageUrls = (app) => {
    app.use('/condominio', urlsCondominio)
}

module.exports = manageUrls
// urls Admin
const urlsAdminSite = require('./../admin/urls.js')
// urls APIs
const urlsAPI = require('./../api/urls.js')


const manageUrls = (app) => {
    app.use('/Admin', urlsAdminSite)
    app.use('/API', urlsAPI)

}

module.exports = manageUrls
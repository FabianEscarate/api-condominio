require('dotenv').config()
const path = require('path')
const hbs = require('hbs')
const hbsUtils = require('hbs-utils')(hbs)

__dirname = path.resolve(path.join(__dirname, '../'))

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.HOST = process.env.HOST || '0.0.0.0'
process.env.PORT = process.env.PORT || 5000

const loadConfig = (app) => {

    app.use(require('express').json()) // for parsing application/json

    // TEMPLATES
    app.set('view engine', 'html')
    app.engine('html', hbs.__express)
    app.set('views', 'templates')
    hbsUtils.registerWatchedPartials(__dirname + '/templates')
    
    // hbs.registerPartials(__dirname + '/templates/partials',
    //     (err) => {
    //         console.error('error al cargar parciales', err, path.resolve(path.join(__dirname, '/templates')))
    //     }
    // )
    // console.log('partials', hbs.handlebars.partials)

    // ASSETS
    app.use(require('express').static(path.join(__dirname, '/public')))
}


module.exports = loadConfig
// const path = require('path')
// console.log(path.resolve('.env'))
require('dotenv').config()

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 5000
}

module.exports = config

const makeConnection = (config) => {
    const mongoose = require('mongoose')
    console.log(process.env.MONGOCONNECTION)
    mongoose.connect(process.env.MONGOCONNECTION)

    return mongoose
}

module.exports = makeConnection
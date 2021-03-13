const mongoose = require('mongoose')

const modelName = 'condominio';

const ModelCondominio = new mongoose.model(
    modelName,
    new mongoose.Schema({
        name: String,
        location: {
            lat: String,
            lon: String
        }
    }, {
        // collection: modelName,
        autoCreate: true
    })
)

module.exports = ModelCondominio
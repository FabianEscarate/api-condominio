const mongoose =require('mongoose')
const ModelCondominio = require('../condominio/model.js');

const modelName = 'casa';

const ModelCasa = new mongoose.model(
    modelName,
    new mongoose.Schema({
        name: String,
        number:{
            type: Number,
            // unique: true,
            index: true
        },
        condominio: ModelCondominio.prototype.schema,
        address: {
            type: String,
            get: (v) => `Ubicación dentro del condominio ${v}`
        },
        location: {
            lat: String,
            lon: String
        }
    }, {
        collection: modelName,
        autoCreate: true
    })
)

module.exports = ModelCasa
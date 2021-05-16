const { connection, schemaInstance } = require("./../../config/mongo.js");
const ModelCondominio = require("../condominio/model.js");

const modelName = "casa";

const ModelCasa = connection.model(
  modelName,
  new schemaInstance(
    {
      name: String,
      number: {
        type: Number,
        // unique: true,
        index: true,
      },
      condominio: ModelCondominio.prototype.schema,
      address: {
        type: String,
        get: (v) => `Ubicación dentro del condominio ${v}`,
      },
      location: {
        lat: String,
        lon: String,
      },
    },
    {
      collection: modelName,
      autoCreate: true,
    }
  )
);

module.exports = ModelCasa;

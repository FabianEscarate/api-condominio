const { connection, schemaInstance } = require("./../../config/mongo.js");

const modelName = "condominio";

const ModelCondominio = connection.model(
  modelName,
  new schemaInstance(
    {
      name: {
        type: String,
        unique: true,
      },
      address: String,
      state: String,
      city: String,
      commune: String,
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

module.exports = ModelCondominio;

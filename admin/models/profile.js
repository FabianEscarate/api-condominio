const { connection, schemaInstance } = require("./../../config/mongo.js");

const modelName = "profile";

const ModelProfile = connection.model(
  modelName,
  new schemaInstance(
    {
      name: String,
      lastname: String,
      gender: String,
      location: String,
      website: String,
      picture: String,
    },
    {
      collection: modelName,
      autoCreate: true,
    }
  )
);

module.exports = ModelProfile;

const mongoose = require("mongoose");

const modelName = "profile";

const ModelProfile = new mongoose.model(
  modelName,
  new mongoose.Schema(
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

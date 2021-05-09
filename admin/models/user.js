const mongoose = require("mongoose");
const modelProfile = require("./profile");

const modelName = "user";

const ModelCondominio = new mongoose.model(
  modelName,
  new mongoose.Schema(
    {
      email: {
        type: String,
        unique: true,
      },
      password: String,
      passwordResetToken: String,
      passwordResetExpires: String,

      isSuperUser: Boolean,

      profile: modelProfile.prototype.schema,
    },
    {
      collection: modelName,
      autoCreate: true,
    }
  )
);

module.exports = ModelCondominio;

const mongoose = require("mongoose");
const modelProfile = require("./profile");

const modelName = "user";

const schema = new mongoose.Schema(
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
);

const methodsForSchema = {
  holaMundo: function () {
    console.log(this);
    console.log("hola mundo!!");
  },
  printEmail: function () {
    return this.email;
  },
  getFullName: function () {
    return `${this.profile.name} ${this.profile.lastname}`;
  },
};

schema.methods = methodsForSchema;

const ModelCondominio = new mongoose.model(modelName, schema);

module.exports = ModelCondominio;

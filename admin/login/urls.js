// urls para la API
const express = require("express");
const router = express.Router();
const controllers = require("./controllers.js");
const passportLocalConfig = require("./../passportJs/config");

router
  .route("/")
  .get(controllers.login)
  .post(passportLocalConfig.loginAuthentication);

module.exports = router;

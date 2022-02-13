// urls para la API
const express = require("express");
const router = express.Router();
const routeDashboard = require("./dashboard/urls");
const routeCollections = require("./collections/urls");
const routeLogin = require("./login/urls");
const controllers = require("./controllers.js");

router.route("/").get(controllers.home);
// .post(controllers.postCondominio);

router.use("/dashboard", routeDashboard);
router.use("/collections", routeCollections);
router.use("/login", routeLogin);

module.exports = router;

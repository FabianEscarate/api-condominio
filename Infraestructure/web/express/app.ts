import express from "express";

const app = express();
// const passport = require("passport");
// const connectFlash = require("connect-flash");
// const session = require("express-session");

// cargar configuracion de App
// require("./settings.js")(app, express);
// configuracion mantenedor urls
// require("./urls.js")(app);
// configuracion mongoDB
// require("./mongo.js");

// app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  // res.status(200).render("home");
});

export { app, express };

// const path = require("path");
// const hbs = require("hbs");
// const hbsUtils = require("hbs-utils")(hbs);
// const passport = require("passport");
// const connectFlash = require("connect-flash");
// const session = require("express-session");

// __dirname = path.resolve(path.join(__dirname, "../"));

// process.env.NODE_ENV = process.env.NODE_ENV || "producction";
// process.env.SESSION_SECRET = process.env.SESSION_SECRET || "productionSession";

// // Passport Config session
// let sess = {
//   secret: process.env.SESSION_SECRET,
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
// };

// const loadConfig = (app, currentExpress) => {
//   // for parsing body
//   app.use(currentExpress.urlencoded({ extended: true }));
//   // for parsing application/json
//   app.use(currentExpress.json());

//   // TEMPLATES
//   app.set("view engine", "html");
//   app.engine("html", hbs.__express);
//   app.set("views", "templates");
//   hbsUtils.registerWatchedPartials(__dirname + "/templates");

//   // LOGS
//   app.use(require("morgan")("common"));

//   // ASSETS
//   app.use(currentExpress.static(path.join(__dirname, "/public")));

//   // PASSPOORT
//   app.use(passport.initialize());
//   app.use(passport.session());

//   // Flash
//   app.use(connectFlash());

//   // SESSIONS
//   if (process.env.NODE_ENV === "production") {
//     app.set("trust proxy", 1); // trust first proxy
//     sess.cookie.secure = true; // serve secure cookies
//   }
//   app.use(session(sess));
// };

// module.exports = loadConfig;

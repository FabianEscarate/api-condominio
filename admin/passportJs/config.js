const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("./../models/user");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "pass",
    },
    (username, password, done) => {
      const { LOCAL_USER_ADMIN } = process.env;
      const todayDate = new Date();
      const pass = "" + todayDate.getFullYear();
      if (username === process.env.LOCAL_USER_ADMIN && password === pass) {
        let userSuperAdminResult = {
          id: -1,
          name: username,
        };
        return done(null, userSuperAdminResult);
      } else {
        return done(null, false, { message: "you can't be loged" });
      }
      // User.findOne({ username: username }, function (err, user) {
      //   if (err) {
      //     return done(err);
      //   }
      //   if (!user) {
      //     return done(null, false, { message: "Incorrect username." });
      //   }
      //   if (!user.validPassword(password)) {
      //     return done(null, false, { message: "Incorrect password." });
      //   }
      //   return done(null, user);
      // });
    }
  )
);

const loginAuthentication = passport.authenticate("local", {
  successRedirect: "/admin",
  failureRedirect: "/admin/login",
  failureFlash: true,
});

module.exports = {
  loginAuthentication,
};

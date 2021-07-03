const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const passportInitializer = (passport, getUserByEmail, getUserById) => {
  const authenticateUser = async (email, password, done) => {
    let user = await getUserByEmail(email);
    if (!user) {
      return done(null, false, { message: "Wrong E-mail" });
    }

    try {
      if (await bcrypt.compare(password, user.hashedPassword))
        return done(null, user);
      else return done(null, user, { message: "Wrong Password" });
    } catch (e) {
      console.log(e);
    }
  };

  passport.use(new localStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser((id, done) => done(null, getUserById(id)));
};

module.exports = passportInitializer;

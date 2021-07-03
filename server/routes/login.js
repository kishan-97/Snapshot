const Router = require("express").Router();
const passport = require("passport");

Router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/loginerror",
    successRedirect: "/success",
  })
);

Router.get("/loginerror", (req, res) => {
  res.status(408).json({ msg: "Invalid Registration", code: 408 });
});

Router.get("/loginsuccesful", (req, res) => {
  res.status(200).json({ msg: "Registration Succesful" });
});

module.exports = Router;

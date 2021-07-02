const Router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const user = require("../database/userSchema");

Router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(440).json({ msg: "Fill all the fields", code: 440 });
  }

  const userExist = await user.findOne({ email: email });

  if (userExist) {
    return res.status(430).json({ msg: "Use Already Exist", code: 430 });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const new_user = new user({ username, email, hashedPassword });
      const response = await new_user.save();
      return res.status(200).json({ msg: "Registration Succesful", code: 200 });
    } catch (e) {
      console.log(e);
    }
  }
});

module.exports = Router;

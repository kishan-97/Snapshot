const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: String,
  email: String,
  hashedPassword: String,
});

module.exports = mongoose.model("user", schema);

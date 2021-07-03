const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  display_name: String,
  verified: Boolean,
  avatar: String,
  image: String,
  caption: String,
  likes: Number,
  emoji: Number,
  stars: Number,
});

module.exports = mongoose.model("post", Post);

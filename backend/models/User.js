const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  enrolledCourses: [String],
  score: Number
});

module.exports = mongoose.model("User", userSchema);

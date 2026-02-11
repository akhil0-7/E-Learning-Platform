// models/Course.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  shortSyllabus: [String],
  fullSyllabus: [String]
});

module.exports = mongoose.model("Course", courseSchema);

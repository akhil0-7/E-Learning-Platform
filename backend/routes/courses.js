const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

// Get all courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Add course
router.post("/add", async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json({ message: "Course added" });
});

module.exports = router;

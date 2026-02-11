const express = require("express");
const Course = require("../models/Course");

const router = express.Router();


// ✅ Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
});


// ✅ Add new course
router.post("/add", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json({ message: "Course added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding course" });
  }
});


// ✅ Get single course by ID (KEEP THIS LAST)
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(404).json({ message: "Course not found" });
  }
});


module.exports = router;

const express = require("express");
const Quiz = require("../models/Quiz");

const router = express.Router();

// Get quiz questions
router.get("/", async (req, res) => {
  const quiz = await Quiz.find();
  res.json(quiz);
});

// Submit quiz
router.post("/submit", async (req, res) => {
  const { answers } = req.body;
  const questions = await Quiz.find();

  let score = 0;
  questions.forEach((q, i) => {
    if (q.answer === answers[i]) score++;
  });

  res.json({ score });
});

module.exports = router;

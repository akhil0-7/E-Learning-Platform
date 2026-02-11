const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/courses");
const quizRoutes = require("./routes/quiz");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/elearning");

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/quiz", quizRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

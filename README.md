# 📘 E-Learning Platform (MERN Stack)
## 📌 Project Description

This project is a web-based E-Learning Platform that allows users to log in, view available courses, explore detailed syllabus, and attend quizzes. It is designed to provide an interactive and user-friendly online learning experience using the MERN stack.

## 🛠️ Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Tools: Axios, React Router, Bootstrap/CSS

## ✨ Features
User Registration & Login
Courses Listing Page
View Course Details (short & detailed syllabus)
Start Learning option
Attend Quiz for each course
Responsive and simple UI
MongoDB database for storing courses and quiz data

## 📂 Project Structure

```
e-learning-platform/
│
├── backend/
│   ├── models/
│   │   ├── Course.js
│   │   ├── Quiz.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── courses.js
│   │   └── quiz.js
│   │
│   └── server.js
│
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── Certificate.js
│       │   ├── CourseDetails.js
│       │   ├── Courses.js
│       │   ├── Login.js
│       │   ├── Quiz.js
│       │   └── Register.js
│       │
│       ├── styles/
│       │   ├── Auth.css
│       │   ├── Courses.css
│       │   └── CourseDetails.css
│       │
│       └── App.js
│
└── README.md
```



## ⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <https://github.com/akhil0-7/E-Learning-Platform>

2️⃣ Backend Setup
`cd backend`
`npm install`
`node server.js`

3️⃣ Frontend Setup
`cd frontend`
`npm install`
`npm start`

## 🌐 Usage Flow
User logs in to the system
Redirected to Courses page
Click View Details to see short syllabus
Click Start Learning to open Course Details page
View full syllabus and click Attend Quiz
Answer quiz questions

## 🗄️ Database
MongoDB stores:
User information
Course details
Syllabus content
Quiz questions and results

## 🎯 Future Enhancements
Certificate generation after quiz completion
Admin panel to add/edit courses and quizzes
Progress tracking for students
Video lessons integration

## 👨‍💻 Developed By
`Akhil AS`
`Project – E-Learning Platform`

## 📜 License
This project is developed for educational purposes only.

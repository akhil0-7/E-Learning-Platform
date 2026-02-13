import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data));
  }, []);

  return (
    <div className="course-container">
      <h2 className="course-title">Available Courses</h2>

      <div className="course-grid">
        {courses.map(course => (
          <div className="course-card" key={course._id}>
            <h3>{course.title}</h3>

            {/* View Details button */}
            <button onClick={() => setSelectedCourseId(course._id)}>
              View Details
            </button>

            {/* Show short syllabus only for selected course */}
            {selectedCourseId === course._id && (
              <>
                <p><b>Short Syllabus:</b></p>
                <ul>
                  {course.shortSyllabus.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>

                <button onClick={() => navigate(`/course/${course._id}`)}>
                  Start Learning
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;

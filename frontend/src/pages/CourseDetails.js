import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${id}`)
      .then(res => setCourse(res.data));
  }, [id]);

  if (!course) return <h2>Loading...</h2>;

  return (
    <div className="details-container">
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <h3>Full Syllabus</h3>
      <ul>
        {course.fullSyllabus.map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </ul>

      <button onClick={() => navigate("/quiz")}>
        Attend Quiz
      </button>
    </div>
  );
}

export default CourseDetails;

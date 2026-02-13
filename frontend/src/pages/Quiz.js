import axios from "axios";
import { useEffect, useState } from "react";

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/quiz")
      .then(res => setQuiz(res.data));
  }, []);

  const submitQuiz = async () => {
    const res = await axios.post("http://localhost:5000/api/quiz/submit", { answers });
    alert("Your Score: " + res.data.score);
  };

  return (
    <div>
      <h2>Quiz</h2>
      {quiz.map((q, i) => (
        <div key={q._id}>
          <p>{q.question}</p>
          {q.options.map(opt => (
            <div key={opt}>
              <input type="radio" name={i} onChange={()=> {
                const arr=[...answers];
                arr[i]=opt;
                setAnswers(arr);
              }} /> {opt}
            </div>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz}>Submit</button>
    </div>
  );
}

export default Quiz;

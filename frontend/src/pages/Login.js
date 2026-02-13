import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    if (res.data.message === "Login successful") {
      navigate("/courses");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Student Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        <p>
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

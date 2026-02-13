import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", {
      name,email,password
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create Account</h2>

        <input placeholder="Name" onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />

        <button onClick={register}>Register</button>

        <p>
          Already registered? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

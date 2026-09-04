import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://https://jwt-authentication-system-1-9ghz.onrender.com.onrender.com/api/auth/register",
        form,
      );

      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Register to continue</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <button type="submit">Register</button>
        </form>

        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;

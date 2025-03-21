import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigation

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!"); // You can replace this with actual authentication logic
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="WIYF Logo" className="logo" />
        <h2>Login to WIYF</h2>
        <p className="subtitle">Find the best recipes with your ingredients</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="register-link">
          Don't have an account?{" "}
          <span className="link" onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;

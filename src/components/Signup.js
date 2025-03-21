import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Signup.css";
import logo from "../assets/logo.png";

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigation

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signed up successfully as ${name}`);
    navigate("/"); // Redirect to login after successful signup
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <img src={logo} alt="WIYF Logo" className="logo" />
        <h2>Create an Account</h2>
        <p className="subtitle">Join WIYF and discover amazing recipes!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../utils/api";
import "./Login.css";
import React from "react";
export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      login(data.token, data.user);
      setMessage("Login successful. Welcome back to TRAVIVA.");
      navigate(location.state?.from || "/");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page login-page">
      <Navbar />

      <form className="auth-form login-form" onSubmit={handleLogin}>
        <p className="auth-kicker">MEMBER ACCESS</p>
        <h1>Welcome Back</h1>
        <span>Sign in to continue your curated luxury journey.</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        {message && <p className="auth-message">{message}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Login"}
        </button>

        <p className="auth-link">
          New to TRAVIVA? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import React from "react";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        TRAVIVA
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <a href="/#experiences">Experiences</a>
        <a href="/about#about">About Us</a>
        <a href="/about#contact">Contact Us</a>
      </div>

      <div className="nav-actions">
        {isAuthenticated ? (
          <div className="user-menu">
            <span>Welcome, {user?.name}</span>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link className="nav-btn ghost" to="/login">
              Login
            </Link>
            <Link className="nav-btn" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

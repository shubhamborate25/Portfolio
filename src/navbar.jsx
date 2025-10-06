import React, { useState } from "react";
import "./assets/Css/nav.css";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Left side logo */}
      <div className="logo">Portfolio</div>

      {/* Navigation links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Project
        </NavLink>

        <NavLink
          to="/skill"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Skill
        </NavLink>
      </div>

      {/* Right side */}
      <div className="nav-right">
        <Link to="/contact" className="contact-btn">
          Contact Me
        </Link>

        {/* Hamburger menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "rotate1" : ""}`}></div>
          <div className={`bar ${isOpen ? "fade" : ""}`}></div>
          <div className={`bar ${isOpen ? "rotate2" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

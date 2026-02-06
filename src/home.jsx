import React from "react";
import "./assets/Css/home.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Profile from "./assets/image/profile.png";
import Resume from "./assets/resume/Shubham_Borate_Java_Developer.pdf"; // <-- Import your resume file

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        {/* Left side - Profile Image */}
        <div className="home-left">
          <div className="circle">
            <img src={Profile} alt="Profile" />
          </div>
        </div> 

        {/* Right side - Text and Socials */}
        <div className="home-right">
          <h1>
            Hello, I'm <span>Shubham Borate</span>
          </h1>
          <p>
            I'm a passionate <strong>Java Full Stack Developer</strong>{" "}
            specializing in Spring Boot, React, and MySQL. I love building
            clean, responsive, and user-friendly web applications.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/shubham-borate-4429771a3/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/shubhamborate25"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/shubham_borate_25/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Resume Download Button */}
          <a
            href={Resume}
            download="Shubham_Borate_Resume.pdf"
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

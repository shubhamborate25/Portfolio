import React, { useState, useEffect, useRef } from "react";
import "./assets/Css/about.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Profile from "./assets/image/pofile.jpg" 


const About = () => {
  const [showMore, setShowMore] = useState(false);
  const descRef = useRef(null);
  const eduRefs = useRef([]);
  const certRef = useRef(null);

  const toggleShowMore = () => setShowMore(!showMore);

  const addToRefs = el => {
    if (el && !eduRefs.current.includes(el)) {
      eduRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (descRef.current) observer.observe(descRef.current);
    eduRefs.current.forEach(el => observer.observe(el));
    if (certRef.current) observer.observe(certRef.current);

    return () => observer.disconnect();
  }, []);

  const educationList = [
    { title: "MCA", college: "Sinhgad Institute of Business Administration and Research, Kondhawa", year: "2024", percentage: "CGPA: 7.71" },
    { title: "BCA", college: "S.M.Joshi College, Hadapsar", year: "2021", percentage: "CGPA: 8.16" },
    { title: "12th Standard", college: "Padmashri Manibhai Desai College, Uruli Kanchan", year: "2018", percentage: "46%" },
    { title: "10th Standard", college: "Mahatma Gandhi Vidyalaya, Uruli Kanchan", year: "2016", percentage: "62%" },
  ];

  const certificationList = [
    "Java Full Stack Developer Certification", 
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Profile + Description */}
        <div className="desc-image-container" ref={descRef}>
          <div className="image-box">
            <img src={Profile} alt="Profile" />
          </div>
          <div className="desc-container">
            <p className={`desc ${showMore ? "expanded" : ""}`}>
              Hello! I am <strong>Shubham Borate</strong>, a passionate Java Full Stack Developer with experience in building responsive web applications. I specialize in Java, Spring Boot, Hibernate, MySQL, REST API, Spring Security, JSP, Servlets, HTML, CSS, JavaScript, and Bootstrap. I enjoy problem-solving, learning new technologies, and creating clean, efficient code. My goal is to develop full-stack applications that provide excellent user experiences. I am also exploring React and modern front-end frameworks to enhance my skills. I believe in continuous learning and always keeping up with the latest technology trends.
            </p>
            <span className="see-more-btn" onClick={toggleShowMore}>
              {showMore ? "Show less" : "See more"}
            </span>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/shubham-borate-4429771a3/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/shubhamborate25" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.instagram.com/shubham_borate_25/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="about-education">
          <h2>Education</h2>
          <div className="edu-grid">
            {educationList.map((edu, index) => (
              <div key={index} className="edu-item" ref={addToRefs}>
                <div className="edu-bullet"></div>
                <div className="edu-content">
                  <h3>{edu.title}</h3>
                  <p>{edu.college}</p>
                  <p>{edu.year} |  {edu.percentage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="about-certifications" ref={certRef}>
          <h2>Certifications</h2>
          <ul>
            {certificationList.map((cert, idx) => (
              <li key={idx}> <h4>{cert}</h4> </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;

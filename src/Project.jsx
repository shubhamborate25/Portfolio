import React, { useState } from "react";
import "./assets/Css/project.css";
import ContactManager from './assets/image/contactmanager.png';
import Ecommerce from './assets/image/ecommerce.png'; // example placeholder image

const Project = () => {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "Contact Manager",
      description: [
        "Spring Boot + Thymeleaf project with CRUD operations, Spring Security, MySQL integration.",
        "Features include user registration/login, contact management, and responsive UI for all devices.",
        "Implemented secure password storage, email verification, and user-specific data management."
      ],
      github: "https://github.com/shubhamborate25/ContactManager",
      image: ContactManager
    },
    {
      title: "E-commerce Website",
      description: [
        "JSP + Servlets project with product catalog, cart functionality, MySQL database, and responsive front-end.",
        "Features include dynamic product listing, cart checkout, and admin panel for product management.",
        "Implemented responsive design and clean user interface for desktop and mobile users."
      ],
      github: "",
      image: Ecommerce
    }
  ];

  const toggleSeeMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="project" className="project-section">
      <h2>My Projects</h2>
      <div className="project-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            {/* Image as img tag */}
            <div className="project-image">
              <img src={proj.image} alt={proj.title} />
              {proj.github && (
                <a href={proj.github} className="github-link" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>

            <h3>{proj.title}</h3>
            <div className={`project-desc ${expanded === index ? "expanded" : ""}`}>
              {proj.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            {proj.description.length > 1 && (
              <span className="see-more" onClick={() => toggleSeeMore(index)}>
                {expanded === index ? "See Less" : "See More"}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

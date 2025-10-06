import React, { useEffect, useRef, useState } from "react";
import { FaJava, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap } from "react-icons/fa";
import "./assets/Css/skill.css";

const Skill = () => {
  const [inView, setInView] = useState(false);
  const skillRef = useRef();

  const frontendSkills = [
    { name: "HTML", level: 85, icon: <FaHtml5 /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 80, icon: <FaJsSquare /> },
    { name: "React", level: 75, icon: <FaReact /> },
    { name: "Bootstrap", level: 80, icon: <FaBootstrap /> },
  ];

  const backendSkills = [
    { name: "Java", level: 85, icon: <FaJava /> },
    { name: "Spring Boot", level: 80, icon: <FaJava /> },
    { name: "Hibernate", level: 70, icon: <FaDatabase /> },
    { name: "MySQL", level: 80, icon: <FaDatabase /> },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div className="skill-card" key={index}>
        <div className="skill-info">
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-level"
            style={{ width: inView ? `${skill.level}%` : "0%" }}
          ></div>
        </div>
      </div>
    ));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 } // 30% visible triggers animation
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, []);

  return (
    <section id="skill" className="skill-section" ref={skillRef}>
      <h2>My Skills</h2>
      <div className="skill-columns">
        <div className="skill-column">
          <h3>Frontend</h3>
          {renderSkills(frontendSkills)}
        </div>
        <div className="skill-column">
          <h3>Backend</h3>
          {renderSkills(backendSkills)}
        </div>
      </div>
    </section>
  );
};

export default Skill;

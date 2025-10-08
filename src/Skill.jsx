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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, []);

  const renderSkills = (skills) =>
    skills.map((skill, index) => {
      const circumference = 2 * Math.PI * 45; // circle radius = 45
      const offset = inView ? circumference * (1 - skill.level / 100) : circumference;
      return (
        <div className="skill-circle-card" key={index}>
          <div className="circle-wrapper">
            <svg width="100" height="100">
              <circle
                className="bg-circle"
                cx="50"
                cy="50"
                r="45"
              />
              <circle
                className="progress-circle"
                cx="50"
                cy="50"
                r="45"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
            </svg>
            <div className="circle-text">{skill.level}%</div>
          </div>
          <div className="skill-name">
            {skill.icon} {skill.name}
          </div>
        </div>
      );
    });

  return (
    <section id="skill" className="skill-section" ref={skillRef}>
      <h2>My Skills</h2>
      <div className="skill-columns">
        <div className="skill-column">
          <h3>Frontend</h3>
          <div className="skill-circle-container">{renderSkills(frontendSkills)}</div>
        </div>
        <div className="skill-column">
          <h3>Backend</h3>
          <div className="skill-circle-container">{renderSkills(backendSkills)}</div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

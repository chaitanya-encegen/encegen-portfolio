import React, { useState } from "react";
import "./CoreTeamSection.css";
import { FaEnvelope, FaLinkedinIn, FaUser } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

export default function CoreTeamSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const team = [
    {
      name: "Laxman Dagade",
      role: "Sr. Quality Analyst",
      skills: ["Quality Assurance", "Test Automation", "Performance Testing"],
    },
    {
      name: "Priya Sharma",
      role: "AI Research Scientist",
      skills: ["Machine Learning", "Deep Learning", "NLP"],
    },
    {
      name: "Rahul Patel",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "Cloud Architecture"],
    },
    {
      name: "Sneha Desai",
      role: "UX/UI Designer",
      skills: ["User Experience", "Interface Design", "Prototyping"],
    },
  ];

  return (
    <section className="core-team-section">
      <h3 className="core-title">Core Team</h3>

      <div className="core-grid">
        {team.map((member, index) => (
          <div className="core-card" key={index}>
            <div className="avatar">
              <FaUser />
            </div>
            <span className="badge">
              <HiBadgeCheck />
            </span>

            <h4 className={activeIndex === index ? "active-name" : ""}>
              {member.name}
            </h4>

            <p className="role">{member.role}</p>

            <ul>
              {member.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            <div className="core-socials">
              <span onClick={() => setActiveIndex(index)}>
                <FaEnvelope />
              </span>
              <span onClick={() => setActiveIndex(index)}>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Team Excellence */}
      <div className="excellence-box">
        <h3>Team Excellence</h3>
        <p>Our team's collective expertise and achievements</p>

        <div className="excellence-grid">
          <div className="excellence-item">
            <div className="ex-icon">🏅</div>
            <h4>15+</h4>
            <span>Certifications</span>
          </div>

          <div className="excellence-item">
            <div className="ex-icon">👥</div>
            <h4>20+</h4>
            <span>Team Members</span>
          </div>

          <div className="excellence-item">
            <div className="ex-icon">⭐</div>
            <h4>50+</h4>
            <span>Projects Completed</span>
          </div>

          <div className="excellence-item">
            <div className="ex-icon">📅</div>
            <h4>5+</h4>
            <span>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
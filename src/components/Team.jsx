import React from "react";
import "./Team.css";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

export default function Team() {
  return (
    <section className="team-page">
      {/* HERO */}
      <div className="team-hero">
        <h1>Our Team</h1>
        <p>
          Meet the brilliant minds behind Encegen AI Labs — innovative leaders,
          expert developers, and visionary thinkers driving the future of AI.
        </p>
      </div>

      {/* LEADERSHIP */}
      <div className="team-section">
        <h2>Leadership Team</h2>

        <div className="team-grid">
          <div className="team-card leader">
            <div className="team-img" />
            <h3>Saurabh Gite</h3>
            <span>Visionary Director</span>
            <p>
              Technology leader with expertise in AI-driven platforms,
              enterprise solutions, and digital transformation strategies.
            </p>

            <div className="team-tags">
              <span>AI Strategy</span>
              <span>Enterprise Systems</span>
              <span>Leadership</span>
            </div>

            <div className="team-socials">
              <FiLinkedin />
              <FiTwitter />
              <FiGithub />
            </div>
          </div>

          <div className="team-card leader">
            <div className="team-img" />
            <h3>Amar Gite</h3>
            <span>Co-Founder & Product Agent</span>
            <p>
              Product-focused innovator driving scalable AI solutions,
              business automation, and high-impact user experiences.
            </p>

            <div className="team-tags">
              <span>Product Design</span>
              <span>AI Platforms</span>
              <span>Growth</span>
            </div>

            <div className="team-socials">
              <FiLinkedin />
              <FiTwitter />
              <FiGithub />
            </div>
          </div>
        </div>
      </div>

      {/* CORE TEAM */}
      <div className="team-section">
        <h2>Core Team</h2>

        <div className="core-grid">
          {[
            ["Laxman Dugade", "Quality Analyst"],
            ["Prajyot Pawar", "Frontend Developer"],
            ["Rahul Pawar", "Backend Engineer"],
            ["Sneha Desai", "UI/UX Designer"],
          ].map((m, i) => (
            <div className="core-card" key={i}>
              <div className="core-avatar" />
              <h4>{m[0]}</h4>
              <p>{m[1]}</p>

              <div className="team-socials small">
                <FiLinkedin />
                <FiGithub />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM EXCELLENCE */}
      <div className="team-excellence">
        <div>
          <h3>15+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3>20+</h3>
          <p>Team Members</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Projects Delivered</p>
        </div>
        <div>
          <h3>5+</h3>
          <p>Tech Domains</p>
        </div>
      </div>
    </section>
  );
}

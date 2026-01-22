import React from "react";
import "./CoreTeamSection.css";
import { FaEnvelope, FaLinkedinIn, FaUser } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

export default function CoreTeamSection() {
  return (
    <section className="core-team-section">
      {/* CORE TEAM */}
      <h3 className="core-title">Core Team</h3>

      <div className="core-grid">
        {/* CARD */}
        <div className="core-card">
          <div className="avatar">
            <FaUser />
          </div>
          <span className="badge"><HiBadgeCheck /></span>

          <h4>Laxman Dagade</h4>
          <p className="role">Sr. Quality Analyst</p>

          <ul>
            <li>Quality Assurance</li>
            <li>Test Automation</li>
            <li>Performance Testing</li>
          </ul>

          <div className="core-socials">
            <span><FaEnvelope /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>

        <div className="core-card">
          <div className="avatar">
            <FaUser />
          </div>
          <span className="badge"><HiBadgeCheck /></span>

          <h4>Priya Sharma</h4>
          <p className="role">AI Research Scientist</p>

          <ul>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>NLP</li>
          </ul>

          <div className="core-socials">
            <span><FaEnvelope /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>

        <div className="core-card">
          <div className="avatar">
            <FaUser />
          </div>
          <span className="badge"><HiBadgeCheck /></span>

          <h4>Rahul Patel</h4>
          <p className="role">Full Stack Developer</p>

          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Cloud Architecture</li>
          </ul>

          <div className="core-socials">
            <span><FaEnvelope /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>

        <div className="core-card">
          <div className="avatar">
            <FaUser />
          </div>
          <span className="badge"><HiBadgeCheck /></span>

          <h4>Sneha Desai</h4>
          <p className="role">UX/UI Designer</p>

          <ul>
            <li>User Experience</li>
            <li>Interface Design</li>
            <li>Prototyping</li>
          </ul>

          <div className="core-socials">
            <span><FaEnvelope /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>
      </div>

      {/* TEAM EXCELLENCE */}
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

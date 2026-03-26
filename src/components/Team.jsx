import React from "react";
import "./Team.css";
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function Team() {
  return (
    <section className="team-page">

      {/* HERO */}
      <div className="team-hero">
        <h1>
          Meet Our <span>Team</span>
        </h1>
        <p>
          Our diverse team of experts combines deep technical knowledge with
          creative problem-solving to deliver exceptional results for our clients.
        </p>
        <div className="gradient-divider" />
      </div>

      {/* LEADERSHIP */}
      <div className="team-section">
        <h2>Leadership Team</h2>

        <div className="leaders-grid">

          <div className="leader-card">
            <div className="leader-img"></div>

            <div className="leader-content">
              <div className="leader-header">
                <div>
                  <h3>Saurabh Gite</h3>
                  <span className="leader-role">Managing Director</span>
                </div>
                <div className="leader-icons">
                  <FiMail />
                  <FiLinkedin />
                </div>
              </div>

              <p>
                Visionary leader with extensive experience in AI and digital transformation.
              </p>

              <h4>Expertise:</h4>
              <div className="expertise-tags">
                <span>AI Strategy</span>
                <span>Business Development</span>
                <span>Digital Transformation</span>
                <span>Leadership</span>
              </div>
            </div>
          </div>

          <div className="leader-card">
            <div className="leader-img"></div>

            <div className="leader-content">
              <div className="leader-header">
                <div>
                  <h3>Amar Gite</h3>
                  <span className="leader-role">Co-Founder & Patent Agent</span>
                </div>
                <div className="leader-icons">
                  <FiMail />
                  <FiLinkedin />
                </div>
              </div>

              <p>
                Innovation expert and patent specialist leading R&D initiatives.
              </p>

              <h4>Expertise:</h4>
              <div className="expertise-tags">
                <span>Patent Management</span>
                <span>Innovation Strategy</span>
                <span>Technical Leadership</span>
                <span>R&D</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CORE TEAM */}
      <div className="team-section">
        <h2>Core Team</h2>

        <div className="core-grid">

          <div className="core-card">
            <div className="core-avatar">👥</div>
            <h4>Laxman Dagade</h4>
            <p className="core-role">Sr. Quality Analyst</p>
            <p>Quality Assurance</p>
            <p>Test Automation</p>
            <p>Performance Testing</p>
            <div className="core-icons">
              <FiMail />
              <FiLinkedin />
            </div>
          </div>

          <div className="core-card">
            <div className="core-avatar">👥</div>
            <h4>Priya Sharma</h4>
            <p className="core-role">AI Research Scientist</p>
            <p>Machine Learning</p>
            <p>Deep Learning</p>
            <p>NLP</p>
            <div className="core-icons">
              <FiMail />
              <FiLinkedin />
            </div>
          </div>

          <div className="core-card">
            <div className="core-avatar">👥</div>
            <h4>Rahul Patel</h4>
            <p className="core-role">Full Stack Developer</p>
            <p>React</p>
            <p>Node.js</p>
            <p>Cloud Architecture</p>
            <div className="core-icons">
              <FiMail />
              <FiLinkedin />
            </div>
          </div>

          <div className="core-card">
            <div className="core-avatar">👥</div>
            <h4>Sneha Desai</h4>
            <p className="core-role">UX/UI Designer</p>
            <p>User Experience</p>
            <p>Interface Design</p>
            <p>Prototyping</p>
            <div className="core-icons">
              <FiMail />
              <FiLinkedin />
            </div>
          </div>

        </div>
      </div>

      {/* TEAM EXCELLENCE */}
      <div className="excellence-wrapper">
        <div className="excellence-card">
          <h2>Team Excellence</h2>
          <p>Our team's collective expertise and achievements</p>

          <div className="excellence-grid">
            <div>
              <h3>15+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>20+</h3>
              <span>Team Members</span>
            </div>
            <div>
              <h3>50+</h3>
              <span>Projects Delivered</span>
            </div>
            <div>
              <h3>5+</h3>
              <span>Technology Domains</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
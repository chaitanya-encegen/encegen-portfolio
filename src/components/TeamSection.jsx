import React from "react";
import "./TeamSection.css";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

export default function TeamSection() {
  return (
    <section className="team-section">
      {/* HEADER */}
      <div className="team-header">
        <h2>
          Meet Our <span>Team</span>
        </h2>
        <p>
          Our diverse team of experts combines deep technical knowledge with
          creative problem-solving to deliver exceptional results for our
          clients.
        </p>
      </div>

      <h3 className="team-subtitle">Leadership Team</h3>

      {/* LEADERSHIP GRID */}
      <div className="leadership-grid">
        {/* CARD 1 */}
        <div className="leader-card">
          <div className="leader-image">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              alt="Saurabh Gite"
            />
            <div className="image-overlay">
              <div className="overlay-icon">👥</div>
            </div>
          </div>

          <div className="leader-content">
            <h4>Saurabh Gite</h4>
            <span className="role">Managing Director</span>

            <div className="socials">
              <span><FaEnvelope /></span>
              <span><FaLinkedinIn /></span>
            </div>

            <p>
              Visionary leader with extensive experience in AI and digital
              transformation. Saurabh drives the strategic direction of Encegen
              AI Labs and oversees all major client relationships.
            </p>

            <div className="expertise">
              <span>AI Strategy</span>
              <span>Business Development</span>
              <span>Digital Transformation</span>
              <span>Leadership</span>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="leader-card">
          <div className="leader-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Amar Gite"
            />
            <div className="image-overlay">
              <div className="overlay-icon">👥</div>
            </div>
          </div>

          <div className="leader-content">
            <h4>Amar Gite</h4>
            <span className="role">Co-Founder & Patent Agent</span>

            <div className="socials">
              <span><FaEnvelope /></span>
              <span><FaLinkedinIn /></span>
            </div>

            <p>
              Innovation expert and patent specialist with deep technical
              knowledge. Amar leads R&D initiatives and ensures Encegen’s
              solutions are protected and cutting-edge.
            </p>

            <div className="expertise">
              <span>Patent Management</span>
              <span>Innovation Strategy</span>
              <span>Technical Leadership</span>
              <span>R&D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

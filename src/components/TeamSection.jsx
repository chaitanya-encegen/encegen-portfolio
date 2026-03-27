import React from "react";
import "./TeamSection.css";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

import saurabhImg from "../assets/saurabh.png";
import amarImg from "../assets/amar.png";

export default function TeamSection() {
  return (
    <section className="team-section">

      {/* HEADER */}
      <div className="team-header">
        <h2>
          Meet Our <span>Leadership</span>
        </h2>
        <p>
          Our leadership team brings deep expertise in AI, innovation, and
          strategic growth to deliver cutting-edge solutions.
        </p>
      </div>

      <h3 className="team-subtitle">Leadership Team</h3>

      {/* GRID */}
      <div className="leadership-grid">

        {/* CARD 1 */}
        <div className="leader-wrapper">
        <div className="leader-card">
          <div className="leader-left">
            <img src={saurabhImg} alt="Saurabh Gite" />
          </div>

          <div className="leader-right">
            <div className="leader-header">
              <div>
                <h4>Saurabh Gite</h4>
                <span className="role">Managing Director</span>
              </div>

              <div className="socials">
                <span><FaEnvelope /></span>
                <span><FaLinkedinIn /></span>
              </div>
            </div>

            <p>
            Saurabh Anil Gite is the Founder & Managing Director of Encegen AI Labs, bringing over 10+ years of experience in IT and business development. He leads the organization with a clear vision of delivering intelligent, scalable, and future-ready digital solutions.With deep expertise in Agentic AI, Generative AI, custom software development, and end-to-end website development—including static, dynamic, and e-commerce platforms—Saurabh specializes in transforming complex business challenges into high-impact technology solutions.Known for his strategic mindset and hands-on leadership, he drives seamless execution across sales, design, and development, positioning Encegen AI Labs as a trusted partner for businesses seeking innovation, reliability, and measurable results.




            </p>

            <div className="expertise">
              <span>AI Strategy</span>
              <span>Business Development</span>
              <span>Digital Transformation</span>
              <span>Leadership</span>
            </div>
          </div>
        </div>
        </div>

        {/* CARD 2 */}
        <div className="leader-wrapper">
        <div className="leader-card">
          
          <div className="leader-left">
            <img src={amarImg} alt="Amar Gite" />
          </div>

          <div className="leader-right">
            <div className="leader-header">
              <div>
                <h4>Amar Gite</h4>
                <span className="role">Co-Founder & Patent Agent</span>
              </div>

              <div className="socials">
                <span><FaEnvelope /></span>
                <span><FaLinkedinIn /></span>
              </div>
            </div>

            <p>
Registered Indian Patent Agent | IP Strategist | Inventor
Amar Gite is a visionary inventor and a seasoned computer engineer who transitioned into Intellectual 
Property Rights (IPR) as a leading Patent Attorney with over 13 years experience.
Authorized as a Registered Indian Patent Agent (INPA-2559), he files and prosecutes patents globally.
With a unique dual perspective, Amar transforms ideas into strong patent applications, 
having worked on 1,000+ patent cases to protect intellectual property portfolios.
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
      </div>
    </section>
  );
}
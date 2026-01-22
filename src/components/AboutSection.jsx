import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <h1>
          About <span>Encegen AI Labs</span>
        </h1>
        <p>
          Founded with a vision to bridge the gap between cutting-edge AI
          technology and practical business solutions, Encegen AI Labs empowers
          organizations worldwide through intelligent innovation.
        </p>
      </div>

      <div className="gradient-divider" />

      {/* STORY + METRICS */}
      <div className="about-container">
        <div className="story-card">
          <h3>Our Story</h3>

          <p>
            Encegen AI Labs was founded by visionary leaders{" "}
            <b>Saurabh Gite</b> (Managing Director) and{" "}
            <b>Amar Gite</b> (Co-Founder & Patent Agent) with a shared passion for
            leveraging artificial intelligence to solve complex business
            challenges.
          </p>

          <p>
            With deep expertise in technology and innovation, the founders
            recognized AI’s immense potential to transform industries. Encegen
            AI Labs was established to deliver advanced, scalable AI solutions
            across multiple sectors.
          </p>

          <p>
            Today, we continue pushing the boundaries of what’s possible with
            AI—helping organizations streamline operations, enhance customer
            experiences, and achieve sustainable growth through automation and
            data-driven intelligence.
          </p>
        </div>

        <div className="metrics-card">
          <div>
            <h2>5+</h2>
            <span>Years of Innovation</span>
          </div>

          <div className="metrics-line" />

          <div>
            <h2>100+</h2>
            <span>Solutions Delivered</span>
          </div>
        </div>
      </div>

      {/* INFO GRID */}
      <div className="info-grid">
        <div className="info-box">
          <div className="icon">🎯</div>
          <h4>Mission</h4>
          <p>
            To democratize AI technology and make it accessible to businesses of
            all sizes, enabling digital excellence.
          </p>
        </div>

        <div className="info-box">
          <div className="icon">👁️</div>
          <h4>Vision</h4>
          <p>
            To become a leading AI innovation lab shaping the future of
            businesses and society.
          </p>
        </div>

        <div className="info-box">
          <div className="icon">💜</div>
          <h4>Values</h4>
          <p>
            Innovation, integrity, excellence, and customer-centricity define
            everything we build.
          </p>
        </div>

        <div className="info-box">
          <div className="icon">🤝</div>
          <h4>Team</h4>
          <p>
            A diverse group of AI experts, developers, and strategists delivering
            measurable impact.
          </p>
        </div>
      </div>

      <div className="cta">
        <button>Learn More About Us →</button>
      </div>
    </section>
  );
}

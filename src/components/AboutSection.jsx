<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./AboutSection.css";

export default function AboutSection({ showNavbar = false, previewOnly = false }) {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  // Short preview text for Home
  const previewText = "Founded with a vision to bridge the gap between cutting-edge AI technology and practical business solutions.";

  return (
    <section className="about-page">
   

=======
import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-page">
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
      {/* HERO */}
      <div className="about-hero">
        <h1>
          About <span>Encegen AI Labs</span>
        </h1>
<<<<<<< HEAD
        <p>{previewOnly ? previewText : "Founded with a vision to bridge the gap between cutting-edge AI technology and practical business solutions, Encegen AI Labs is your trusted partner in digital transformation and innovation."}</p>
      </div>

      {!previewOnly && <div className="gradient-divider" />}

      {/* Full Story + Metrics */}
      {!previewOnly && (
        <>
          <div className="about-container">
            <div className="story-card">
              <h3>Our Story</h3>
              <p>
                Encegen AI Labs was founded by visionary leaders <b>Saurabh Gite</b> and <b>Amar Gite</b> with a shared passion for leveraging AI.
              </p>
              <p>
                Our founders recognized the immense potential of AI to transform industries. They established Encegen AI Labs to make advanced AI solutions accessible to businesses.
              </p>
              <p>
                Today, we continue to push boundaries with AI, helping organizations streamline operations and drive growth through intelligent automation.
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

          {/* Info Grid */}
          <div className="info-grid" ref={gridRef}>
            {["Mission", "Vision", "Values", "Team"].map((title, index) => (
              <div
                key={title}
                className={`info-box ${visible ? "animate" : ""}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="icon">
                  {title === "Mission" && "🎯"}
                  {title === "Vision" && "👁️"}
                  {title === "Values" && "⚖️"}
                  {title === "Team" && "🤝"}
                </div>
                <h4>{title}</h4>
                <p>
                  {title === "Mission" &&
                    "To democratize AI technology and make it accessible to businesses of all sizes."}
                  {title === "Vision" &&
                    "To be the leading AI solutions provider shaping the future of business."}
                  {title === "Values" &&
                    "Innovation, integrity, excellence, and customer-centricity drive everything we do."}
                  {title === "Team" &&
                    "Our diverse team of AI experts, developers, and strategists deliver exceptional results."}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* CTA for preview only */}
      {previewOnly && (
        <div className="about-cta">
          <Link to="/about" className="learn-more-btn">
            Learn More About Us →
          </Link>
        </div>
      )}
=======
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
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
    </section>
  );
}

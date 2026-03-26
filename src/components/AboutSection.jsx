import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./AboutSection.css";
import { FaBullseye, FaEye, FaBalanceScale, FaUsers } from "react-icons/fa";

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
      

      {/* HERO */}
      <div className="about-hero">
        <h1 className="heading">
          About <span className="subtitle">Encegen AI Labs</span>
        </h1>
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
  {title === "Mission" && <FaBullseye />}
  {title === "Vision" && <FaEye />}
  {title === "Values" && <FaBalanceScale />}
  {title === "Team" && <FaUsers />}
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
    </section>
  );
}

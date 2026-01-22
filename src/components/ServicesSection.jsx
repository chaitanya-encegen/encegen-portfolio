import React from "react";
import "./ServicesSection.css";

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">
        Our <span>Services</span>
      </h2>
      <p className="services-subtitle">
        We offer comprehensive technology solutions designed to transform your
        business and drive innovation across all aspects of your digital journey.
      </p>

      <div className="services-grid">
        {/* 1 */}
        <div className="service-card purple">
          <div className="icon">🤖</div>
          <h3>AI Research & Custom AI Solutions</h3>
          <p>
            Cutting-edge artificial intelligence research and development. We
            create custom AI models, machine learning algorithms, and automation
            systems tailored to your business needs.
          </p>
          <ul>
            <li>Custom AI Model Development</li>
            <li>Machine Learning Solutions</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision Systems</li>
          </ul>
          <button className="learn-btn">Learn More →</button>
        </div>

        {/* 2 */}
        <div className="service-card pink">
          <div className="icon">💻</div>
          <h3>Custom Software Development & Integration</h3>
          <p>
            End-to-end software development with seamless integration. We build
            scalable, robust applications using modern technologies.
          </p>
          <ul>
            <li>Web App Development</li>
            <li>Mobile App Development</li>
            <li>API Development & Integration</li>
            <li>Legacy System Modernization</li>
          </ul>
          <button className="learn-btn">Learn More →</button>
        </div>

        {/* 3 */}
        <div className="service-card green">
          <div className="icon">🌐</div>
          <h3>Website & E-Commerce Development</h3>
          <p>
            Professional web and e-commerce solutions that drive engagement and
            conversions. From corporate websites to complex platforms.
          </p>
          <ul>
            <li>Responsive Web Design</li>
            <li>E-Commerce Platforms</li>
            <li>CMS Development</li>
            <li>SEO Optimization</li>
          </ul>
          <button className="learn-btn">Learn More →</button>
        </div>

        {/* 4 */}
        <div className="service-card orange">
          <div className="icon">📈</div>
          <h3>Digital Marketing & Growth Solutions</h3>
          <p>
            Data-driven digital marketing strategies and growth hacking to
            accelerate your business growth and ROI across all digital channels.
          </p>
          <ul>
            <li>Digital Strategy Consulting</li>
            <li>SEO & SEM Campaigns</li>
            <li>Social Media Marketing</li>
            <li>Analytics & Performance Tracking</li>
          </ul>
          <button className="learn-btn">Learn More →</button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "./Industries.css";
import {
  FiDollarSign,
  FiHeart,
  FiHome,
  FiBookOpen,
  FiLayers,
  FiShoppingBag,
} from "react-icons/fi";

export default function Industries() {
 const industries = [
  {
    icon: <FiDollarSign />,
    title: "FinTech",
    desc: "AI-powered financial solutions, payment gateways, fraud detection, and blockchain integration for modern banking.",
    stat: "99.9%",
    statText: "Transaction Accuracy",
    bg: "/image/FinTech.jpg",
  },
  {
    icon: <FiHeart />,
    title: "HealthTech",
    desc: "Digital health platforms, telemedicine applications, AI diagnostics, and patient management systems for healthcare innovation.",
    stat: "2M+",
    statText: "Patient Records Managed",
    bg: "/image/HealthTech.png",
  },
  {
    icon: <FiHome />,
    title: "Real Estate",
    desc: "Smart property management, virtual tours, CRM systems, and AI-driven market analytics for real estate professionals.",
    stat: "50K+",
    statText: "Properties Listed",
    bg: "/image/real.jpg",
  },
  {
    icon: <FiBookOpen />,
    title: "Education",
    desc: "E-learning platforms, LMS solutions, AI tutoring, and digital transformation for educational institutions.",
    stat: "100K+",
    statText: "Students Empowered",
    bg: "/image/educate.jpg",
  },
  {
    icon: <FiLayers />,
    title: "Manufacturing",
    desc: "IoT integration, predictive maintenance, supply chain optimization, and smart factory solutions.",
    stat: "40%",
    statText: "Efficiency Increase",
    bg: "/image/manufactor.jpg",
  },
  {
    icon: <FiShoppingBag />,
    title: "Retail & E-Commerce",
    desc: "AI-powered recommendations, inventory management, omnichannel platforms, and customer analytics.",
    stat: "3x",
    statText: "Sales Growth",
    bg: "/image/retail.png",
  }
];

  return (
    <section className="industries-section" id="industries">
      <h2 className="industries-heading">
        Industries <span className="highlight-text"> We Transform</span>
      </h2>

      <p className="industries-subtitle">
        Delivering cutting-edge AI solutions across diverse sectors with proven results and measurable impact.
      </p>
<div className="gradient-divider" />
      <div className="industries-grid">
        {industries.map((item, index) => (
          <div className="industry-card" key={index} style={{backgroundImage: `url(${item.bg})`}}>
            <div className="industry-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="industry-desc">{item.desc}</p>

            <div className="industry-stat">
              <span className="stat-number">{item.stat}</span>
              <span className="stat-text">{item.statText}</span>
            </div>
          </div>
        ))}
      </div>

     <section className="industries-cta">
  <div className="cta-container">
    <h2 className="cta-heading">Ready to Transform Your Industry?</h2>

    <p className="cta-subtext">
      Join leading enterprises leveraging our AI-powered solutions to drive
      innovation, efficiency, and growth.
    </p>

    <div className="cta-stats">
      <div className="stat-item">
        <h3>500+</h3>
        <p>Projects Delivered</p>
      </div>

      <div className="stat-item">
        <h3>98%</h3>
        <p>Client Satisfaction</p>
      </div>

      <div className="stat-item">
        <h3>24/7</h3>
        <p>Support Available</p>
      </div>
    </div>

    <button className="cta-button">
      Explore All Industries
    </button>
  </div>
</section>
    </section>
  );
}

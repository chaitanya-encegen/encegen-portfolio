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
    },
    {
      icon: <FiHeart />,
      title: "HealthTech",
      desc: "Digital health platforms, telemedicine, AI diagnostics, and patient management systems for healthcare innovation.",
      stat: "2M+",
      statText: "Patient Records Managed",
    },
    {
      icon: <FiHome />,
      title: "Real Estate",
      desc: "Smart property management, virtual tours, CRM systems, and AI-driven market analytics for real estate professionals.",
      stat: "50K+",
      statText: "Properties Listed",
    },
    {
      icon: <FiBookOpen />,
      title: "Education",
      desc: "E-learning platforms, LMS solutions, AI tutoring, and digital transformation for educational institutions.",
      stat: "100K+",
      statText: "Students Empowered",
    },
    {
      icon: <FiLayers />,
      title: "Manufacturing",
      desc: "IoT integration, predictive maintenance, supply chain optimization, and smart factory solutions.",
      stat: "40%",
      statText: "Efficiency Increase",
    },
    {
      icon: <FiShoppingBag />,
      title: "Retail & E-Commerce",
      desc: "AI-powered recommendations, inventory management, omnichannel platforms, and customer analytics.",
      stat: "3x",
      statText: "Sales Growth",
    },
  ];

  return (
    <section className="industries-section">
      <h2 className="industries-title">
        Industries We <span className="highlight-text">Empower</span>
      </h2>

      <div className="industries-grid">
        {industries.map((item, index) => (
          <div className="industry-card" key={index}>
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
    </section>
  );
}

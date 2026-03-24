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
<<<<<<< HEAD
 const industries = [
  {
    icon: <FiDollarSign />,
    title: "FinTech",
    desc: "AI-powered financial solutions, payment gateways, fraud detection, and blockchain integration for modern banking.",
    stat: "99.9%",
    statText: "Transaction Accuracy",
    bg: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: <FiHeart />,
    title: "HealthTech",
    desc: "Digital health platforms, telemedicine applications, AI diagnostics, and patient management systems for healthcare innovation.",
    stat: "2M+",
    statText: "Patient Records Managed",
    bg: "https://images.unsplash.com/photo-1588776814546-ec7e4b6c4a0e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: <FiHome />,
    title: "Real Estate",
    desc: "Smart property management, virtual tours, CRM systems, and AI-driven market analytics for real estate professionals.",
    stat: "50K+",
    statText: "Properties Listed",
    bg: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: <FiBookOpen />,
    title: "Education",
    desc: "E-learning platforms, LMS solutions, AI tutoring, and digital transformation for educational institutions.",
    stat: "100K+",
    statText: "Students Empowered",
    bg: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: <FiLayers />,
    title: "Manufacturing",
    desc: "IoT integration, predictive maintenance, supply chain optimization, and smart factory solutions.",
    stat: "40%",
    statText: "Efficiency Increase",
    bg: "https://images.unsplash.com/photo-1581090700227-1e8e7d2b5a1e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: <FiShoppingBag />,
    title: "Retail & E-Commerce",
    desc: "AI-powered recommendations, inventory management, omnichannel platforms, and customer analytics.",
    stat: "3x",
    statText: "Sales Growth",
    bg: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop"
  }
];

  return (
    <section className="industries-section" id="industries">
      <h2 className="industries-title">
        Industries We <span className="highlight-text">Transform</span>
      </h2>

      <p className="industries-subtitle">
        Delivering cutting-edge AI solutions across diverse sectors with proven results and measurable impact.
      </p>

      <div className="industries-grid">
        {industries.map((item, index) => (
          <div className="industry-card" key={index} style={{backgroundImage: `url(${item.bg})`}}>
=======
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
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
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
<<<<<<< HEAD

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
=======
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
    </section>
  );
}

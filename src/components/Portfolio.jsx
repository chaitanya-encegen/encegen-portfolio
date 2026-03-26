import React, { useState, useMemo } from "react";
import "./Portfolio.css";

const categories = [
  "All Projects",
  "AI Solutions",
  "Software Development",
  "Web Development",
  "Mobile Apps",
  "IoT Solutions",
];

const projects = [
  {
    year: "2024",
    client: "RetailTech Solutions",
    title: "AI-Powered E-Commerce Platform",
    desc: "Advanced e-commerce solution with AI-driven product recommendations and analytics.",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    features: [
      "Machine Learning Recommendations",
      "Dynamic Pricing",
      "Real-time Analytics",
      "Customer Segementation",
    ],
    category: "AI Solutions",
  },
  {
    year: "2024",
    client: "MediCare Group",
    title: "Smart Healthcare Management System",
    desc: "Comprehensive healthcare platform with patient management, telemedicine, and AI-assisted diagnosis features.",
    tags: ["Vue.js", "Node.js", "MongoDB", "Docker"],
    features: [
      "Patient Portal",
      "Medical Records",
      "Telemedicine",
      "Appointment Sc",
    ],
    category: "Software Development",
  },
  {
    year: "2023",
    client: "Digital Bank Pro",
    title: "FinTech Mobile Banking App",
    desc: "Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Blockchain"],
    features: [
      "Biometric Authentication",
      "Real-Time Transactions",
      "Budget Analysis",
      "Investment Tracking",
    ],
    category: "Mobile Apps",
  },
  {
    year: "2023",
    client: "PropertyHub Inc",
    title: "Real Estate Property Portal",
    desc: "Modern listing platform with virtual tours and AI valuation.",
    tags: ["Next.js", "Django", "PostgreSQL", "AWS S3"],
    features: [
      "Virtual Tours",
      "Property Valuation",
      "Mortgage Calculator",
      "Advanced Search",
    ],
    category: "Web Development",
  },
  {
    year: "2023",
    client: "IndusTech Manufacturing",
    title: "Manufacturing IoT Dashboard",
    desc: "Industrial IoT solution  for manufacturing with real-time monitoring, predictive maintenance, and efficiency analytics.",
    tags: ["Angular", "Python", "InfluxDB", "Docker"],
    features: [
      "Real-Time Monitoring",
      "Predictive Maintenance",
      "Production Analytics",
      "Alert System",
    ],
    category: "IoT Solutions",
  },
  {
    year: "2024",
    client: "EduLearn Academy",
    title: "Educational Learning Platform",
    desc: "Interactive e-learning platform with AI-powered personalization learning paths and progress tracking.",
    tags: ["React", "Express.js", "MySQL", "Socket.io"],
    features: [
      "Personalized Learning",
      "Interactive Content",
      "Progress Tracking",
      "Virtual Classrooms",
    ],
    category: "Web Development",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (active === "All Projects") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="portfolio-page">
      <div className="portfolio-header">
        <h1>Our <span>Portfolio</span></h1>
       
      </div>
<div className="gradient-divider" />
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((p, i) => (
          <div className="portfolio-card" key={i}>
            
            <div className="card-top">
              <div className="year">{p.year}</div>
              <div className="client">{p.client}</div>

              <div className="overlay">
                <button className="hover-btn">View</button>
                <button className="hover-btn">Code</button>
              </div>
            </div>

            <div className="card-content">
              <h3>{p.title}</h3>
              <p className="desc">{p.desc}</p>

              {/* TECHNOLOGY TAGS ADDED HERE */}
              <div className="tech-tags">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">{tag}</span>
                ))}
              </div>

              <h4 className="features-title">Key Features:</h4>

              <div className="features-list">
                {p.features.map((f, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="blue-dot"></span>
                    {f}
                  </div>
                ))}
              </div>

              <button className="learn-more">Learn More →</button>
            </div>
          </div>
        ))}
      </div>
      <div className="success-metrics-wrapper">
  <div className="success-metrics">
    <h2>Project Success Metrics</h2>
    <p className="metrics-subtitle">Our track record speaks for itself</p>

    <div className="metrics-grid">
      <div className="metric-item">
        <h3>100+</h3>
        <h4>Projects Completed</h4>
        <span>Successful deliveries across industries</span>
      </div>

      <div className="metric-item">
        <h3>98%</h3>
        <h4>Client Satisfaction</h4>
        <span>Consistently high client ratings</span>
      </div>

      <div className="metric-item">
        <h3>50+</h3>
        <h4>Active Clients</h4>
        <span>Long-term partnerships</span>
      </div>

      <div className="metric-item">
        <h3>24/7</h3>
        <h4>Support Available</h4>
        <span>Round-the-clock assistance</span>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}
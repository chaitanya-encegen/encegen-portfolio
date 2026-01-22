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
    desc: "Advanced e-commerce solution with AI-driven product recommendations, dynamic pricing, and customer behavior analytics.",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    category: "AI Solutions",
  },
  {
    year: "2024",
    client: "MedCare Group",
    title: "Smart Healthcare Management System",
    desc: "Comprehensive healthcare platform with patient management, telemedicine, and AI-assisted diagnosis features.",
    tags: ["Vue", "Node.js", "MongoDB", "Docker"],
    category: "Software Development",
  },
  {
    year: "2023",
    client: "Digital Bank Pro",
    title: "FinTech Mobile Banking App",
    desc: "Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    category: "Mobile Apps",
  },
  {
    year: "2023",
    client: "PropertyHub Inc",
    title: "Real Estate Property Portal",
    desc: "Modern property listing platform with virtual tours, AI-powered valuation, and mortgage calculators.",
    tags: ["Next.js", "Django", "PostgreSQL"],
    category: "Web Development",
  },
  {
    year: "2023",
    client: "IndusTech Manufacturing",
    title: "Manufacturing IoT Dashboard",
    desc: "Industrial IoT solution for manufacturing with real-time monitoring and predictive maintenance.",
    tags: ["Angular", "Python", "InfluxDB", "Docker"],
    category: "IoT Solutions",
  },
  {
    year: "2024",
    client: "EduLearn Academy",
    title: "Educational Learning Platform",
    desc: "Interactive e-learning platform with AI-powered personalization and progress tracking.",
    tags: ["React", "Express", "MySQL", "Socket.io"],
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
      {/* HEADER */}
      <div className="portfolio-header">
        <h1>
          Our <span>Portfolio</span>
        </h1>
        <p>
          Explore our diverse portfolio of successful projects showcasing our
          expertise in AI, software development, and digital innovation.
        </p>
      </div>

      {/* FILTERS */}
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

      {/* GRID */}
      <div className="portfolio-grid">
        {filteredProjects.map((p, i) => (
          <div className="portfolio-card" key={i}>
            <div className="card-top">
              <div className="year">{p.year}</div>
              <div className="client">{p.client}</div>
            </div>

            <h3>{p.title}</h3>
            <p className="desc">{p.desc}</p>

            <div className="tags">
              {p.tags.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>

            <button className="learn-more">Learn More →</button>
          </div>
        ))}
      </div>

      {/* METRICS */}
      <div className="portfolio-metrics">
        <div>
          <h2>100+</h2>
          <p>Projects Completed</p>
        </div>
        <div>
          <h2>98%</h2>
          <p>Client Satisfaction</p>
        </div>
        <div>
          <h2>50+</h2>
          <p>Active Clients</p>
        </div>
        <div>
          <h2>24/7</h2>
          <p>Support Available</p>
        </div>
      </div>

      <div className="portfolio-cta">
        <button>View All Projects</button>
      </div>
    </section>
  );
}

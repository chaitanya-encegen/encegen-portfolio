import React from "react";
import "./ServicesSection.css";
import { Link } from "react-router-dom";
import { 
  LuBrain, LuCode, LuGlobe, LuTrendingUp, 
  LuDatabase, LuShoppingCart, LuCpu, 
  LuMessageSquare, LuLightbulb, LuWrench, LuHeadphones 
} from "react-icons/lu";

export default function ServicesSection() {
  const services = [
    {
      title: "AI Research & Custom AI Solutions",
      desc: "Cutting-edge artificial intelligence research and development. We create custom AI models, machine learning algorithms, and intelligent automation systems tailored to your specific business needs.",
      points: ["Custom AI Model Development", "Machine Learning Solutions", "Natural Language Processing", "Computer Vision Systems"],
      icon: <LuBrain />,
      theme: "purple-blue"
    },
    {
      title: "Custom Software Development & Integration",
      desc: "End-to-end software development services with seamless integration capabilities. We build scalable, robust applications using modern technologies and best practices.",
      points: ["Web Application Development", "Mobile App Development", "API Development & Integration", "Legacy System Modernization"],
      icon: <LuCode />,
      theme: "pink-red"
    },
    {
      title: "Website & E-Commerce Development",
      desc: "Professional web development and e-commerce solutions that drive engagement and conversions. From corporate websites to complex e-commerce platforms.",
      points: ["Responsive Web Design", "E-Commerce Platforms", "CMS Development", "SEO Optimization"],
      icon: <LuGlobe />,
      theme: "cyan-blue"
    },
    {
      title: "Digital Marketing & Growth Solutions",
      desc: "Data-driven digital marketing strategies and growth hacking techniques to accelerate your business growth and maximize ROI across all digital channels.",
      points: ["Digital Strategy Consulting", "SEO & SEM Campaigns", "Social Media Marketing", "Analytics & Performance Tracking"],
      icon: <LuTrendingUp />,
      theme: "orange-red"
    }
  ];

  const expertises = [
    { title: "AI Consulting", desc: "Strategic AI implementation guidance", icon: <LuCpu /> },
    { title: "Data Analytics", desc: "Business intelligence solutions", icon: <LuDatabase /> },
    { title: "E-Commerce", desc: "Online marketplace development", icon: <LuShoppingCart /> },
    { title: "Growth Hacking", desc: "Rapid business scaling strategies", icon: <LuTrendingUp /> }
  ];

  return (
    <section className="services-container">
      <div className="section-header-centered">
        <h2>Our <span>Services</span></h2>
        <p>We offer comprehensive technology solutions designed to transform your business and drive innovation across all aspects of your digital journey.</p>
      </div>
<div className="gradient-divider" />
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="card-top-content">
              <div className={`icon-box ${s.theme}`}>{s.icon}</div>
              <h3 className="card-title">{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="points-grid">
                {s.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </div>
            <button className="learn-more-btn">Learn More <span>→</span></button>
          </div>
        ))}
      </div>

      <div className="expertise-section">
        <h3 className="expertise-main-title">Additional Expertise</h3>
        <p className="expertise-subtitle">We also provide specialized consulting and support services</p>
        <div className="expertise-grid">
          {expertises.map((e, i) => (
            <div className="expertise-item" key={i}>
              <div className="exp-icon-box">{e.icon}</div>
              <h4>{e.title}</h4>
              <span>{e.desc}</span>
            </div>
          ))}
        </div>
        <div className="center-btn">
            <Link to="/services" className="view-all-btn"> View All Services →</Link>
             
        </div>
      </div>

      <div className="section-header-centered" style={{marginTop: '100px'}}>
          <h2>Our <span>Approach</span></h2>
          <p>We follow a proven 4-step methodology that ensures successful project delivery and long-term client satisfaction.</p>
      </div>
      
      <div className="approach-grid">
          <ApproachCard num="01" title="Consult" icon={<LuMessageSquare />} desc="We begin by understanding your business needs, challenges, and objectives." points={["Requirement Analysis", "Stakeholder Interviews"]} />
          <ApproachCard num="02" title="Innovate" icon={<LuLightbulb />} desc="Our team designs innovative solutions tailored to your specific requirements." points={["Solution Architecture", "Prototype Development"]} />
          <ApproachCard num="03" title="Build" icon={<LuWrench />} desc="We develop and implement robust, scalable solutions using agile methodologies." points={["Agile Development", "Performance Testing"]} />
          <ApproachCard num="04" title="Support" icon={<LuHeadphones />} desc="Ongoing support and optimization to ensure your solutions continue to deliver value." points={["24/7 Monitoring", "Regular Updates"]} />
      </div>

      <div className="why-works-section">
          <h3>Why Our Approach Works</h3>
          <p>Our methodology is designed to minimize risks, maximize value, and ensure sustainable success</p>
         
          <div className="benefits-row">
              <div className="benefit-item"><span className="dot">•</span> <div><h4>Reduced Risk</h4><p>Thorough planning and validation</p></div></div>
              <div className="benefit-item"><span className="dot">•</span> <div><h4>Faster Delivery</h4><p>Agile methodologies for efficiency</p></div></div>
              <div className="benefit-item"><span className="dot">•</span> <div><h4>Quality Assurance</h4><p>Rigorous testing and control</p></div></div>
              <div className="benefit-item"><span className="dot">•</span> <div><h4>Long-term Success</h4><p>Ongoing support and improvement</p></div></div>
          </div>
      </div>
    </section>
  );
}

function ApproachCard({ num, title, icon, desc, points }) {
    return (
        <div className="approach-card">
            <div className="step-num">{num}</div>
            <div className="approach-icon">{icon}</div>
            <h4 className="approach-title">{title}</h4>
            <p className="approach-desc">{desc}</p>
            {/* Cards chya madhe jo dot distoy to hya div mule yeil */}
            <div className="approach-dot"></div>
            <ul className="approach-points">
                {points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
        </div>
    );
}
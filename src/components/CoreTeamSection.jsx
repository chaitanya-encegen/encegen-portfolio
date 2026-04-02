import React, { useState } from "react";
import "./CoreTeamSection.css";
import { FaEnvelope, FaLinkedinIn, FaUser } from "react-icons/fa";
import { FaAward, FaUsers, FaStar, FaCalendarAlt } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import hrImg from "../assets/hr.jpg";
import devImg from "../assets/dev.jpg";
import designerImg from "../assets/designer.jpg";
import qa1Img from "../assets/qa1.png";
import qa2Img from "../assets/qa2.png";
import aiml1Img from "../assets/aiml1.png";
import aimlImg from "../assets/aiml.png";
import dev1Img from "../assets/dev1.png";

export default function CoreTeamSection() {
  const [activeIndex, setActiveIndex] = useState(null);

 const team = [
 
  {
    name: "Chaitanya Pimpare",
    role: "Frontend Developer",
    image: devImg,
    desc: "Chaitanya Pimpare is a talented Web Developer specializing in frontend technologies with a passion for creating responsive, user-centric websites and applications. His expertise includes React, JavaScript, and Tailwind CSS.With a focus on clean, maintainable code and seamless UX, he contributes significantly to building feature-rich digital products.Chaitanya is committed to staying updated with the latest web development trends and best practices to deliver modern and efficient solutions.",
  },
  {
    name: "Kartik Ghodake",
    role: "UI/UX Designer",
    image: designerImg,
    desc: "Kartik Ghodake is a passionate and professional UI Designer dedicated to creating clean, modern, and user-friendly digital experiences. With a strong focus on visual aesthetics and usability, he designs interfaces that not only look attractive but also provide seamless interaction for users. His approach combines creativity with strategy, ensuring every design solves real user problems while maintaining a strong brand identity.Kartik believes that great design is not just about visuals, but about delivering meaningful and engaging experiences.",
  },
   {
    name: "Nayana Ahirrao",
    role: "Quality Assurance",
    image: qa2Img,
    desc: "Nayana Ahirrao serves as a Quality Assurance specialist at Encegen AI Labs, contributing to the delivery of robust and dependable technology solutions. With experience in testing AI voice agents, websites, customized software, and chatbot platforms, she ensures that every product performs seamlessly across real-world scenarios. She is known for her analytical approach and strong attention to detail, enabling her to detect inconsistencies, enhance system stability, and improve overall product quality.",
  },
  {
    name: "Rutuja Jadhav",
    role: "Quality Assurance",
    image: qa1Img,
    desc: "Rutuja Jadhav is a Quality Assurance professional at Encegen AI Labs, specializing in ensuring the reliability and performance of advanced digital solutions. With hands-on experience in testing AI voice agents, websites, customized software, and chatbot systems, she plays a key role in delivering seamless and high-quality user experiences. Her expertise lies in identifying critical issues, validating system functionality, and maintaining performance standards across diverse projects. Rutuja follows a structured and detail-oriented testing approach, ensuring that every solution meets both technical requirements and user expectations.",
  },
 
  {
    name: "Poonam Harinkhede",
    role: "AI / ML Developer",
    image: aiml1Img,
    desc: "Poonam Harinkhede is an innovative AI/ML Developer with expertise in machine learning algorithms, data modeling, and AI workflow automation.She specializes in developing intelligent systems that enhance decision-making and operational efficiency.Poonam holds a strong research background and is dedicated to applying AI technologies to solve complex business challenges.",
  },
  {
    name: "Shruti Jadhav",
    role: "Full stack Developer",
    image: dev1Img,
    desc: "Shruti Jadhav is a talented Web Developer specializing in frontend technologies with a passion for creating responsive, user-centric websites and applications. His expertise includes React, JavaScript, and Tailwind CSS.With a focus on clean, maintainable code and seamless UX, he contributes significantly to building feature-rich digital products.Shruti Jadhav is committed to staying updated with the latest web development trends and best practices to deliver modern and efficient solutions.",
  },

   {
    name: "Swamini Hirolikar",
    role: "HR Executive",
    image: hrImg,
    desc: "The HR Executive at Encegen AI Labs plays a pivotal role in building and strengthening a high-performance team across diverse domains. With a keen eye for talent and deep understanding of recruitment, she ensures seamless hiring and onboarding while maintaining strong emphasis on culture and growth.",
  },
    {
    name: "Vishit Jiwane",
    role: "AI/ML Developer",
    image: aimlImg,
    desc: "Vishit Jiwane is an innovative AI/ML Developer with expertise in machine learning algorithms, data modeling, and AI workflow automation.She specializes in developing intelligent systems that enhance decision-making and operational efficiency.Vishit holds a strong research background and is dedicated to applying AI technologies to solve complex business challenges.",
  },
];
  return (
    <section className="core-team-section">
      <h3 className="core-title">About Team</h3>

    <div className="slider-container">
  <div className="slider">

    {team.map((member, index) => {
      const position =
        index === activeIndex
          ? "active"
          : index === (activeIndex - 1 + team.length) % team.length
          ? "left"
          : index === (activeIndex + 1) % team.length
          ? "right"
          : "hidden";

      return (
       <div
  className={`core-card ${position}`}
  key={index}
  onClick={() => setActiveIndex(index)}
>
  <div className="card-inner">

    {/* LEFT IMAGE */}
    <div className="card-image">
      <img src={member.image} alt={member.name} />
    </div>

    {/* RIGHT CONTENT */}
    <div className="card-content">
      <h4>{member.name}</h4>
      <span className="role">({member.role})</span>

      <p>{member.desc}</p>
    </div>

  </div>
</div>
      );
    })}

  </div>

  {/* DOTS */}
  <div className="dots">
    {team.map((_, i) => (
      <span
        key={i}
        className={i === activeIndex ? "active-dot" : ""}
        onClick={() => setActiveIndex(i)}
      />
    ))}
  </div>
</div>

      {/* Team Excellence */}
 {/* Team Excellence */}
<div className="excellence-box">
  <h3>Team Excellence</h3>
  <p>Our team's collective expertise and achievements</p>

  <div className="excellence-grid">
    
    <div className="excellence-item">
      <div className="ex-icon"><FaAward /></div>
      <h4>15+</h4>
      <span>Certifications</span>
    </div>

    <div className="excellence-item">
      <div className="ex-icon"><FaUsers /></div>
      <h4>20+</h4>
      <span>Team Members</span>
    </div>

    <div className="excellence-item">
      <div className="ex-icon"><FaStar /></div>
      <h4>50+</h4>
      <span>Projects Completed</span>
    </div>

    <div className="excellence-item">
      <div className="ex-icon"><FaCalendarAlt /></div>
      <h4>5+</h4>
      <span>Years Experience</span>
    </div>

  </div>
</div>
        
    </section>
  );
}
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

/* ================= STAT COMPONENT ================= */
function Stat({ value, label, delay = 0 }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    const obj = { val: 0 };

    gsap.to(obj, {
      val: value,
      duration: 1.8,
      delay,
      ease: "power3.out",
      onUpdate: () => {
        el.innerText = Math.floor(obj.val) + "+";
      },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  }, [value, delay]);

  return (
    <div className="stat-block">
      <div ref={ref} className="stat-number">0+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ================= HERO ================= */
export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(heroRef);

    gsap.fromTo(
      q(".hero-content"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="hero-section" id="home">
 <div
        className="hero-bg-image"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line">
            Engineering{" "}
            <span className="highlight-box">Intelligence</span>
          </span>

          <span className="line">
            Empowering the{" "}
            <span className="highlight-text">Future</span>
          </span>
        </h1>


        <p className="hero-subtitle">
          We deliver AI-powered digital innovation, intelligent automation,
          and enterprise-grade technology solutions that transform businesses
          and accelerate growth.
        </p>

        <div className="hero-buttons">
          <Link to="/services" className="btn-gradient">
            Explore Services <FaArrowRight />
          </Link>

          <Link to="/contact" className="btn-outline">
            <FiZap className="zap-icon" />
            Contact Us
          </Link>
        </div>


        <div className="hero-stats">
          <Stat value={50} label="Projects Delivered" />
          <Stat value={25} label="Happy Clients" />
          <Stat value={5} label="Years Experience" />
        </div>
      </div>

    </section>
  );
}

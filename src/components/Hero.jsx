import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import ThreeBackground from "./ThreeBackground"; // ✅ Import your R3F background
import bg from "../assets/bg.jpg";
import "./Hero.css";
import {
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

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
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  }, [value, delay]);

  return (
    <div className="stat-block">
      <div ref={ref} className="stat-number">0+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(heroRef);
    gsap.fromTo(q(".hero-content"), { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: heroRef.current, start: "top 90%" },
    });
  }, []);

  const particlesInit = async (main) => await loadSlim(main);

  return (
    <section ref={heroRef} className="hero-section">
      {/* ✅ Background image */}
      <div
        className="hero-bg-image"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* ✅ Three.js background (3D particles) */}
      <div className="hero-3d-bg">
        <ThreeBackground />
      </div>

      {/* ✅ Optional subtle 2D particle overlay */}
      <Particles
        // id="tsparticles"
        // init={particlesInit}
        // className="hero-particles"
        // options={{
        //   background: { color: "transparent" },
        //   fpsLimit: 60,
        //   particles: {
        //     color: { value: "#b366ff" },
        //     links: { enable: true, color: "#b366ff", distance: 120, opacity: 0.3 },
        //     move: { enable: true, speed: 0.6 },
        //     size: { value: 2 },
        //     number: { value: 50 },
        //   },
        // }}
      />

      {/* ✅ Foreground Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <div className="headline-line">
            Engineering <span className="highlight-text pulse-text">Intelligence</span>
          </div>
          <div className="headline-line">
            Empowering the <span className="highlight-text">Future</span>
          </div>
        </h1>

        <p className="hero-subtitle">
          We build AI solutions, digital platforms, and future-ready products
          for enterprises. Transform your business with cutting-edge technology
          and innovation.
        </p>

        <div className="hero-buttons">
          <button className="btn-gradient">Explore Services <FaArrowRight/></button>
          <button className="btn-outline"> Contact Us</button>
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

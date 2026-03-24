import React from "react";
import { getLocoScroll } from "../animations/locomotive";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {

  const scrollToTop = () => {
    const loco = getLocoScroll();

    if (loco) {
      loco.scrollTo(0, {
        duration: 800,
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ===== Column 1 ===== */}
        <div className="footer-column">
          <h2 className="footer-logo">Encegen AI Labs</h2>
          <p className="footer-desc">
            Engineering Intelligence. Empowering the Future. We specialize in
            AI-driven solutions, digital transformation, and innovative
            technology services.
          </p>

          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt className="footer-icon" />
              BA Hub, Office no. 3, Baif Road, Wagholi, Pune – 412207
            </p>
            <p>
              <FaPhoneAlt className="footer-icon" /> +91 7769888952
            </p>
            <p>
              <FaEnvelope className="footer-icon" /> info@encegen.com
            </p>
          </div>

          <div className="footer-socials">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* ===== Column 2 ===== */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* ===== Column 3 ===== */}
        <div className="footer-column">
          <h3 className="footer-title">Our Services</h3>
          <ul>
            <li>AI Research & Development</li>
            <li>Custom Software Solutions</li>
            <li>Web Development</li>
            <li>E-Commerce Platforms</li>
            <li>Digital Marketing</li>
            <li>Consulting Services</li>
          </ul>
        </div>

        {/* ===== Column 4 ===== */}
        <div className="footer-column">
          <h3 className="footer-title">Stay Updated</h3>
          <p className="footer-subtext">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <input type="email" placeholder="Enter your email" />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>

          <h4 className="industries-title">Industries</h4>
          <div className="industries-tags">
            <span>FinTech</span>
            <span>Healthcare</span>
            <span>Real Estate</span>
            <span>Education</span>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="footer-bottom">
        <p>
          © 2024 Encegen AI Labs Pvt. Ltd. All rights reserved. Made with{" "}
          <FaHeart className="heart" /> in India
        </p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>

        <button onClick={scrollToTop} className="back-to-top">
          <FaArrowUp /> Back to Top
        </button>
      </div>
    </footer>
  );
}

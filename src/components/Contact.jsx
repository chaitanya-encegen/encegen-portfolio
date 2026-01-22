import React from "react";
import "./Contact.css";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="contact-page">
      {/* HERO */}
      <div className="contact-hero">
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          Ready to transform your business with AI-powered solutions? We’d love
          to hear from you. Let’s discuss how we can help you achieve your goals.
        </p>
      </div>

      {/* CONTENT */}
      <div className="contact-content">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="info-item">
            <FiMapPin />
            <div>
              <h4>Our Office</h4>
              <p>
                Hub Office No. 3,
                <br />
                Baner Road, Wakad
                <br />
                Pune – 412207, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="info-item">
            <FiPhone />
            <div>
              <h4>Phone</h4>
              <p>+91 7769888952</p>
            </div>
          </div>

          <div className="info-item">
            <FiMail />
            <div>
              <h4>Email</h4>
              <p>info@encegen.com</p>
              <p>contact@encegen.com</p>
            </div>
          </div>

          <div className="info-item">
            <FiClock />
            <div>
              <h4>Business Hours</h4>
              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="quick-response">
            <h4>Quick Response Guarantee</h4>
            <p>
              We respond to all inquiries within 24 hours.  
              For urgent matters, please call us directly at  
              <strong> +91 7769888952</strong>.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <p>Fill out the form below and we’ll get back to you soon.</p>

          <form>
            <div className="form-row">
              <div>
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div>
                <label>Email Address *</label>
                <input type="email" placeholder="your.email@company.com" />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Company Name</label>
                <input type="text" placeholder="Your company name" />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="text" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="form-row single">
              <label>Service of Interest</label>
              <select>
                <option>Select a service</option>
                <option>AI Solutions</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>IoT Solutions</option>
                <option>Consulting</option>
              </select>
            </div>

            <div className="form-row single">
              <label>Message *</label>
              <textarea placeholder="Tell us about your project, requirements, or questions..." />
            </div>

            <button type="submit" className="send-btn">
              ✈ Send Message
            </button>

            <p className="privacy">
              By submitting this form, you agree to our privacy policy.  
              We’ll only use your information to respond to your inquiry.
            </p>
          </form>
        </div>
      </div>

      {/* MAP */}
      <div className="contact-map">
        <h3>Visit Our Office</h3>
        <p>Located in the heart of Pune’s tech hub, Wakad</p>

        <iframe
          title="office-map"
          src="https://www.google.com/maps?q=Wakad%20Pune&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
import React, { useState } from "react";
import "./Contact.css";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

import toast from "react-hot-toast";
import { MdSend } from "react-icons/md";
import { BsSend } from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name: only letters and spaces
    if (name === "name") {
      const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({ ...formData, [name]: onlyLetters });
      return;
    }

    // Phone: only numbers + max 10 digits
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: onlyNumbers });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill all required fields!");
      return;
    }

    if (phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits!");
      return;
    }

    toast.success("Message sent successfully! 🚀");

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      {/* HERO */}
      <div className="contact-hero">
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          Ready to transform your business with AI-powered solutions?
          Let’s build something powerful together.
        </p>
        <div className="gradient-divider" />
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
              Encegen AI Labs Pvt. Ltd.
              <br />
              BA Hub, Office No. 3,
              <br />
              Baif Road, Wagholi,
              <br />
              Pune – 412207,
              Maharashtra, India
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
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Sat: 9:00 AM – 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <p>We’ll respond within 24 hours.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label>Phone Number *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10 digit number"
                />
              </div>
            </div>

            <div className="form-row single">
              <label>Service of Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option>AI Solutions</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>IoT Solutions</option>
                <option>Consulting</option>
              </select>
            </div>

            <div className="form-row single">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
              />
            </div>

    <button type="submit" className="send-btn">
  <BsSend style={{ marginRight: "6px" }} />
  Send Message
</button>
          </form>
        </div>
      </div>

      {/* MAP */}
      <div className="contact-map">
        <h3>Visit Our Office</h3>
        <p>Located in Wagholi, Pune</p>

       <iframe
        title="office-map"
        src="https://www.google.com/maps?q=BA%20Hub,%20Office%20no.%203,%20Baif%20Road,%20Wagholi,%20Pune%20412207&output=embed"
        loading="lazy"
      ></iframe>

      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    enquiryType: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.enquiryType ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Form Data:", formData);

    alert("Submitted successfully!");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      enquiryType: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="modal-contact-wrapper">
      <h2>Get in Touch</h2>

      <form onSubmit={handleSubmit} className="modal-contact-form">
        
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number *"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <select
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          required
        >
          <option value="">Select Enquiry Type *</option>
          <option value="general">General</option>
          <option value="service">Service</option>
          <option value="support">Support</option>
        </select>

        <input
          type="text"
          name="subject"
          placeholder="Subject *"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Message *"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
import React from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import ContactForm from "./Contactform";
import "./ContactModal.css";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        {/* CLOSE BUTTON */}
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        {/* TITLE */}
        <h2 className="modal-title">Contact Us</h2>
        <p className="modal-subtitle">
          Schedule a live walkthrough with our team.
        </p>

        {/* FORM */}
        <ContactForm />

      </div>
    </div>,
    document.body
  );
}
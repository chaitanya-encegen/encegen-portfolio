import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

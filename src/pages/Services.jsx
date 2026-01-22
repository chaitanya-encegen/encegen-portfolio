import React from "react";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceSection from "../components/ServicesSection";

export default function Services() {

  return (
   
    <div className="relative min-h-screen overflow-hidden">
  


      {/* Navbar */}
      <Navbar />
      <ServiceSection />
      <Footer />
      </div>

  );
}

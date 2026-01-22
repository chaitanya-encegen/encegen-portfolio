import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import Industries from "../components/Industries";
import Footer from "../components/Footer";
import ThreeBackground from "../components/ThreeBackground";

import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* 3D / Animated Background */}
      <ThreeBackground />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <AboutSection />

      {/* SERVICES */}
      <ServiceSection />

      {/* INDUSTRIES */}
      <Industries />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

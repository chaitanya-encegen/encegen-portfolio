import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import Industries from "../components/Industries";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Footer from "../components/Footer";
import ThreeBackground from "../components/ThreeBackground";
import bg from "../assets/bg.jpg";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Global Background */}
      

      {/* Global 3D Background */}
      <ThreeBackground />

      {/* Sections */}
      <Hero />
      <AboutSection showNavbar={true} previewOnly={true} /> {/* Full content with navbar */}
      <ServiceSection />
      <Industries />
      <Portfolio />
        <Contact />
      <Footer />

    </div>
  );
}

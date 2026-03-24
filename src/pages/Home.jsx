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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Global Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Global 3D Background */}
      <ThreeBackground />

      {/* Sections */}
      <Hero />
      <AboutSection showNavbar={false} previewOnly={true} /> {/* Short preview */}
      <ServiceSection />
      <Industries />
      <Portfolio />
      <Team />
      <Footer />
    </div>
  );
}

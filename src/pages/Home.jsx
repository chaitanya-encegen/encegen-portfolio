import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import Industries from "../components/Industries";
<<<<<<< HEAD
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Footer from "../components/Footer";
import ThreeBackground from "../components/ThreeBackground";
=======
import Footer from "../components/Footer";
import ThreeBackground from "../components/ThreeBackground";

>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
<<<<<<< HEAD
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
=======
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
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
      <Footer />
    </div>
  );
}

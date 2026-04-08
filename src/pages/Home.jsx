import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import Industries from "../components/Industries";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Footer from "../components/Footer";
import ThreeBackground from "../components/ThreeBackground";
import Contact from "../components/Contact";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current);
  }, []);

  return (
    <div className="relative min-h-screen">

      {/* ✅ ONLY SHOW PARTICLES IN DARK MODE */}
      {theme !== "light" && <ThreeBackground />}

      <Hero />
      <AboutSection previewOnly={true} />
      <ServiceSection />
      <Industries />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
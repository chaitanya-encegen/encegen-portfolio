
import React from "react";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import CoreTeamSection from "../components/CoreTeamSection";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import CoreTeamSection from "../components/CoreTeamSection";


export default function About() {
  return (
    <div className="min-h-screen">

      <AboutSection showNavbar={true} previewOnly={false} /> {/* Full content with navbar */}
      <TeamSection />   {/* Visible as user scrolls */}
      <CoreTeamSection /> {/* Visible as user scrolls */}

      <Navbar />
      <AboutSection />
      <TeamSection />
      <CoreTeamSection />

      <Footer />
    </div>
  );
}

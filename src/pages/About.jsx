<<<<<<< HEAD
import React from "react";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import CoreTeamSection from "../components/CoreTeamSection";
import Footer from "../components/Footer";
=======
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import CoreTeamSection from "../components/CoreTeamSection";
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c

export default function About() {
  return (
    <div className="min-h-screen">
<<<<<<< HEAD
      <AboutSection showNavbar={true} previewOnly={false} /> {/* Full content with navbar */}
      <TeamSection />   {/* Visible as user scrolls */}
      <CoreTeamSection /> {/* Visible as user scrolls */}
=======
      <Navbar />
      <AboutSection />
      <TeamSection />
      <CoreTeamSection />
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
      <Footer />
    </div>
  );
}

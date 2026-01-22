import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import CoreTeamSection from "../components/CoreTeamSection";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutSection />
      <TeamSection />
      <CoreTeamSection />
      <Footer />
    </div>
  );
}

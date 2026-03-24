import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";

export default function TeamPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
}

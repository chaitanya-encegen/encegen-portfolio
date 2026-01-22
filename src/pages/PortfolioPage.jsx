import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio"; // portfolio section component

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Footer */}
      <Footer />
    </div>
  );
}

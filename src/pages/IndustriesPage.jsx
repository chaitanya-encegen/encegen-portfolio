import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Industries from "../components/Industries"; // new industries component

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Industries Section */}
      <Industries />

      {/* Footer */}
      <Footer />
    </div>
  );
}

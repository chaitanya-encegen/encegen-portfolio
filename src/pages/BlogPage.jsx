import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
}

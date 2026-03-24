import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import IndustriesPage from "./pages/IndustriesPage";
import PortfolioPage from "./pages/PortfolioPage";
import TeamPage from "./pages/TeamPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import { initLocomotive } from "./animations/locomotive";
import { initScrollAnimations } from "./animations/scrollAnimations";
import "./styles/animations.css";
import "./styles/globals.css";
<<<<<<< HEAD
import ScrollToTop from "./components/ScrollToTop";
import {Toaster} from "react-hot-toast";
=======

>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
export default function App() {
useEffect(() => {
  const loco = initLocomotive();
  if (loco) window.locoScroll = loco; // ✅ expose for BackToTop
  initScrollAnimations();
  return () => loco && loco.destroy();
}, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <Router>
<<<<<<< HEAD
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollToTop />
=======
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
      <Navbar />
          <div data-scroll-container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </div>
    </Router>
  );
}

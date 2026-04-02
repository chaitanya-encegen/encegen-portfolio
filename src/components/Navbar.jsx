import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaDesktop, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";
import ContactModal from "./ContactModal";


export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // ✅ NEW
const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  /* ================= THEME ================= */
  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === "system" && prefersDark);

    root.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setDropdownOpen(false);
  };

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location.pathname]);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Industries",
    "Portfolio",
    // "Team",
    // "Blog",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
       <Link to="/" className="logo-link">
  <img 
    src="/logo.png" 
    alt="Encegen AI Labs Logo" 
    className="logo-img"
  />
</Link>
        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const path = item === "Home" ? "/" : `/${sectionId}`;

            const isHomePage = location.pathname === "/";
            let isActive = isHomePage
              ? active === sectionId
              : location.pathname === path;

            return (
              <li key={item}>
                <Link
                  to={path}
                  className={`nav-item ${isActive ? "active" : ""}`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT SIDE */}
        <div className="nav-actions">

          {/* THEME */}
          <div className="theme-dropdown">
            <button
              className="theme-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {theme === "light" ? <FaSun /> :
               theme === "dark" ? <FaMoon /> : <FaDesktop />}
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <div onClick={() => handleThemeChange("light")}><FaSun /> Light</div>
                <div onClick={() => handleThemeChange("dark")}><FaMoon /> Dark</div>
                <div onClick={() => handleThemeChange("system")}><FaDesktop /> System</div>
              </div>
            )}
          </div>

          {/* BUTTON */}
         <motion.button
  whileHover={{ scale: 1.05 }}
  className="get-in-touch"
  onClick={() => setModalOpen(true)}
>
  Get in Touch
</motion.button>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
<ContactModal
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
/>
      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {navItems.map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

          return (
            <Link key={item} to={path} onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
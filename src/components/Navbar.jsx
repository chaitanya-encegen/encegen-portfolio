import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [dropdownOpen, setDropdownOpen] = useState(false);
<<<<<<< HEAD
  const [active, setActive] = useState("home");

  const location = useLocation();

  /* ================= THEME ================= */
=======
  const location = useLocation();

>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === "system" && prefersDark);

    root.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
<<<<<<< HEAD
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setDropdownOpen(false);
  };

  /* ================= SCROLL SPY (ONLY HOME) ================= */
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
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
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
    "Team",
    "Blog",
    "Contact",
  ];
=======
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme); // persist theme
  document.documentElement.setAttribute("data-theme", newTheme);
  setDropdownOpen(false);
};

  const navItems = ["Home", "About", "Services", "Industries", "Portfolio", "Team", "Blog", "Contact"];
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c

  return (
    <nav className="navbar">
      <div className="navbar-container">
<<<<<<< HEAD
        <Link to="/" className="logo-link">
          <h2 className="logo">
            Encegen <span>AI Labs</span>
          </h2>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const path = item === "Home" ? "/" : `/${sectionId}`;

            const isHomePage = location.pathname === "/";
            let isActive = false;

            if (isHomePage) {
              isActive = active === sectionId;
            } else {
              isActive = location.pathname === path;
            }

            return (
              <li key={item}>
                <Link
                  to={path}
                  className={`nav-item ${isActive ? "active" : ""}`}
                >
=======
        <h2 className="logo">
          Encegen <span>AI Labs</span>
        </h2>

        <ul className="nav-links">
          {navItems.map((item) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = location.pathname === path || (item === "active" && location.pathname === "/");
            return (
              <li key={item}>
                <Link to={path} className={`nav-item ${isActive ? "active" : ""}`}>
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <div className="theme-dropdown">
<<<<<<< HEAD
            <button
              className="theme-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {theme === "light" ? (
                <FaSun />
              ) : theme === "dark" ? (
                <FaMoon />
              ) : (
                <FaDesktop />
              )}
            </button>

=======
            <button className="theme-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {theme === "light" ? <FaSun /> : theme === "dark" ? <FaMoon /> : <FaDesktop />}
            </button>
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
            {dropdownOpen && (
              <div className="dropdown-menu">
                <div onClick={() => handleThemeChange("light")}>
                  <FaSun /> Light
                </div>
                <div onClick={() => handleThemeChange("dark")}>
                  <FaMoon /> Dark
                </div>
                <div onClick={() => handleThemeChange("system")}>
                  <FaDesktop /> System
                </div>
              </div>
            )}
          </div>

<<<<<<< HEAD
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="get-in-touch"
          >
=======
          <motion.button whileHover={{ scale: 1.05 }} className="get-in-touch">
>>>>>>> 4a6010d6e2d1edbbb7c3419289de3ed1f7d8a92c
            Get in Touch
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

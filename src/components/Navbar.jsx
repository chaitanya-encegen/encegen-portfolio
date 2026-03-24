import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("home");

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

  return (
    <nav className="navbar">
      <div className="navbar-container">
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
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <div className="theme-dropdown">
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="get-in-touch"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

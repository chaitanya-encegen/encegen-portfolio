import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === "system" && prefersDark);

    root.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme); // persist theme
  document.documentElement.setAttribute("data-theme", newTheme);
  setDropdownOpen(false);
};

  const navItems = ["Home", "About", "Services", "Industries", "Portfolio", "Team", "Blog", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
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
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <div className="theme-dropdown">
            <button className="theme-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {theme === "light" ? <FaSun /> : theme === "dark" ? <FaMoon /> : <FaDesktop />}
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

          <motion.button whileHover={{ scale: 1.05 }} className="get-in-touch">
            Get in Touch
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

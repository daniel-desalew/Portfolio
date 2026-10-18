import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={() => handleNavClick("#home")}>
          <img
            src="/logo.png"
            alt="Daniel Logo"
            className="navbar-logo-img"
          />
          <span className="gradient-text">Daniel</span>
          <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "1rem" }}>
            .dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href="https://github.com/daniel"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/daniel"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

          {/* Mobile menu toggle */}
          <button
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

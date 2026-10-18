// client/src/components/Hero.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import "./Hero.css";

const roles = [
  "Full-Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for Full-Time & Freelance Work
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Daniel</span>
            <br />
            <span className="hero-role">
              {text}
              <span className="cursor">|</span>
            </span>
          </h1>

          <p className="hero-description">
            I am a Full-Stack Developer specializing in the{" "}
            <strong>MERN stack</strong>. I help businesses and startups turn
            complex ideas into fast, scalable, and user-friendly web
            applications.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </Link>
            <a href="/resume.pdf" className="btn btn-secondary" download>
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/daniel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/daniel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:danieldesalew23@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="code-window">
            <div className="code-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="code-title">developer.js</span>
            </div>
            <pre className="code-body">
              {`const developer = {
  name: "Daniel",
  role: "Full-Stack Dev",
  skills: [
    "React", "Node.js",
    "MongoDB", "Express"
  ],
  passion: "Building 🚀",
  available: true
};`}
            </pre>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

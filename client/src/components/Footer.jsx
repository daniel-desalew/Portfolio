// client/src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
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
        <p className="footer-text">
          © {new Date().getFullYear()} Daniel — Built with{" "}
          <FiHeart className="heart" /> using React & Node.js
        </p>
      </div>
    </footer>
  );
}

// client/src/components/BackToTop.jsx
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./BackToTop.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Go to top"
        >
          <FiArrowUp />
        </button>
      )}
    </>
  );
}

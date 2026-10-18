// client/src/components/About.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMapPin, FiMail } from "react-icons/fi";
import axiosInstance from "../api/axios";
import "./about.css";

const fallbackAbout = {
  name: "Daniel",
  title: "Full-Stack Web Developer",
  location: "Injibara, Ethiopia",
  email: "danieldesalew23@gmail.com",
  photo: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  longBio:
    "I'm a passionate full-stack developer building fast, modern web applications using the MERN stack. I love turning complex problems into elegant, user-friendly solutions and have shipped 10+ projects across various industries.",
  stats: [
    { label: "Years Coding", value: "3+" },
    { label: "Projects Shipped", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Happy Clients", value: "5+" },
  ],
};

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/about")
      .then(({ data }) => {
        setAbout(data);
        setLoading(false);
      })
      .catch(() => {
        setAbout(fallbackAbout);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="about-loading">Loading profile...</div>;

  const data = about || fallbackAbout;

  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            About <span className="gradient-text">Me</span>
          </h2>
          <p>Get to know the developer behind the code.</p>
        </motion.div>

        <div className="about-container">
          {/* LEFT: Photo */}
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-glow" />
            <img
              src={data.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"}
              alt={data.name || "Profile"}
              className="about-image"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face";
              }}
            />
          </motion.div>

          {/* RIGHT: Text & Info */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="about-name">
              I'm <span className="gradient-text">{data.name}</span>
            </h2>
            <h3 className="about-title">{data.title}</h3>

            <p className="about-bio">{data.longBio || data.bio}</p>

            <div className="about-quick-facts">
              <div className="fact">
                <FiMapPin className="fact-icon" />
                <span>{data.location}</span>
              </div>
              <div className="fact">
                <FiMail className="fact-icon" />
                <span>{data.email}</span>
              </div>
            </div>

            <div className="about-actions">
              <a href={data.resumeUrl || "#"} className="btn btn-primary" download>
                <FiDownload /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* BOTTOM: Stats Grid */}
          <div className="about-stats">
            {(data.stats || []).map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <h4 className="stat-value">{stat.value}</h4>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

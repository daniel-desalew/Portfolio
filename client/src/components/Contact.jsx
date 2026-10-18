import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import toast from "react-hot-toast";
import api from "../api/axios";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await api.post("/messages", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon. 🚀");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p>Have a project in mind? I'd love to hear from you. Let's build something great.</p>
        </motion.div>

        <div className="contact-wrapper">
          {/* LEFT: Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-heading">
              Let's work <span className="gradient-text">together</span>
            </h3>
            <p className="contact-desc">
              I'm currently open to full-time roles and freelance opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is always open.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:danieldesalew23@gmail.com">danieldesalew23@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Injibara, Ethiopia</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:0954207319">+251 954 207 319</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/daniel"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/daniel"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Daniel Desalew"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="daniel@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

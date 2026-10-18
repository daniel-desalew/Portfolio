import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import api from "../api/axios";
import "./Projects.css";

const fallbackProjects = [
  {
    _id: "1",
    title: "Portfolio Website",
    description:
      "A full-stack personal portfolio with admin dashboard and dynamic project showcase.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    techStack: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    liveUrl: "https://daniel-portfolio.vercel.app",
    githubUrl: "https://github.com/daniel/portfolio",
  },
  {
    _id: "2",
    title: "ShopHub — E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, Stripe payments, and admin panel.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    techStack: ["React", "Express", "MongoDB", "Stripe", "Redux"],
    liveUrl: "https://shophub-daniel.vercel.app",
    githubUrl: "https://github.com/daniel/shophub",
  },
  {
    _id: "3",
    title: "TaskFlow — Productivity App",
    description:
      "A task management app with JWT auth, drag-and-drop boards, and real-time updates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT"],
    liveUrl: "https://taskflow-daniel.vercel.app",
    githubUrl: "https://github.com/daniel/taskflow",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => {
        setProjects(res.data.length > 0 ? res.data : fallbackProjects);
        setLoading(false);
      })
      .catch(() => {
        setProjects(fallbackProjects);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p>
            A selection of my recent work — from full-stack apps to polished frontend experiences.
          </p>
        </motion.div>

        {loading ? (
          <div className="projects-loading">
            {[1, 2, 3].map((n) => (
              <div key={n} className="skeleton-card" />
            ))}
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.div
                key={project._id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Image */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop";
                    }}
                  />
                  <div className="project-overlay">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {(project.techStack || []).map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/project/${project._id}`}
                    className="project-detail-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 16,
                      color: "var(--accent)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      transition: "gap 0.2s ease",
                    }}
                  >
                    View Details <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

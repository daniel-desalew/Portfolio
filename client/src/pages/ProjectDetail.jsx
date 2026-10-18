// client/src/pages/ProjectDetail.jsx
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
} from "react-icons/fi";
import axiosInstance from "../api/axios";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/projects/${id}`)
      .then(({ data }) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Project not found", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="detail-loading">Loading project details...</div>;
  if (!project) return <div className="detail-error">Project not found!</div>;

  return (
    <div className="project-detail-container">
      <Link to="/projects" className="back-btn">
        <FiArrowLeft /> Back to Projects
      </Link>

      <motion.div
        className="project-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="project-title">{project.title}</h1>

        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FiGithub /> Source Code
            </a>
          )}
        </div>
      </motion.div>

      <motion.img
        src={project.image}
        alt={project.title}
        className="project-hero-image"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      />

      <div className="project-content-grid">
        <div className="project-description">
          <h2>About This Project</h2>
          <p>{project.longDescription || project.description}</p>
        </div>

        <div className="project-sidebar">
          <div className="sidebar-card">
            <h3>Technologies Used</h3>
            <div className="tech-list">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">
                  <FiCheckCircle /> {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

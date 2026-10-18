// client/src/pages/AdminDashboard.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiTrash2, FiPlus, FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";
import axiosInstance from "../api/axios";
import "./Admin.css";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    liveUrl: "",
    githubUrl: "",
    techStack: "",
  });
  const navigate = useNavigate();

  // Check auth on load
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchProjects();
  }, [navigate]);

  const fetchProjects = async () => {
    try {
      const { data } = await axiosInstance.get("/projects");
      setProjects(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding project...");
    try {
      // Convert comma-separated string to array
      const techArray = formData.techStack.split(",").map((t) => t.trim());
      await axiosInstance.post("/projects", {
        ...formData,
        techStack: techArray,
      });
      toast.success("Project added!", { id: toastId });
      setFormData({
        title: "",
        description: "",
        image: "",
        liveUrl: "",
        githubUrl: "",
        techStack: "",
      });
      fetchProjects();
    } catch (err) {
      toast.error("Failed to add project", { id: toastId });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;
    try {
      await axiosInstance.delete(`/projects/${id}`);
      toast.success("Project deleted");
      fetchProjects();
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-secondary">
          <FiLogOut /> Logout
        </button>
      </div>

      <div className="admin-grid">
        {/* ADD PROJECT FORM */}
        <div className="admin-form-card">
          <h2>
            <FiPlus /> Add New Project
          </h2>
          <form onSubmit={handleAddProject}>
            <input
              type="text"
              placeholder="Project Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Short Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Live Demo URL"
              value={formData.liveUrl}
              onChange={(e) =>
                setFormData({ ...formData, liveUrl: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="GitHub URL"
              value={formData.githubUrl}
              onChange={(e) =>
                setFormData({ ...formData, githubUrl: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Tech Stack (comma separated, e.g. React, Node, MongoDB)"
              value={formData.techStack}
              onChange={(e) =>
                setFormData({ ...formData, techStack: e.target.value })
              }
              required
            />
            <button type="submit" className="btn btn-primary">
              Save Project
            </button>
          </form>
        </div>

        {/* PROJECT LIST */}
        <div className="admin-list-card">
          <h2>Current Projects ({projects.length})</h2>
          <div className="admin-project-list">
            {projects.map((p) => (
              <div key={p._id} className="admin-project-item">
                <img src={p.image} alt={p.title} />
                <div className="admin-project-info">
                  <h4>{p.title}</h4>
                  <p>{p.techStack.join(", ")}</p>
                </div>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="delete-btn"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

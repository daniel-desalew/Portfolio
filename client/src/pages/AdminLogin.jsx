// client/src/pages/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import toast from "react-hot-toast";
import axiosInstance from "../api/axios";
import "./Admin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Logging in...");

    try {
      const { data } = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("adminToken", data.token);
      toast.success("Welcome back, Admin!", { id: toastId });
      navigate("/admin");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>
          Admin <span className="gradient-text">Access</span>
        </h2>
        <p>Log in to manage your portfolio projects.</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FiMail className="input-icon" />
            <input
              type="email"
              placeholder="admin@daniel.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FiLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

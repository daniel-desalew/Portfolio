// client/src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <motion.div
        className="notfound-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="notfound-code gradient-text">404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link to="/" className="btn btn-primary">
          <FiArrowLeft /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

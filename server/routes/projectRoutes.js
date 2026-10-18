import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = Router();
router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", protect, createProject);
router.put("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);
export default router;

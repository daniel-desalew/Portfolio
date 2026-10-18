import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { contactLimiter } from "../middleware/rateLimiter.js";
import {
  createMessage,
  getMessages,
} from "../controllers/messageController.js";

const router = Router();
router.post("/", contactLimiter, createMessage);
router.get("/", protect, getMessages);
export default router;

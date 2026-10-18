import { Router } from "express";
import { loginLimiter } from "../middleware/rateLimiter.js";
import { login } from "../controllers/authController.js";

const router = Router();
router.post("/login", loginLimiter, login);
export default router;

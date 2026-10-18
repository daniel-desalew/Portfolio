import { Router } from "express";
import { getSkills } from "../controllers/skillController.js";

const router = Router();
router.get("/", getSkills);
export default router;

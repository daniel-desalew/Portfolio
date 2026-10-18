import { Router } from "express";
import { getAbout } from "../controllers/aboutController.js";

const router = Router();
router.get("/", getAbout);
export default router;

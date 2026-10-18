import mongoose from "mongoose";

export default mongoose.model(
  "Skill",
  new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, default: "General" }, // Frontend, Backend, Tools...
    level: { type: Number, min: 0, max: 100, default: 80 },
  }),
);

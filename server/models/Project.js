import mongoose from "mongoose";

export default mongoose.model(
  "Project",
  new mongoose.Schema(
    {
      title: { type: String, required: true, trim: true },
      description: { type: String, required: true }, // short text for cards
      details: String, // long text for detail page
      image: String,
      screenshots: [String],
      tech: [String],
      liveUrl: String,
      githubUrl: String,
    },
    { timestamps: true },
  ),
);

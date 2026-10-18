import mongoose from "mongoose";

export default mongoose.model(
  "About",
  new mongoose.Schema({
    name: String,
    title: String,
    location: String,
    bio: String,
    photo: String,
    email: String,
    phone: String,
    resumeUrl: String,
    github: String,
    linkedin: String,
    twitter: String,
    facts: [{ label: String, value: String }],
  }),
);

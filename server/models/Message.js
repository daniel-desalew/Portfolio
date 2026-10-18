import mongoose from "mongoose";

// Contact form submissions
export default mongoose.model(
  "Message",
  new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true, maxlength: 100 },
      email: {
        type: String,
        required: true,
        trim: true,
        match: /^\S+@\S+\.\S+$/,
      },
      message: { type: String, required: true, maxlength: 3000 },
    },
    { timestamps: true },
  ),
);

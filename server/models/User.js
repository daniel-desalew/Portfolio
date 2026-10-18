// server/models/User.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    isAdmin: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// Hash password before saving (Mongoose v8 syntax)
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return; // Just return, don't call next()

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  // No next() needed at the end in async functions
});

// Compare passwords
userSchema.methods.matchPassword = async function (entered) {
  return await bcrypt.compare(entered, this.password);
};

export default mongoose.model("User", userSchema);

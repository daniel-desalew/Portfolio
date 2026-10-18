import jwt from "jsonwebtoken";

// POST /api/auth/login {email, password} -> {token}. Credentials come from .env
export const login = (req, res) => {
  const { email, password } = req.body;
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Wrong credentials" });
  }
  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json({ token });
};

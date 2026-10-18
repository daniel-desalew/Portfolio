import rateLimit from "express-rate-limit";

const make = (max, message) =>
  rateLimit({ windowMs: 15 * 60 * 1000, max, message: { message } });

export const apiLimiter = make(200, "Too many requests, try again later");
export const contactLimiter = make(
  5,
  "Too many messages, try again in 15 minutes",
); // stops spam
export const loginLimiter = make(5, "Too many login attempts, try again later");

import Message from "../models/Message.js";
import sendEmail from "../utils/sendEmail.js";

// POST /api/messages: save + email
export const createMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const saved = await Message.create({ name, email, message });
    sendEmail(saved).catch(console.error); // don't make the visitor wait for the email
    res.status(201).json({ message: "Message sent" });
  } catch (e) {
    next(e);
  }
};

// GET /api/messages (admin only)
export const getMessages = async (req, res, next) => {
  try {
    res.json(await Message.find().sort("-createdAt"));
  } catch (e) {
    next(e);
  }
};

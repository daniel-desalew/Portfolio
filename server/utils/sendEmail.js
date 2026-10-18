import nodemailer from "nodemailer";

// Emails you a copy of each contact-form message (Gmail + app password).
export default async function sendEmail({ name, email, message }) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return; // skip if not configured
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `${name} <${email}>\n\n${message}`,
  });
}

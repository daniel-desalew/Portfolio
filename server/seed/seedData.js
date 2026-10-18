// server/seed/seedData.js
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
import About from "../models/About.js";
import User from "../models/User.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // ---------- CLEAR OLD DATA ----------
    await Project.deleteMany();
    await Skill.deleteMany();
    await About.deleteMany();
    await User.deleteMany();
    console.log("🗑️  Cleared existing data");

    // ============================================
    // PROJECTS
    // ============================================
    await Project.insertMany([
      {
        title: "Portfolio Website",
        description:
          "A full-stack personal portfolio with admin dashboard and dynamic project showcase.",
        longDescription:
          "I built this portfolio to showcase my work and skills. Frontend uses React with Vite, backend uses Express and MongoDB with JWT auth, and the contact form sends real emails via Nodemailer.",
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
        techStack: ["React", "Node.js", "Express", "MongoDB", "CSS"],
        liveUrl: "https://daniel-portfolio.vercel.app",
        githubUrl: "https://github.com/daniel/portfolio",
        featured: true,
        order: 1,
      },
      {
        title: "ShopHub — E-Commerce Platform",
        description:
          "A full-featured online store with cart, checkout, Stripe payments, and admin panel.",
        longDescription:
          "ShopHub is a complete e-commerce solution. Users can browse products, add to cart, and checkout via Stripe. The admin panel allows product management with image uploads.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
        techStack: ["React", "Express", "MongoDB", "Stripe", "Redux"],
        liveUrl: "https://shophub-daniel.vercel.app",
        githubUrl: "https://github.com/daniel/shophub",
        featured: true,
        order: 2,
      },
      {
        title: "TaskFlow — Productivity App",
        description:
          "A task management app with JWT auth, drag-and-drop boards, and real-time updates.",
        longDescription:
          "TaskFlow helps teams organize work with kanban boards like Trello. Features JWT auth, role-based permissions, and real-time updates via Socket.IO.",
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
        techStack: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT"],
        liveUrl: "https://taskflow-daniel.vercel.app",
        githubUrl: "https://github.com/daniel/taskflow",
        featured: true,
        order: 3,
      },
    ]);
    console.log("✅ Seeded 3 projects");

    // ============================================
    // SKILLS
    // ============================================
    await Skill.insertMany([
      { name: "HTML5", category: "Frontend", level: 95, order: 1 },
      { name: "CSS3", category: "Frontend", level: 92, order: 2 },
      { name: "JavaScript", category: "Frontend", level: 90, order: 3 },
      { name: "React", category: "Frontend", level: 88, order: 4 },
      { name: "Tailwind CSS", category: "Frontend", level: 85, order: 5 },
      { name: "Node.js", category: "Backend", level: 88, order: 6 },
      { name: "Express", category: "Backend", level: 87, order: 7 },
      { name: "REST APIs", category: "Backend", level: 90, order: 8 },
      { name: "JWT Auth", category: "Backend", level: 82, order: 9 },
      { name: "MongoDB", category: "Database", level: 85, order: 10 },
      { name: "Mongoose", category: "Database", level: 83, order: 11 },
      { name: "Git & GitHub", category: "Tools", level: 90, order: 12 },
      { name: "VS Code", category: "Tools", level: 95, order: 13 },
      { name: "Postman", category: "Tools", level: 85, order: 14 },
      { name: "Vite", category: "Tools", level: 85, order: 15 },
    ]);
    console.log("✅ Seeded 15 skills");

    // ============================================
    // ABOUT — Updated with your real info
    // ============================================
    await About.create({
      name: "Daniel",
      title: "Full-Stack Web Developer",
      location: "Injibara, Ethiopia",
      bio: "I build fast, modern web applications that solve real problems...",
      longBio: "I'm a full-stack developer with a passion...",

      // 👇 CHANGE THIS LINE 👇
      photo: "/profile.jpg",
      // 👆 CHANGE THIS LINE 👆

      resumeUrl: "/resume.pdf",
      email: "danieldesalew23@gmail.com",
      phone: "0954207319",
      github: "https://github.com/daniel",
      linkedin: "https://linkedin.com/in/daniel",
      twitter: "https://twitter.com/daniel",
      website: "https://daniel-portfolio.vercel.app",
      stats: [
        { label: "Years Coding", value: "3+" },
        { label: "Projects Shipped", value: "10+" },
        { label: "Technologies", value: "15+" },
        { label: "Happy Clients", value: "5+" },
      ],
    });
    console.log("✅ Seeded about info");

    // ============================================
    // ADMIN USER
    // ============================================
    await User.create({
      name: "Daniel",
      email: "admin@daniel.com",
      password: "admin123",
      isAdmin: true,
    });
    console.log("✅ Seeded admin: admin@daniel.com / admin123");

    console.log("\n🎉 Database seeded successfully!\n");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed error:", error);
    process.exit(1);
  }
};

seedData();

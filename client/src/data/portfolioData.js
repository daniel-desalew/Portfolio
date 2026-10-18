// Fallback static data: shown if the API is not running or unreachable.
// Keep this in sync with server/seed/seedData.js.
const portfolioData = {
  about: {
    name: "Your Name",
    title: "Full-Stack Developer",
    location: "City, Country",
    bio: "I build fast, accessible web apps. Replace this with 2-3 sentences about you.",
    photo: "/assets/profile.jpg",
    resumeUrl: "/assets/resume.pdf",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    facts: [
      { label: "Location", value: "City, Country" },
      { label: "Experience", value: "3 years" },
      { label: "Focus", value: "MERN stack" },
    ],
  },
  skills: [
    { _id: "s1", name: "HTML", category: "Frontend", level: 90 },
    { _id: "s2", name: "CSS", category: "Frontend", level: 85 },
    { _id: "s3", name: "JavaScript", category: "Frontend", level: 85 },
    { _id: "s4", name: "React", category: "Frontend", level: 80 },
    { _id: "s5", name: "Node.js", category: "Backend", level: 80 },
    { _id: "s6", name: "MongoDB", category: "Backend", level: 75 },
  ],
  projects: [1, 2, 3].map((n) => ({
    _id: String(n),
    title: `Project ${n}`,
    description: "Short description of what it does.",
    details: "Longer write-up: the problem, your approach, and the result.",
    image: `/assets/project-${n}.png`,
    screenshots: [`/assets/project-${n}.png`],
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername",
  })),
};

export default portfolioData;

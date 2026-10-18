import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import api from "../api/axios";
import "./Skills.css";

// Fallback skills if API doesn't respond
const fallbackSkills = [
  { _id: "s1", name: "HTML5", category: "Frontend", level: 95 },
  { _id: "s2", name: "CSS3", category: "Frontend", level: 92 },
  { _id: "s3", name: "JavaScript", category: "Frontend", level: 90 },
  { _id: "s4", name: "React", category: "Frontend", level: 88 },
  { _id: "s5", name: "Tailwind CSS", category: "Frontend", level: 85 },
  { _id: "s6", name: "Node.js", category: "Backend", level: 88 },
  { _id: "s7", name: "Express", category: "Backend", level: 87 },
  { _id: "s8", name: "REST APIs", category: "Backend", level: 90 },
  { _id: "s9", name: "JWT Auth", category: "Backend", level: 82 },
  { _id: "s10", name: "MongoDB", category: "Database", level: 85 },
  { _id: "s11", name: "Mongoose", category: "Database", level: 83 },
  { _id: "s12", name: "Git & GitHub", category: "Tools", level: 90 },
  { _id: "s13", name: "VS Code", category: "Tools", level: 95 },
  { _id: "s14", name: "Postman", category: "Tools", level: 85 },
  { _id: "s15", name: "Vite", category: "Tools", level: 85 },
];

function SkillBar({ name, level, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/skills")
      .then((res) => {
        setSkills(res.data.length > 0 ? res.data : fallbackSkills);
        setLoading(false);
      })
      .catch(() => {
        setSkills(fallbackSkills);
        setLoading(false);
      });
  }, []);

  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p>Technologies and tools I work with daily to build modern web applications.</p>
        </motion.div>

        {loading ? (
          <div className="skills-loading">Loading skills...</div>
        ) : (
          <div className="skills-wrapper">
            {Object.entries(grouped).map(([category, catSkills], catIdx) => (
              <motion.div
                key={category}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              >
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-bars">
                  {catSkills.map((skill, i) => (
                    <SkillBar
                      key={skill._id}
                      name={skill.name}
                      level={skill.level}
                      delay={catIdx * 0.1 + i * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

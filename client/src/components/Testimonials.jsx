// client/src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import "./Testimonials.css";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    text: "Daniel built our entire e-commerce platform in 4 weeks. He's incredibly fast, communicates perfectly, and the code is flawless.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    text: "One of the best developers I've worked with. He doesn't just write code, he understands the business goals and designs solutions that convert.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Elena Rodriguez",
    role: "CEO, TechFlow",
    text: "We hired Daniel for a complex React dashboard. He delivered ahead of schedule and handled the backend Node.js API perfectly.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials-grid">
      {reviews.map((review, i) => (
        <motion.div
          key={i}
          className="testimonial-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="stars">
            <FiStar className="star-fill" />
            <FiStar className="star-fill" />
            <FiStar className="star-fill" />
            <FiStar className="star-fill" />
            <FiStar className="star-fill" />
          </div>
          <p className="review-text">"{review.text}"</p>
          <div className="reviewer">
            <img src={review.avatar} alt={review.name} />
            <div>
              <h4>{review.name}</h4>
              <p>{review.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

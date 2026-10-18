import { useEffect } from "react";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Your Name";
  }, []);
  return <Projects />;
}

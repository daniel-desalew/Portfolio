import { useEffect } from "react";
import About from "../components/About";
import Skills from "../components/Skills";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Your Name";
  }, []);
  return (
    <>
      <About />
      <Skills />
    </>
  );
}

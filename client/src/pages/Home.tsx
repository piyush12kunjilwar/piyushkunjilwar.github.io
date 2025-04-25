import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectShowcase from "@/components/ProjectShowcase";
import Achievements from "@/components/Achievements";
import HireMe from "@/components/HireMe";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <ProjectShowcase />
      <Achievements />
      <HireMe />
    </div>
  );
}
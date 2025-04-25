import { motion } from "framer-motion";
import TechAnimation from "./TechAnimation";

export default function About() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-4">
              I'm a Software Engineer with experience at Accenture and General Motors, specializing in full-stack development
              and cloud computing. Currently pursuing my Master's in Information Systems at Northeastern University.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              I've successfully optimized system performance through microservices architecture, reducing latency by 35%
              and improving system uptime to 99.9%. My work with cloud technologies like AWS and GCP has helped reduce
              infrastructure costs while scaling applications to support millions of users.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm passionate about building scalable solutions and leveraging cutting-edge technologies to solve complex
              problems in cloud computing and artificial intelligence.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square bg-card rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-transparent z-10" />
            <TechAnimation />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
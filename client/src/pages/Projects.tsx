import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Dream Interpreter",
    description: "NLP-driven sleep analysis tool using GPT-4 and TensorFlow, achieving 85% accuracy in pattern correlation. Integrated IoT sensor data with React Native app, reducing sleep disorder misdiagnoses by 30%.",
    image: "https://picsum.photos/800/600",
    tags: ["Python", "TensorFlow", "GPT-4", "React Native"],
    link: "https://github.com/piyush12kunjilwar/DreamInsightAI"
  },
  {
    title: "Netflix Sentiment Analysis",
    description: "Real-time sentiment dashboard processing 1000+ social comments/hour. Integrated Claude AI to analyze emotional tone, improving recommendation relevance by 40%.",
    image: "https://picsum.photos/800/601",
    tags: ["NLTK", "AWS", "Kafka", "Streamlit"],
    link: "https://github.com/piyush12kunjilwar/NetflixSentiment"
  },
  {
    title: "Cloud-Based SaaS Solution",
    description: "Developed microservices architecture on AWS, reducing infrastructure costs by 20% while scaling to support 1M+ users",
    image: "https://picsum.photos/800/602",
    tags: ["AWS", "Spring Boot", "Microservices"],
    link: "#"
  },
  {
    title: "Vehicle Telemetry System",
    description: "Enhanced vehicle telemetry data processing using Apache Kafka and AWS Lambda, reducing data latency by 40%",
    image: "https://picsum.photos/800/603",
    tags: ["Kafka", "AWS Lambda", "PySpark"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in cloud computing, AI/ML, and full-stack development,
            demonstrating my expertise in building scalable and innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
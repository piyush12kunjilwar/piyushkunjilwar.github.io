import { motion } from "framer-motion";
import { Link } from "wouter";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Dream Interpreter",
    description: "Sleep analysis tool using GPT-4 and TensorFlow, achieving 85% accuracy in correlating dream patterns with clinical sleep disorders using GPT-4 and TensorFlow.",
    image: "https://picsum.photos/800/600",
    link: "https://github.com/piyush12kunjilwar/DreamInsightAI",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Netflix Sentiment Analysis",
    description: "Real-time sentiment dashboard processing 1000+ social comments/hour, identifying 60% positive sentiment for Netflix originals and enabling rapid A/B testing",
    image: "https://picsum.photos/800/601",
    link: "https://github.com/piyush12kunjilwar/NetflixSentiment",
    category: "Data Engineering"
  },
  {
    id: 3,
    title: "Crypto Dashboard Pro",
    description: "Real-time cryptocurrency tracking dashboard with advanced charting, portfolio management, and market analysis. Built with React, Chart.js, and WebSocket for live updates.",
    image: "https://picsum.photos/800/602",
    link: "#",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Netflix Clone Plus",
    description: "Feature-rich Netflix clone with dynamic content loading, user authentication, and personalized recommendations. Implemented using React, Firebase, and TMDB API.",
    image: "https://picsum.photos/800/603",
    link: "#",
    category: "Web Development"
  },
  {
    id: 5,
    title: "Cloud-Based SaaS Solution",
    description: "Developed and deployed microservices architecture on AWS, reducing infrastructure costs by 20% while scaling to support 1M+ users",
    image: "https://picsum.photos/800/604",
    link: "#",
    category: "Cloud Computing"
  },
  {
    id: 6,
    title: "Vehicle Telemetry System",
    description: "Enhanced vehicle telemetry data processing using Apache Kafka and AWS Lambda, reducing data latency by 40% and improving maintenance predictions",
    image: "https://picsum.photos/800/605",
    link: "#",
    category: "IoT"
  }
];

export default function ProjectShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Creations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in cloud computing, AI/ML, and full-stack development,
            demonstrating my expertise in building scalable and innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Project Info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <motion.span
                  className="text-sm text-primary/80 font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {project.category}
                </motion.span>
                <motion.h3
                  className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100"
                initial={false}
                whileHover={{
                  background: [
                    "linear-gradient(to right, rgba(var(--primary), 0.2), rgba(var(--primary), 0.1))",
                    "linear-gradient(to left, rgba(var(--primary), 0.2), rgba(var(--primary), 0.1))",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
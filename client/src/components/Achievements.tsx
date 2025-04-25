import { motion } from "framer-motion";
import { useRef } from "react";

const achievementCategories = [
  {
    icon: "🚀",
    title: "Performance & Scalability",
    highlights: [
      "Revolutionized system performance with microservices architecture at Accenture",
      "Scaled AWS SaaS platform to support millions of concurrent users",
      "Optimized database performance at General Motors through advanced indexing"
    ]
  },
  {
    icon: "🤖",
    title: "AI/ML Innovation",
    highlights: [
      "Developed cutting-edge sleep analysis tool using GPT-4 and TensorFlow",
      "Enhanced recommendation systems with Claude AI across global markets",
    ]
  },
  {
    icon: "⚡",
    title: "Real-Time Systems",
    highlights: [
      "Built high-performance notification system with Kafka and WebSocket",
      "Created real-time vehicle telemetry pipeline with AWS Lambda"
    ]
  },
  {
    icon: "🛠️",
    title: "DevOps & Automation",
    highlights: [
      "Implemented zero-downtime deployments with Jenkins/GitLab",
      "Established comprehensive testing framework with JUnit/Mockito"
    ]
  }
];

export default function Achievements() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Key Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Breakthrough innovations and impactful solutions across cloud computing,
            AI/ML, and system optimization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievementCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 transform perspective-1000"
            >
              <motion.div 
                className="text-4xl mb-4"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {category.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-muted-foreground group-hover:text-foreground transition-colors flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    {highlight}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"
                initial={false}
                whileHover={{
                  background: [
                    "linear-gradient(to right, rgba(var(--primary), 0.1), transparent)",
                    "linear-gradient(to left, rgba(var(--primary), 0.1), transparent)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
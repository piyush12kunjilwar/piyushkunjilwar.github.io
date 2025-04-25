import { motion } from "framer-motion";

const skills = [
  { name: "Cloud Computing (AWS, Azure, GCP)", level: 90 },
  { name: "Python, Java, TypeScript", level: 88 },
  { name: "React.js, Node.js, Spring Boot", level: 85 },
  { name: "AI/ML & Data Engineering", level: 82 },
  { name: "DevOps/CI-CD", level: 80 },
];

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
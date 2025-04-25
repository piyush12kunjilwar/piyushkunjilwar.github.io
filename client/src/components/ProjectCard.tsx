import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card className="overflow-hidden relative group cursor-pointer">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
            whileHover={{
              background: [
                "linear-gradient(to right, rgba(var(--primary), 0.2), rgba(var(--primary), 0.1))",
                "linear-gradient(to left, rgba(var(--primary), 0.2), rgba(var(--primary), 0.1))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="aspect-video relative overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <CardContent className="p-6 backdrop-blur-sm bg-background/80">
            <motion.h3
              className="text-xl font-bold mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm relative overflow-hidden group-hover:text-primary-foreground"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ scale: [0.5, 1], opacity: [0, 1] }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">{tag}</span>
                </motion.span>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}
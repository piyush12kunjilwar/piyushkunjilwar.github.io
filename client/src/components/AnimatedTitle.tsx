import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedTitle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleText = "Software Engineer & Cloud Developer";
  const words = titleText.split(' ');

  return (
    <div className="relative">
      {/* Glowing orb effect behind text */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full animate-pulse" />

      {/* Floating animated container */}
      <motion.h1 
        className="text-6xl md:text-8xl font-bold mb-6 relative"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: i * 0.2,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            style={{ 
              backgroundSize: '200% auto',
              animation: 'gradient 5s linear infinite',
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
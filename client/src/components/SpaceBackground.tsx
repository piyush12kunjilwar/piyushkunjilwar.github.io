import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SpaceBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black">
      {/* Dynamic stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2,
          }}
          animate={{
            y: [null, -1000],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/20 to-black"
        animate={{
          background: [
            "linear-gradient(to bottom, rgba(var(--primary), 0.2), black)",
            "linear-gradient(to bottom, rgba(var(--primary), 0.3), black)",
            "linear-gradient(to bottom, rgba(var(--primary), 0.2), black)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          left: '20%',
          top: '20%',
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          right: '25%',
          bottom: '20%',
        }}
      />
    </div>
  );
}
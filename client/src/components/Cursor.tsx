import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setTrail(prev => [...prev.slice(-5), { x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
      height: 32,
      width: 32,
    },
    hover: {
      x: mousePos.x - 32,
      y: mousePos.y - 32,
      height: 64,
      width: 64,
    },
  };

  return (
    <>
      {trail.map((pos, i) => (
        <motion.div
          key={i}
          className="cursor hidden md:block fixed top-0 left-0 z-50 rounded-full pointer-events-none bg-primary/20"
          animate={{
            x: pos.x - 8,
            y: pos.y - 8,
            height: 16,
            width: 16,
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
        />
      ))}
      <motion.div
        className="cursor hidden md:block fixed top-0 left-0 z-50 rounded-full pointer-events-none border-2 border-primary mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
}
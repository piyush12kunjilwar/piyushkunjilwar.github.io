import { motion } from "framer-motion";

export default function TechAnimation() {
  return (
    <div className="relative w-full h-full">
      {/* Animated Cloud Platform */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 0 10px rgba(var(--primary), 0.3))' }}
        >
          {/* Cloud Platform Base */}
          <motion.path
            d="M40,100 L160,100 L160,140 L40,140 Z"
            fill="currentColor"
            className="text-primary/20"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Connecting Lines */}
          {[1, 2, 3].map((i) => (
            <motion.line
              key={i}
              x1={60 + i * 40}
              y1="100"
              x2={60 + i * 40}
              y2="60"
              stroke="currentColor"
              className="text-primary/40"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}

          {/* Animated Data Flow */}
          <motion.circle
            cx="100"
            cy="80"
            r="4"
            className="fill-primary"
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>
      </motion.div>

      {/* Code Symbols Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative">
          {['{ }', '< >', '[ ]'].map((symbol, index) => (
            <motion.div
              key={symbol}
              className="absolute text-2xl font-mono text-primary/60"
              style={{
                top: `${index * 30}px`,
                left: `${index * 20}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Neural Network Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Neural Network Nodes */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={70 + (i % 2) * 60}
              cy={60 + Math.floor(i / 2) * 40}
              r="5"
              className="fill-primary/40"
              animate={{
                r: [5, 7, 5],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
          
          {/* Connecting Lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={70 + (i % 2) * 60}
              y1={60 + Math.floor(i / 2) * 40}
              x2={70 + ((i + 1) % 2) * 60}
              y2={60 + Math.floor((i + 1) / 2) * 40}
              stroke="currentColor"
              className="text-primary/20"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

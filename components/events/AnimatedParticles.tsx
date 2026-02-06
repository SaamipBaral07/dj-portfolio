// components/events/AnimatedParticles.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ParticleProps {
  count?: number;
  color?: string;
}

export default function AnimatedParticles({ count = 30, color = "bg-cyan-400/30" }: ParticleProps) {
  const [particles, setParticles] = useState<Array<{ left: string; top: string }>>([]);

  useEffect(() => {
    // Generate particles on client side only
    const newParticles = Array.from({ length: count }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, [count]);

  if (particles.length === 0) {
    return null; // Don't render anything during SSR
  }

  return (
    <>
      {particles.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${color} rounded-full`}
          style={{
            left: pos.left,
            top: pos.top,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
}
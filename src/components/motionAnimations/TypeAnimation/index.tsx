"use client";

import { motion } from "framer-motion";

const TypeAnimation = ({ type }: { type: string }) => {
  const variants: Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  > = {
    fire: {
      background: "radial-gradient(circle, rgba(255,0,0,0.3), transparent)",
      scale: [1, 1.2, 1],
    },
    water: {
      background: "radial-gradient(circle, rgba(0,191,255,0.3), transparent)",
      rotate: [0, 360],
    },
    grass: {
      background: "radial-gradient(circle, rgba(34,139,34,0.3), transparent)",
      y: [0, 20, 0],
    },
    electric: {
      background: "radial-gradient(circle, rgba(255,255,0,0.3), transparent)",
      scale: [1, 1.1, 1],
    },
  };

  const animation = variants[type] ?? {};

  return (
    <motion.div
      animate={animation}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 z-0 rounded-full blur-3xl opacity-30"
      style={{ background: animation.background }}
    />
  );
};

export default TypeAnimation;

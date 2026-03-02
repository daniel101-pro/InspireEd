"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LineRevealProps {
  className?: string;
  delay?: number;
}

export default function LineReveal({ className = "", delay = 0 }: LineRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-px w-full bg-dark/20"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{
          duration: 1.2,
          ease: [0.215, 0.61, 0.355, 1],
          delay,
        }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

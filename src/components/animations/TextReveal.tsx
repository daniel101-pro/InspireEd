"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  splitBy?: "words" | "chars";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  splitBy = "words",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = splitBy === "chars" ? children.split("") : children.split(" ");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {items.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.215, 0.61, 0.355, 1],
              delay: delay + i * (splitBy === "chars" ? 0.03 : 0.08),
            }}
          >
            {item}
            {splitBy === "words" ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

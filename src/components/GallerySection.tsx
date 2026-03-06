"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import LineReveal from "./animations/LineReveal";

const galleryImages = [
  { src: "/Gallery/1-1.png", alt: "Seyi Emmanuel Ogundipe — The Stand Out Factor", category: "Spotlight" },
  { src: "/Gallery/3.png", alt: "Varnessa Kayen Varlyngton — Eco Journalist & UN Champion", category: "Spotlight" },
  { src: "/Gallery/4-4.png", alt: "Chidera Duru — Education and Technology", category: "Spotlight" },
  { src: "/Gallery/5.png", alt: "The Stand Out Factor — Secret to a Memorable Application", category: "Events" },
  { src: "/Gallery/5-3.png", alt: "Tony Odhiambo — MIT Scholar & STEM Educator", category: "Spotlight" },
  { src: "/Gallery/6-1.png", alt: "Ambassador Kabengwa Eric — Makerere University", category: "Ambassadors" },
  { src: "/Gallery/7.png", alt: "Ambassador Omar Touray — Gambia", category: "Ambassadors" },
  { src: "/Gallery/9-2.png", alt: "Ambassador Bonou Precious", category: "Ambassadors" },
  { src: "/Gallery/10.png", alt: "Ambassador Aghomi Dabo", category: "Ambassadors" },
  { src: "/Gallery/14-1.png", alt: "Unlocking the Power of Technology and Education", category: "Events" },
  { src: "/Gallery/17_20260227_204106_0016.png", alt: "Digital Fame — Becoming a Recognizable Voice Online", category: "Events" },
  { src: "/Gallery/InspirED.png", alt: "Ambassador Olanireti Godgift — Career Builder College", category: "Ambassadors" },
  { src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20.png", alt: "Meet the InspireED Team", category: "Community" },
  { src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20_20260220_134701_0000.png", alt: "January Project Winners — The Optimistics One", category: "Community" },
  { src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20_20260227_204721_0000.png", alt: "Oluwadamilare Joseph — Digital Fame Spotlight", category: "Spotlight" },
  { src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20(2)-2.png", alt: "Daniel Falodun — Full-Stack Developer & Rise Global Fellow", category: "Spotlight" },
  { src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20-2.png", alt: "Ambassador Excel Ebeagbor — Montessori School", category: "Ambassadors" },
  { src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20%20(2).png", alt: "Partnership Announcement — InspireED x ICOVE", category: "Community" },
];

const categories = ["All", "Spotlight", "Ambassadors", "Events", "Community"];

function GalleryCard({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Staggered heights for masonry effect
  const heights = ["aspect-square", "aspect-[4/5]", "aspect-square", "aspect-[5/6]", "aspect-square", "aspect-[4/5]", "aspect-square", "aspect-[5/6]", "aspect-square"];
  const aspectClass = heights[index % heights.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 80, scale: 0.9 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      style={{ rotateX, rotateY, perspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={`group relative overflow-hidden rounded-xl ${aspectClass}`}
    >
      {/* Image */}
      <motion.div className="absolute inset-0" whileHover={{ scale: 1.08 }} transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-y-0">
        <p className="text-cream text-sm md:text-base font-medium tracking-tight">
          {alt}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-3 left-3 h-6 w-6">
        <span className="block h-full w-px bg-cream/0 transition-colors duration-500 group-hover:bg-cream/60" />
        <span className="absolute top-0 left-0 block h-px w-full bg-cream/0 transition-colors duration-500 group-hover:bg-cream/60" />
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const filtered = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream py-24 md:py-36 border-t border-dark/10 overflow-hidden"
    >
      {/* Parallax decorative number */}
      <motion.div
        className="absolute -right-10 top-20 font-serif text-[16rem] md:text-[24rem] leading-none text-dark/[0.02] select-none pointer-events-none"
        style={{ y: bgY }}
      >
        IV
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-dark/40 mb-4">
            Gallery
          </p>
          <h2 className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl tracking-tight">
            Moments that{" "}
            <span className="italic text-accent">inspire</span>
          </h2>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.2} className="mt-10 md:mt-14">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-1.5 text-xs uppercase tracking-widest transition-colors duration-300 ${
                  activeFilter === cat
                    ? "text-dark"
                    : "text-dark/30 hover:text-dark/60"
                }`}
              >
                {activeFilter === cat && (
                  <motion.span
                    layoutId="gallery-filter"
                    className="absolute inset-0 rounded-full border border-dark/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-10">
          <LineReveal />
        </div>

        {/* Masonry Grid */}
        <div className="mt-10 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4"
            >
              {filtered.map((img, i) => (
                <div key={img.src} className="break-inside-avoid">
                  <GalleryCard
                    src={img.src}
                    alt={img.alt}
                    index={i}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

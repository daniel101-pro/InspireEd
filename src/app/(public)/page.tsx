"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import Counter from "@/components/animations/Counter";
import Marquee from "@/components/animations/Marquee";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import LineReveal from "@/components/animations/LineReveal";
import GallerySection from "@/components/GallerySection";

/* ─────────────────────────── DATA ─────────────────────────── */

const impactStats = [
  {
    target: 150,
    suffix: "+",
    label: "Students Empowered",
    description:
      "Through our sessions, community programs, and educational initiatives, InspireED has empowered over 150 students with valuable knowledge, exposure, and opportunities for growth.",
  },
  {
    target: 5,
    suffix: "+",
    label: "Expert Speakers & Mentors",
    description:
      "We have hosted inspiring speakers including professionals, mentors, and industry leaders who share their experiences and insights to guide students on their academic and career journeys.",
  },
  {
    target: 3,
    suffix: "+",
    label: "Impactful Learning Sessions",
    description:
      "InspireED has organized engaging virtual sessions focused on helping students understand opportunities, improve their applications, and develop skills needed for future success.",
  },
  {
    target: 10,
    suffix: "+",
    label: "Community Partners",
    description:
      "Our growing network of passionate volunteers, ambassadors, and students continues to expand, building a supportive community dedicated to learning, mentorship, and positive impact.",
  },
];

const programs = [
  {
    index: "01",
    title: "Learning Sessions & Webinars",
    description:
      "We organize engaging learning sessions and webinars where students interact with experienced professionals, mentors, entrepreneurs, and experts from different industries.",
  },
  {
    index: "02",
    title: "Mentorship & Career Guidance",
    description:
      "InspireED connects students with mentors who provide guidance on education, career paths, and personal development, helping them make better decisions about their future.",
  },
  {
    index: "03",
    title: "Application & Opportunity Support",
    description:
      "We help students learn how to prepare strong applications for scholarships, schools, internships, and leadership opportunities — standing out with confidence.",
  },
];

const testimonials = [
  {
    name: "Rita",
    quote:
      "InspireED first session taught me a lot, but Mr Seyi\u2019s session stood out for me the most. He said \u201CWherever you are, whatever you\u2019re applying for, be yourself, don\u2019t be generic. Just stand out\u201D. This hit me so hard because many times, I act professional just to get accepted.",
  },
  {
    name: "David",
    quote:
      "InspireED initiative taught me leadership and how to grow in everything I do.",
  },
  {
    name: "Samuel",
    quote:
      "I learnt what impact means and how important it is to make a change and become a changemaker.",
  },
  {
    name: "Bisola",
    quote:
      "I would recommend InspireED initiative to every student I know that wants to grow, learn, serve, lead and address a problem but doesn\u2019t have the right medium. InspireED is everything and more.",
  },
  {
    name: "Precious",
    quote:
      "Joining InspireED initiative and being an ambassador has taught me leadership, values and given me the ability to network and meet like-minded individuals.",
  },
  {
    name: "Joseph",
    quote:
      "The best moments for me were the monthly projects, it really pushes us to brainstorm, connect, network and solve an issue affecting us or people around us. InspireED is the best fr!",
  },
];

const marqueeItems = [
  "EDUCATION",
  "MENTORSHIP",
  "COMMUNITY",
  "GROWTH",
  "LEADERSHIP",
  "IMPACT",
];

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center bg-cream overflow-hidden"
      >
        {/* Decorative number */}
        <motion.div
          className="absolute top-16 right-8 md:right-16 lg:right-24 font-serif text-[12rem] md:text-[20rem] lg:text-[28rem] leading-none text-dark/[0.03] select-none pointer-events-none"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          01
        </motion.div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-40"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          {/* Headline */}
          <h1 className="font-serif text-dark text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight max-w-6xl">
            <TextReveal delay={0.2}>
              Empowering the next generation through
            </TextReveal>
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block italic text-accent"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.215, 0.61, 0.355, 1],
                  delay: 0.85,
                }}
              >
                education
              </motion.span>
            </span>
          </h1>

          {/* Body text */}
          <ScrollReveal delay={1} className="mt-10 md:mt-14 max-w-lg">
            <p className="text-dark/50 text-base md:text-lg leading-relaxed">
              We connect young people with resources, mentors, and opportunities
              to unlock their full potential and build brighter futures.
            </p>
          </ScrollReveal>

          {/* CTA link */}
          <ScrollReveal delay={1.2} className="mt-8">
            <MagneticButton strength={0.2}>
              <Link
                href="/programs"
                className="group inline-flex items-center gap-3 text-dark text-sm md:text-base tracking-wide uppercase"
              >
                <span className="relative">
                  Explore our programs
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-dark/30 origin-left group-hover:scale-x-100 scale-x-50 transition-transform duration-500" />
                </span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &rarr;
                </motion.span>
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </motion.div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0">
          <LineReveal delay={1.4} />
        </div>
      </section>

      {/* ═══════════════════ MARQUEE STRIP ═══════════════════ */}
      <section className="bg-dark py-5 md:py-6">
        <Marquee
          items={marqueeItems}
          separator="&bull;"
          className="text-cream/70 text-xs md:text-sm uppercase tracking-[0.3em]"
        />
      </section>

      {/* ═══════════════════ IMPACT NUMBERS ═══════════════════ */}
      <section className="bg-cream py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-dark/40 mb-4">
              Our Impact
            </p>
            <h2 className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
              Numbers that Speak
            </h2>
            <p className="text-dark/50 text-sm md:text-base leading-relaxed max-w-3xl mb-16 md:mb-24">
              At InspireED, impact is more than just numbers &mdash; it represents
              the students inspired, the opportunities created, and the future
              leaders being shaped. Through our programs, mentorship, and community
              initiatives, we continue to empower young people with knowledge,
              guidance, and the confidence to pursue their goals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {impactStats.map((stat, i) => (
              <div key={stat.label} className="relative">
                {/* Vertical divider between columns */}
                {i > 0 && (
                  <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px">
                    <LineReveal
                      delay={0.3 + i * 0.15}
                      className="h-full [&>div]:!h-full [&>div]:!w-px [&>div]:origin-top"
                    />
                  </div>
                )}
                {/* Horizontal divider for mobile 2-col layout */}
                {i >= 2 && (
                  <div className="block lg:hidden absolute top-0 left-0 right-0">
                    <LineReveal delay={0.3 + i * 0.15} />
                  </div>
                )}

                <ScrollReveal
                  delay={0.2 + i * 0.15}
                  className="py-8 md:py-10 px-4 md:px-8 text-center lg:text-left"
                >
                  <Counter
                    target={stat.target}
                    suffix={stat.suffix}
                    className="font-serif text-dark text-5xl md:text-6xl lg:text-7xl leading-none"
                  />
                  <p className="mt-3 text-dark/40 text-xs md:text-sm uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-dark/40 text-xs leading-relaxed hidden lg:block">
                    {stat.description}
                  </p>
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Extra community stats */}
          <ScrollReveal delay={0.6} className="mt-12 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-3">
                <span className="font-serif text-accent text-2xl md:text-3xl font-bold">30+</span>
                <span className="text-dark/50 text-sm">Mentors &amp; Volunteers</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ FEATURED PROGRAMS ═══════════════════ */}
      <section className="bg-cream py-24 md:py-36 border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-dark/40 mb-4">
              What We Do
            </p>
            <h2 className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16 md:mb-24">
              Featured Programs
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.2} className="space-y-0">
            {programs.map((program, i) => (
              <StaggerItem key={program.index}>
                <LineReveal delay={i * 0.1} />
                <Link
                  href="/programs"
                  className="group block py-10 md:py-14"
                >
                  <div
                    className="grid grid-cols-12 gap-4 md:gap-8 items-start"
                    style={{
                      paddingLeft: `${i * 4}%`,
                    }}
                  >
                    {/* Index number */}
                    <div className="col-span-2 md:col-span-1">
                      <span className="text-dark/20 text-xs md:text-sm font-mono">
                        {program.index}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="col-span-10 md:col-span-5">
                      <h3 className="font-serif text-dark text-2xl md:text-3xl lg:text-4xl tracking-tight group-hover:text-accent transition-colors duration-500">
                        {program.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="col-span-10 col-start-3 md:col-span-5 md:col-start-7 lg:col-span-4 lg:col-start-8">
                      <p className="text-dark/45 text-sm md:text-base leading-relaxed mt-2 md:mt-0">
                        {program.description}
                      </p>
                      <span className="inline-flex items-center gap-2 mt-4 text-dark/30 text-xs uppercase tracking-widest group-hover:text-accent transition-colors duration-500">
                        Learn more
                        <span className="inline-block group-hover:translate-x-2 transition-transform duration-500">
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
            <LineReveal delay={0.3} />
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ PHILOSOPHY / APPROACH ═══════════════════ */}
      <section className="bg-cream py-24 md:py-36 border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-dark/40 mb-16 md:mb-24">
              Our Approach
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left — Large editorial statement */}
            <ScrollReveal
              direction="left"
              className="lg:col-span-7"
            >
              <h2 className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight">
                We believe every young person deserves the chance to{" "}
                <span className="italic text-accent">discover</span> their
                potential, find their{" "}
                <span className="italic text-accent">voice</span>, and shape
                their own future.
              </h2>
            </ScrollReveal>

            {/* Divider for large screens */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-px h-full bg-dark/10" />
            </div>

            {/* Right — Body description */}
            <ScrollReveal
              direction="right"
              delay={0.3}
              className="lg:col-span-4 flex flex-col justify-center"
            >
              <div className="space-y-6">
                <p className="text-dark/50 text-sm md:text-base leading-relaxed">
                  Our approach is rooted in meaningful connection. Every session,
                  program, and mentorship opportunity is carefully designed to
                  support young people exactly where they are in their journey.
                </p>
                <p className="text-dark/50 text-sm md:text-base leading-relaxed">
                  We do not only share knowledge &mdash; we nurture confidence,
                  strengthen critical thinking, and build the resilience students
                  need to thrive in a constantly changing world.
                </p>
                <LineReveal delay={0.5} />
                <p className="text-dark/30 text-xs uppercase tracking-[0.3em]">
                  Education is not preparation for life;
                  <br />
                  education is life itself.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="bg-cream py-24 md:py-36 border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-dark/40 mb-4">
              Testimonies
            </p>
            <h2 className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16 md:mb-20">
              What our students say
            </h2>
          </ScrollReveal>

          {/* Featured testimonial */}
          <ScrollReveal>
            <div className="relative mb-16">
              <span
                className="absolute -top-8 -left-2 md:-top-12 md:-left-6 font-serif text-accent/20 text-[8rem] md:text-[12rem] leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="relative z-10">
                <motion.p
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-serif italic text-dark text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.3] tracking-tight max-w-5xl"
                >
                  {testimonials[activeTestimonial].quote}
                </motion.p>
              </blockquote>

              <motion.div
                key={`name-${activeTestimonial}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <LineReveal className="max-w-[80px] mb-4" />
                <p className="text-dark text-sm md:text-base font-medium">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-dark/40 text-xs md:text-sm mt-1">
                  InspireED Student
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Testimonial selector */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActiveTestimonial(i)}
                  className={`px-4 py-2 text-sm transition-all duration-300 border ${
                    i === activeTestimonial
                      ? "bg-dark text-cream border-dark"
                      : "bg-transparent text-dark/50 border-dark/20 hover:border-dark/50"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ GALLERY ═══════════════════ */}
      <GallerySection />

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className="bg-dark py-28 md:py-40 relative overflow-hidden">
        {/* Subtle accent glow */}
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              Ready to make a<br />
              <span className="italic text-accent">difference</span>?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="mt-8 md:mt-10">
            <p className="text-cream/40 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Whether you want to volunteer, mentor, or partner with us, there
              is a place for you at InspireED.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="mt-10 md:mt-14 flex flex-wrap justify-center gap-4">
            <MagneticButton strength={0.25}>
              <Link
                href="/volunteer"
                className="group inline-flex items-center gap-3 border border-cream/20 hover:border-cream/50 text-cream px-8 py-4 text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-500 hover:bg-cream/5"
              >
                Get involved
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &rarr;
                </motion.span>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <a
                href="https://chat.whatsapp.com/De8dAQTc8rE4divhzVV7WG?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-cream px-8 py-4 text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-500"
              >
                Join our community
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &rarr;
                </motion.span>
              </a>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

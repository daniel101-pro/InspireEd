"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import LineReveal from "@/components/animations/LineReveal";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const resources = [
  {
    num: "01",
    title: "Study Guides",
    description:
      "Comprehensive, educator-designed materials spanning Math, Science, English, and Social Studies. Built to reinforce classroom learning and develop lasting academic foundations.",
  },
  {
    num: "02",
    title: "College Prep",
    description:
      "Application timelines, essay frameworks, SAT/ACT strategies, and personal statement templates. Everything to navigate the admissions process with confidence.",
  },
  {
    num: "03",
    title: "Scholarships",
    description:
      "A curated, regularly updated database of financial aid opportunities with deadlines, eligibility details, and application tips for students of every background.",
  },
  {
    num: "04",
    title: "Career Kit",
    description:
      "Assessment tools, industry overviews, career path guides, and informational interview templates to help you discover your passions and plan your professional future.",
  },
];

const articles = [
  {
    title: "5 Study Habits That Actually Work",
    excerpt:
      "Science-backed techniques to boost retention, sharpen focus, and transform the way you learn. Practical strategies you can start using today.",
    date: "Feb 15, 2026",
  },
  {
    title: "Building Your First Resume",
    excerpt:
      "Your resume is your first impression. Learn how to highlight strengths and experiences, even if you are just getting started in your career journey.",
    date: "Jan 28, 2026",
  },
  {
    title: "Why Mentorship Matters",
    excerpt:
      "Stories from real InspireED mentors and mentees about how meaningful connections opened doors and shaped futures within our community.",
    date: "Jan 10, 2026",
  },
];

const faqs = [
  {
    question: "Who can participate in InspireED programs?",
    answer:
      "Our programs are open to youth ages 13 to 21 from all backgrounds. Whether you are a middle school student seeking tutoring support or a young adult exploring career options, there is a program for you. We welcome participants of all skill levels.",
  },
  {
    question: "Are all programs free of charge?",
    answer:
      "Yes. All core programs, workshops, study sessions, and resources are completely free. We believe access to quality education and mentorship should never be limited by financial barriers.",
  },
  {
    question: "How do I sign up for a program?",
    answer:
      "Visit our Contact page and fill out the interest form, or reach out directly at info@inspireed.org. You can also register in person at any session location. We will connect you with the right program based on your goals.",
  },
  {
    question: "Where are sessions held?",
    answer:
      "Sessions take place at community centers, schools, and libraries across the city. We also offer virtual sessions for students who prefer to participate from home. Locations and links are shared upon registration.",
  },
  {
    question: "Can parents or guardians get involved?",
    answer:
      "Absolutely. Parents and guardians can volunteer as facilitators, attend information nights, help organize events, or stay informed through our newsletter. Family engagement is central to student success.",
  },
  {
    question: "Do I need to bring anything to sessions?",
    answer:
      "Just yourself and a willingness to learn. We provide all materials, worksheets, and supplies. If you own a laptop or tablet, feel free to bring it for digital workshops, but it is never required.",
  },
];

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-cream text-dark">
      {/* ── SECTION 1 : HEADER ───────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal direction="none" duration={1}>
            <p className="text-sm font-sans uppercase tracking-[0.3em] text-accent">
              Tools for your journey
            </p>
          </ScrollReveal>

          <h1 className="mt-6 font-serif text-[clamp(3.5rem,10vw,9rem)] font-normal leading-[0.9] tracking-tight text-dark">
            <TextReveal splitBy="chars" delay={0.2}>
              Resources
            </TextReveal>
          </h1>

          <ScrollReveal delay={0.6} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-dark/60 font-sans md:text-xl">
              Guides, articles, and knowledge designed to support every stage of
              your educational path.
            </p>
          </ScrollReveal>
        </div>

        <LineReveal className="mx-auto mt-16 max-w-5xl" delay={0.8} />
      </section>

      {/* ── SECTION 2 : EDUCATIONAL RESOURCES ────────── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-sm font-sans uppercase tracking-[0.3em] text-accent">
              What we offer
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-dark md:text-6xl">
              Educational Resources
            </h2>
          </ScrollReveal>

          <div className="mt-16">
            {resources.map((item, i) => (
              <div key={item.num}>
                <LineReveal delay={i * 0.1} />
                <ScrollReveal delay={i * 0.08}>
                  <div className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:items-baseline md:gap-8">
                    {/* Number */}
                    <span className="font-serif text-sm text-dark/30 md:col-span-1">
                      {item.num}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-3xl tracking-tight text-dark md:col-span-3 md:text-4xl">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-base leading-relaxed text-dark/55 md:col-span-6">
                      {item.description}
                    </p>

                    {/* Link */}
                    <div className="md:col-span-2 md:text-right">
                      <a
                        href="#"
                        className="inline-block font-sans text-sm font-medium text-accent transition-opacity hover:opacity-60"
                      >
                        Access&thinsp;
                        <span className="text-xs">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
            <LineReveal delay={0.4} />
          </div>
        </div>
      </section>

      {/* ── SECTION 3 : BLOG / ARTICLES ──────────────── */}
      <section className="bg-dark px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-sm font-sans uppercase tracking-[0.3em] text-accent">
              From the blog
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-cream md:text-6xl">
              Latest Articles
            </h2>
          </ScrollReveal>

          <StaggerContainer className="mt-16 space-y-0" staggerDelay={0.15}>
            {articles.map((article, i) => (
              <StaggerItem key={i}>
                <div
                  className={`border-t border-cream/10 py-12 md:py-16 ${
                    i === articles.length - 1 ? "border-b border-cream/10" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start md:gap-8">
                    {/* Date */}
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-cream/30 md:col-span-2 md:pt-2">
                      {article.date}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-2xl tracking-tight text-cream md:col-span-5 md:text-3xl">
                      {article.title}
                    </h3>

                    {/* Excerpt + Link */}
                    <div className="md:col-span-5">
                      <p className="font-sans text-base leading-relaxed text-cream/50">
                        {article.excerpt}
                      </p>
                      <a
                        href="#"
                        className="mt-4 inline-block font-sans text-sm font-medium text-accent transition-opacity hover:opacity-60"
                      >
                        Read&thinsp;
                        <span className="text-xs">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── SECTION 4 : FAQ ──────────────────────────── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-sm font-sans uppercase tracking-[0.3em] text-accent">
              Common questions
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-dark md:text-6xl">
              FAQ
            </h2>
          </ScrollReveal>

          <div className="mt-16">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i}>
                  {i === 0 && <LineReveal />}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-7 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg tracking-tight text-dark md:text-xl">
                      {faq.question}
                    </span>
                    <motion.span
                      className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center font-sans text-sm text-dark/40"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
                          opacity: { duration: 0.3, ease: "easeInOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pr-12 font-sans text-base leading-relaxed text-dark/55">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <LineReveal delay={i * 0.05} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 : NEWSLETTER ───────────────────── */}
      <section className="bg-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-sm font-sans uppercase tracking-[0.3em] text-accent">
              Newsletter
            </p>
          </ScrollReveal>

          <h2 className="mt-6 font-serif text-[clamp(2.5rem,7vw,6rem)] font-normal leading-[0.95] tracking-tight text-cream">
            <TextReveal splitBy="words" delay={0.1}>
              Stay in the loop
            </TextReveal>
          </h2>

          <ScrollReveal delay={0.3} className="mt-8">
            <p className="mx-auto max-w-md font-sans text-base leading-relaxed text-cream/50">
              Subscribe for the latest resources, event announcements, and tips
              to support your educational journey.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mt-12">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto flex max-w-lg flex-col items-center gap-6 sm:flex-row sm:items-end sm:gap-4"
            >
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full border-b border-cream/20 bg-transparent pb-3 font-sans text-base text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-accent"
                />
              </div>

              <MagneticButton strength={0.25}>
                <button
                  type="submit"
                  className="shrink-0 bg-accent px-8 py-3 font-sans text-sm font-medium tracking-wide text-cream transition-opacity hover:opacity-80"
                >
                  Subscribe
                </button>
              </MagneticButton>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

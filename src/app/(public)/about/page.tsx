"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import LineReveal from "@/components/animations/LineReveal";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import Marquee from "@/components/animations/Marquee";
import MagneticButton from "@/components/animations/MagneticButton";

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const coreValues = [
  {
    num: "01",
    title: "Empowerment",
    description:
      "Giving youth the tools and agency to take charge of their own futures.",
  },
  {
    num: "02",
    title: "Inclusivity",
    description:
      "Programs open to every young person, regardless of background or circumstance.",
  },
  {
    num: "03",
    title: "Excellence",
    description:
      "Holding ourselves to the highest standard in everything we build and deliver.",
  },
  {
    num: "04",
    title: "Community",
    description:
      "Rooted in collective strength — together, we achieve what none of us can alone.",
  },
  {
    num: "05",
    title: "Innovation",
    description:
      "Embracing new ideas and creative approaches to solve enduring challenges.",
  },
  {
    num: "06",
    title: "Integrity",
    description:
      "Acting with honesty, transparency, and accountability in all that we do.",
  },
];

const teamMembers = [
  {
    name: "Amara Johnson",
    initials: "AJ",
    title: "Executive Director",
    bio: "With over 15 years in education leadership, Amara founded InspireED to bridge the gap between potential and opportunity for underserved youth.",
  },
  {
    name: "David Chen",
    initials: "DC",
    title: "Program Director",
    bio: "David designs and oversees all youth programs, drawing on his background in curriculum development and experiential learning.",
  },
  {
    name: "Sofia Martinez",
    initials: "SM",
    title: "Outreach Coordinator",
    bio: "Sofia builds meaningful partnerships with schools, families, and community organizations to extend InspireED's reach.",
  },
  {
    name: "Marcus Williams",
    initials: "MW",
    title: "Volunteer Manager",
    bio: "Marcus recruits, trains, and supports our incredible network of volunteers who bring our programs to life every day.",
  },
  {
    name: "Priya Patel",
    initials: "PP",
    title: "Mentorship Lead",
    bio: "Priya pairs youth with dedicated mentors and ensures every mentoring relationship is impactful, supportive, and goal-oriented.",
  },
  {
    name: "James Okafor",
    initials: "JO",
    title: "Communications Director",
    bio: "James shares the stories of InspireED's impact, managing outreach campaigns and amplifying youth voices across platforms.",
  },
];

const partners = [
  "Bright Futures Foundation",
  "Community First Bank",
  "Metro School District",
  "Youth Action Network",
  "TechBridge Labs",
  "United Giving Alliance",
];

/* ────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="bg-cream text-dark">
      {/* ═══════════════════════════════════════
          1. HEADER
          ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          {/* Eyebrow */}
          <ScrollReveal delay={0}>
            <p className="text-xs font-sans uppercase tracking-[0.35em] text-dark/40">
              Who we are
            </p>
          </ScrollReveal>

          {/* Title */}
          <h1 className="mt-6 font-serif text-6xl font-bold leading-[1.05] tracking-tight text-dark sm:text-7xl md:text-8xl lg:text-9xl">
            <TextReveal delay={0.15}>About Us</TextReveal>
          </h1>

          {/* Subtitle */}
          <ScrollReveal delay={0.5} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-dark/55 font-sans md:text-xl">
              The people, purpose, and principles behind InspireED Initiative
              and our commitment to empowering the next generation.
            </p>
          </ScrollReveal>
        </div>

        <LineReveal className="mx-auto mt-16 max-w-7xl px-6 md:mt-24" delay={0.7} />
      </section>

      {/* ═══════════════════════════════════════
          2. OUR STORY
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {/* Left — Heading */}
            <div className="md:col-span-4">
              <ScrollReveal direction="left">
                <p className="text-xs font-sans uppercase tracking-[0.35em] text-accent">
                  Est. 2018
                </p>
                <h2 className="mt-4 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-dark sm:text-6xl">
                  Our
                  <br />
                  Story
                </h2>
              </ScrollReveal>
            </div>

            {/* Right — Body */}
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal delay={0.2}>
                <div className="space-y-6 text-base leading-[1.8] text-dark/70 font-sans md:text-lg">
                  <p>
                    InspireED Initiative was founded by a group of passionate
                    educators and community leaders who saw a growing need for
                    accessible, high-quality youth development programs. Too many
                    young people in our communities lacked the resources, guidance,
                    and support systems needed to thrive academically and personally.
                  </p>
                  <p>
                    What started as a small after-school tutoring circle in a local
                    community center has grown into a comprehensive initiative
                    offering mentorship, skill-building workshops, leadership
                    development, and much more. Today, InspireED serves hundreds of
                    young people across multiple communities, and our network of
                    dedicated volunteers and partners continues to expand.
                  </p>
                  <p>
                    We remain rooted in the belief that every young person deserves
                    the chance to discover their potential, and we are committed to
                    making that belief a reality &mdash; one student at a time.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <LineReveal className="mt-20 md:mt-28" delay={0.1} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. MISSION & VISION
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-xs font-sans uppercase tracking-[0.35em] text-accent">
              Purpose
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-0">
            {/* Mission */}
            <ScrollReveal
              delay={0.1}
              className="md:border-r md:border-dark/10 md:pr-16"
            >
              <h3 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Mission
              </h3>
              <p className="mt-6 text-base leading-[1.8] text-dark/65 font-sans md:text-lg">
                To empower young people with the knowledge, skills, and
                confidence they need to succeed in education and life through
                accessible programs, mentorship, and community support.
              </p>
            </ScrollReveal>

            {/* Divider — horizontal on mobile */}
            <div className="h-px w-full bg-dark/10 md:hidden" />

            {/* Vision */}
            <ScrollReveal delay={0.3} className="md:pl-16">
              <h3 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Vision
              </h3>
              <p className="mt-6 text-base leading-[1.8] text-dark/65 font-sans md:text-lg">
                A world where every young person has the tools, guidance, and
                opportunities to reach their full potential, regardless of their
                circumstances or starting point.
              </p>
            </ScrollReveal>
          </div>

          <LineReveal className="mt-20 md:mt-28" delay={0.1} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. CORE VALUES
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-xs font-sans uppercase tracking-[0.35em] text-accent">
              What we stand for
            </p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-dark sm:text-6xl">
              Core Values
            </h2>
          </ScrollReveal>

          <StaggerContainer
            className="mt-16 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.12}
          >
            {coreValues.map((value) => (
              <StaggerItem key={value.title}>
                {/* Top border for each card */}
                <div className="border-t border-dark/10 py-10">
                  <span className="font-sans text-xs tracking-[0.2em] text-accent">
                    {value.num}
                  </span>
                  <h4 className="mt-3 font-serif text-2xl font-bold text-dark">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-dark/55 font-sans">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <LineReveal className="mt-8 md:mt-16" delay={0.1} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. TEAM
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {/* Left — Heading */}
            <div className="md:col-span-4">
              <ScrollReveal direction="left">
                <p className="text-xs font-sans uppercase tracking-[0.35em] text-accent">
                  The people behind InspireED
                </p>
                <h2 className="mt-4 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-dark sm:text-6xl">
                  Our
                  <br />
                  Team
                </h2>
              </ScrollReveal>
            </div>

            {/* Right — Grid */}
            <div className="md:col-span-8">
              <StaggerContainer
                className="grid gap-x-8 gap-y-0 sm:grid-cols-2"
                staggerDelay={0.1}
              >
                {teamMembers.map((member) => (
                  <StaggerItem key={member.name}>
                    <div className="border-t border-dark/10 py-8">
                      {/* Initials circle */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent">
                        <span className="font-serif text-sm font-bold text-accent">
                          {member.initials}
                        </span>
                      </div>

                      {/* Name & title */}
                      <h4 className="mt-4 font-serif text-xl font-bold text-dark">
                        {member.name}
                      </h4>
                      <p className="mt-0.5 text-sm font-sans text-dark/50">
                        {member.title}
                      </p>

                      {/* Bio */}
                      <p className="mt-3 text-sm leading-relaxed text-dark/60 font-sans">
                        {member.bio}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          <LineReveal className="mt-12 md:mt-20" delay={0.1} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. PARTNERS
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <p className="text-xs font-sans uppercase tracking-[0.35em] text-accent">
              Working together
            </p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-dark sm:text-6xl">
              Partners &amp; Supporters
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-14">
            <p className="font-serif text-2xl leading-relaxed text-dark/75 sm:text-3xl md:text-4xl">
              {partners.map((partner, idx) => (
                <span key={partner}>
                  <span className="text-dark">{partner}</span>
                  {idx < partners.length - 1 && (
                    <span className="mx-3 text-dark/25 sm:mx-4">&mdash;</span>
                  )}
                </span>
              ))}
            </p>
          </ScrollReveal>

          {/* Scrolling marquee for energy */}
          <div className="mt-16">
            <Marquee
              items={partners}
              separator={"\u2014"}
              className="text-sm font-sans uppercase tracking-[0.2em] text-dark/25"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FOOTER
          ═══════════════════════════════════════ */}
      <section className="border-t border-dark/10 bg-dark py-24 text-cream md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal>
            <h2 className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Join our story
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/55 font-sans md:text-lg">
              Whether as a volunteer, mentor, partner, or supporter &mdash;
              there is a place for you in the InspireED community.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <MagneticButton>
              <Link
                href="/volunteer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-sans text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-accent/90"
              >
                Become a Volunteer
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-4 font-sans text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream/50 hover:bg-cream/5"
              >
                Contact Us
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

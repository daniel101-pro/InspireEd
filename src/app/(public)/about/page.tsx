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
    name: "Raphael Ogundipe",
    initials: "RO",
    title: "Founder & Team Lead",
    bio: "Visionary behind InspireED initiative. A 15-year-old changemaker, moved by impact and ready to make a change and lead the giants of the next generation into greatness!",
  },
  {
    name: "Rita",
    initials: "RI",
    title: "Graphic Designer",
    bio: "Rita has been an incredible asset to InspireED. Her creativity and design skills are truly unmatched. Whenever we need impromptu designs, Rita effortlessly brings our vision to life. She also played a key role in hosting our first InspireED session.",
  },
  {
    name: "Yewande",
    initials: "YE",
    title: "Programs Coordinator",
    bio: "Yewande is the driving force behind our events. She meticulously plans every detail, from schedules to logistics. Whether it\u2019s a seminar, a workshop, or a picnic event, Yewande ensures that everything runs smoothly and efficiently.",
  },
  {
    name: "Favour",
    initials: "FA",
    title: "Social Media Manager",
    bio: "Favour is the heartbeat of our Instagram presence. With her deep understanding of social media, she crafts engaging posts and fosters a vibrant online community. Her positive energy and excellent communication skills bring a wonderful vibe to our team.",
  },
  {
    name: "Samuel",
    initials: "SA",
    title: "Content Writer",
    bio: "Samuel is our go-to wordsmith. Whenever we need fresh and compelling content, Samuel steps in with creative ideas and engaging text. His contributions ensure that our messaging is always clear, impactful, and well-crafted.",
  },
  {
    name: "Opemipo",
    initials: "OP",
    title: "PR & Community Manager",
    bio: "Opemipo is the pillar of our community management. She ensures that our group remains positive, engaged, and well-organized, especially during busy periods. Her efforts help maintain a supportive environment.",
  },
  {
    name: "Gifted",
    initials: "GI",
    title: "Video Creator",
    bio: "Gifted is our video expert, bringing our content to life with her creative touch. Every video she produces is engaging and visually compelling. Gifted\u2019s friendly personality and dedication also add a wonderful vibe to the team.",
  },
];

const partners = [
  "iCove Initiative",
  "Femi Omolade Private College",
  "Seyi Ogundipe",
  "Daniel Falodun",
  "Forge Africa",
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
          2. OUR STORY — THE FOUNDER'S POV
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {/* Left — Heading */}
            <div className="md:col-span-4">
              <ScrollReveal direction="left">
                <p className="text-xs font-sans uppercase tracking-[0.35em] text-accent">
                  The Founder&apos;s POV
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
                    For years, I found myself telling my friends about the importance
                    of doing things that truly matter. I wanted us to make an impact
                    together, even though I had not yet started making one myself.
                    At the time, I blamed many things for the lack of progress &mdash;
                    especially my school.
                  </p>
                  <p>
                    Everything changed one night. During a call with my mentor and
                    brother, he shared something that reshaped the way I saw success
                    and responsibility. After listening carefully, he told me something
                    that stayed with me: &ldquo;How do you expect them to follow you
                    when you haven&apos;t given them a reason to &mdash; when you
                    haven&apos;t shown them what success looks like?&rdquo;
                  </p>
                  <p>
                    That moment changed my perspective completely. I realized that
                    instead of blaming others, I needed to lead by example. I made a
                    promise to myself that night: I would stop blaming circumstances
                    and start creating solutions.
                  </p>
                  <p>
                    I also understood something important &mdash; many students were
                    facing the same challenge I once faced. The real problem was not a
                    lack of passion or potential. It was a lack of exposure, mentorship,
                    and access to the knowledge needed to grow and make meaningful
                    contributions to society.
                  </p>
                  <p>
                    That realization became the foundation for InspireED. After days of
                    brainstorming ideas and possible names, I eventually came across the
                    name InspireED, and it immediately felt right. It represented exactly
                    what I wanted to build &mdash; a platform that inspires students and
                    equips them with the education, guidance, and opportunities they need
                    to succeed.
                  </p>
                  <p>
                    Not everyone believed in the idea at first. When I shared it with some
                    classmates, many ignored it. But rather than discouraging me, their
                    reaction strengthened my resolve to keep building.
                  </p>
                  <p>
                    Today, InspireED is more than an idea. It is a growing platform
                    dedicated to empowering students through mentorship sessions,
                    learning opportunities, and a community that encourages young people
                    to discover their potential and make a positive impact.
                  </p>
                  <p className="italic text-dark/90 font-serif text-lg md:text-xl">
                    &mdash; Raphael Ogundipe
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.4} className="mt-16">
            <p className="text-center text-lg leading-relaxed text-dark/60 font-sans md:text-xl max-w-3xl mx-auto italic">
              InspireED was born from a simple belief: every student deserves the
              opportunity to learn, grow, and make a meaningful impact.
            </p>
          </ScrollReveal>

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
            {/* Vision */}
            <ScrollReveal
              delay={0.1}
              className="md:border-r md:border-dark/10 md:pr-16"
            >
              <h3 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Vision
              </h3>
              <p className="mt-6 text-base leading-[1.8] text-dark/65 font-sans md:text-lg">
                To inspire and empower students to discover their potential, by
                bridging the gap between students and mentorship exposure, nurture
                their passion, and build the right mindset for success.
              </p>
            </ScrollReveal>

            {/* Divider — horizontal on mobile */}
            <div className="h-px w-full bg-dark/10 md:hidden" />

            {/* Mission */}
            <ScrollReveal delay={0.3} className="md:pl-16">
              <h3 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Mission
              </h3>
              <p className="mt-6 text-base leading-[1.8] text-dark/65 font-sans md:text-lg">
                To raise giants of a new generation, changemakers and problem solvers
                that are fed with the right information that fosters success, growth,
                and are ready to make an impact, solve problems, raise solutions and
                provide help to others. To empower every young student in Nigeria,
                Africa and abroad!
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
              <a
                href="https://chat.whatsapp.com/De8dAQTc8rE4divhzVV7WG?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-4 font-sans text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream/50 hover:bg-cream/5"
              >
                Join Community
              </a>
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

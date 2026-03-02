"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import Marquee from "@/components/animations/Marquee";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import LineReveal from "@/components/animations/LineReveal";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const studySessions = [
  {
    title: "Weekly Tutoring",
    description:
      "Small-group sessions covering Math, Science, English, and more. Experienced tutors deliver personalized support so every student builds confidence and masters key concepts.",
    schedule: "Tue & Thu, 4 -- 6 PM",
  },
  {
    title: "Exam Preparation",
    description:
      "Intensive review sessions before major exams. We cover test-taking strategies, targeted practice problems, and deep review of challenging topics.",
    schedule: "Bi-weekly Sat, 10 AM -- 1 PM",
  },
  {
    title: "Study Groups",
    description:
      "Peer-led collaborative environments where students share insights, work through problems together, and strengthen understanding through discussion.",
    schedule: "Every Wed, 3:30 -- 5:30 PM",
  },
];

const workshops = [
  {
    title: "Career Readiness",
    description:
      "Resume building, interview techniques, professional etiquette, and long-term career planning to enter the workforce with confidence.",
  },
  {
    title: "Financial Literacy",
    description:
      "Budgeting, saving strategies, understanding credit, and an introduction to investments and wealth building.",
  },
  {
    title: "Health & Wellness",
    description:
      "Mental health awareness, stress management, physical fitness, and nutrition education for a balanced lifestyle.",
  },
  {
    title: "Digital Skills",
    description:
      "Hands-on coding basics, digital literacy, social media management, and essential technology tools for school and work.",
  },
];

const events = [
  {
    title: "Annual Youth Summit",
    description:
      "Our flagship multi-day conference bringing together inspiring speakers, hands-on workshops, and networking opportunities for young leaders.",
    date: "Jul 2026",
  },
  {
    title: "Networking Events",
    description:
      "Connect with professionals, mentors, and peers. Build relationships that open doors to internships, mentorships, and careers.",
    date: "Monthly",
  },
  {
    title: "Community Service Days",
    description:
      "Give back while developing leadership, teamwork, and project management skills alongside local partner organizations.",
    date: "Apr 12",
  },
];

/* ─────────────────────────────────────────────
   SECTION INDEX COMPONENT
   ───────────────────────────────────────────── */

function SectionIndex({ index }: { index: string }) {
  return (
    <span className="font-serif text-sm tracking-wider text-dark/30">
      {index}
    </span>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ProgramsPage() {
  return (
    <main className="bg-cream text-dark">
      {/* ── HEADER ──────────────────────────────── */}
      <section className="px-6 pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-dark/40">
              What we offer
            </p>
          </ScrollReveal>

          <h1 className="font-serif text-[clamp(2.75rem,8vw,7rem)] font-normal leading-[0.95] tracking-tight text-dark">
            <TextReveal>Programs</TextReveal>
            <br />
            <span className="italic text-accent">
              <TextReveal delay={0.4}>&amp; Sessions</TextReveal>
            </span>
          </h1>

          <ScrollReveal delay={0.6}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-dark/60 md:text-xl">
              Diverse learning opportunities, hands-on workshops, and community
              events designed to unlock every student&apos;s potential.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────── */}
      <section className="border-y border-dark/10 py-5">
        <Marquee
          items={[
            "TUTORING",
            "WORKSHOPS",
            "CAREER SKILLS",
            "EVENTS",
            "MENTORSHIP",
            "COMMUNITY",
          ]}
          separator="&bull;"
          className="text-sm font-medium uppercase tracking-[0.25em] text-dark/50"
        />
      </section>

      {/* ── 01 STUDY SESSIONS ──────────────────── */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex items-end justify-between gap-8 md:mb-20">
            <div>
              <ScrollReveal>
                <SectionIndex index="01" />
              </ScrollReveal>
              <h2 className="mt-3 font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] tracking-tight">
                <TextReveal>Study Sessions</TextReveal>
              </h2>
            </div>
            <ScrollReveal delay={0.3}>
              <p className="hidden max-w-xs text-sm leading-relaxed text-dark/50 md:block">
                Structured academic support to help students excel. Join a
                session that fits your schedule and learning goals.
              </p>
            </ScrollReveal>
          </div>

          <LineReveal />

          <StaggerContainer staggerDelay={0.15}>
            {studySessions.map((session, i) => (
              <StaggerItem key={session.title}>
                <div className="group py-10 md:py-14">
                  <div className="grid items-start gap-6 md:grid-cols-12 md:gap-8">
                    {/* Number */}
                    <div className="md:col-span-1">
                      <span className="font-serif text-sm text-dark/25">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight md:text-3xl">
                        {session.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-5">
                      <p className="text-sm leading-relaxed text-dark/60 md:text-base">
                        {session.description}
                      </p>
                    </div>

                    {/* Schedule */}
                    <div className="md:col-span-2 md:text-right">
                      <span className="text-xs uppercase tracking-wider text-dark/40">
                        {session.schedule}
                      </span>
                    </div>
                  </div>
                </div>
                <LineReveal delay={0.1 * i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 02 WORKSHOPS ───────────────────────── */}
      <section className="bg-dark px-6 py-24 text-cream md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex items-end justify-between gap-8 md:mb-20">
            <div>
              <ScrollReveal>
                <span className="font-serif text-sm tracking-wider text-cream/30">
                  02
                </span>
              </ScrollReveal>
              <h2 className="mt-3 font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] tracking-tight text-cream">
                <TextReveal>Workshops</TextReveal>
              </h2>
            </div>
            <ScrollReveal delay={0.3}>
              <p className="hidden max-w-xs text-sm leading-relaxed text-cream/40 md:block">
                Interactive sessions that go beyond academics to build
                real-world skills for personal and professional growth.
              </p>
            </ScrollReveal>
          </div>

          <div className="h-px w-full bg-cream/15" />

          <StaggerContainer staggerDelay={0.12}>
            {workshops.map((workshop, i) => (
              <StaggerItem key={workshop.title}>
                <div className="group py-10 md:py-14">
                  <div className="grid items-start gap-6 md:grid-cols-12 md:gap-8">
                    {/* Number */}
                    <div className="md:col-span-1">
                      <span className="font-serif text-sm text-cream/20">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight md:text-3xl">
                        {workshop.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-7">
                      <p className="text-sm leading-relaxed text-cream/50 md:text-base">
                        {workshop.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-cream/15" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 03 EVENTS ──────────────────────────── */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex items-end justify-between gap-8 md:mb-20">
            <div>
              <ScrollReveal>
                <SectionIndex index="03" />
              </ScrollReveal>
              <h2 className="mt-3 font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] tracking-tight">
                <TextReveal>Events</TextReveal>
              </h2>
            </div>
            <ScrollReveal delay={0.3}>
              <p className="hidden max-w-xs text-sm leading-relaxed text-dark/50 md:block">
                Community gatherings that foster meaningful connections and
                create lasting impact.
              </p>
            </ScrollReveal>
          </div>

          <LineReveal />

          <StaggerContainer staggerDelay={0.15}>
            {events.map((event, i) => (
              <StaggerItem key={event.title}>
                <div className="group py-10 md:py-14">
                  <div className="grid items-start gap-6 md:grid-cols-12 md:gap-8">
                    {/* Number */}
                    <div className="md:col-span-1">
                      <span className="font-serif text-sm text-dark/25">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Title + Date Tag */}
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight md:text-3xl">
                        {event.title}
                      </h3>
                      <span className="mt-3 inline-block border border-accent/30 px-3 py-1 text-xs uppercase tracking-wider text-accent">
                        {event.date}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-7">
                      <p className="text-sm leading-relaxed text-dark/60 md:text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
                <LineReveal delay={0.1 * i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="border-t border-dark/10 px-6 py-32 md:py-44">
        <div className="mx-auto max-w-5xl text-center">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-dark/40">
              Get involved
            </p>
          </ScrollReveal>

          <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2.25rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-tight">
            <TextReveal>Join a program</TextReveal>
          </h2>

          <ScrollReveal delay={0.4}>
            <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-dark/50 md:text-lg">
              Take the first step toward growth, learning, and community.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="mt-12">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 border border-dark px-10 py-5 text-sm uppercase tracking-[0.2em] text-dark transition-colors duration-300 hover:bg-dark hover:text-cream"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

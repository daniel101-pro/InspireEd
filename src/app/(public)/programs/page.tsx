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

const featuredPrograms = [
  {
    title: "Learning Sessions & Webinars",
    description:
      "We organize engaging learning sessions and webinars where students interact with experienced professionals, mentors, entrepreneurs, and experts from different industries. These sessions expose students to real-world knowledge, career insights, and practical advice that help them make informed academic and career decisions.",
  },
  {
    title: "Mentorship & Career Guidance",
    description:
      "InspireED connects students with mentors who provide guidance on education, career paths, and personal development. Through mentorship, students gain valuable perspectives from individuals who have experience in their chosen fields, helping them make better decisions about their future.",
  },
  {
    title: "Application & Opportunity Support",
    description:
      "Many students struggle with standing out when applying for opportunities. InspireED helps students learn how to prepare strong applications for scholarships, schools, internships, and leadership opportunities. We guide students on building impressive profiles, communicating their achievements effectively, and presenting themselves confidently.",
  },
  {
    title: "Student Community & Networking",
    description:
      "We have built a growing community where students connect, share ideas, collaborate, and support each other\u2019s growth. Through this community, students gain access to opportunities, resources, and a network of like-minded young people who are passionate about learning and development.",
  },
  {
    title: "High School Ambassadors Program",
    description:
      "Our High School Ambassadors Program empowers passionate students to represent InspireED in their schools and communities. Ambassadors help spread awareness about opportunities, encourage their peers to participate in educational programs, and contribute to building a stronger culture of learning.",
  },
  {
    title: "Youth Empowerment Initiatives",
    description:
      "Beyond our sessions, InspireED runs initiatives and projects focused on empowering young people with knowledge, leadership skills, and the confidence to pursue meaningful impact in their communities.",
  },
];

const workshopFocusAreas = [
  {
    title: "Application & Opportunity Workshops",
    description:
      "Students learn how to create strong applications for scholarships, schools, internships, and leadership opportunities. These workshops teach students how to present their achievements, write compelling personal statements, and stand out.",
  },
  {
    title: "Career Exploration Workshops",
    description:
      "These workshops expose students to different career paths by connecting them with professionals from various industries who share their experiences and guidance.",
  },
  {
    title: "Leadership & Personal Development Workshops",
    description:
      "Students develop essential life skills such as leadership, communication, critical thinking, and confidence.",
  },
  {
    title: "Skills & Knowledge Workshops",
    description:
      "Focused sessions where students learn practical skills such as public speaking, networking, personal branding, and preparing for future opportunities.",
  },
];

const events = [
  {
    title: "Annual Ambassador\u2019s Picnic",
    description:
      "An exclusive event for InspireED ambassadors to connect, celebrate their achievements, and build stronger bonds within the community. The picnic happens every August, offering a relaxed and fun environment for ambassadors to network and share their experiences.",
    date: "August (Annual)",
    cta: { label: "Become an Ambassador", href: "/volunteer" },
  },
  {
    title: "InspireED Partnership Summit",
    description:
      "An annual event bringing together the InspireED initiative, our partners, and collaborators to network, build meaningful connections, and explore new opportunities for impact. The summit is a platform for organizations and individuals to align on shared goals and strengthen their commitment to youth empowerment.",
    date: "Annual",
    cta: { label: "Become a Partner", href: "/contact" },
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
              What we do
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
              Diverse learning opportunities, mentorship programs, and community
              initiatives designed to unlock every student&apos;s potential.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────── */}
      <section className="border-y border-dark/10 py-5">
        <Marquee
          items={[
            "SESSIONS",
            "WORKSHOPS",
            "MENTORSHIP",
            "COMMUNITY",
            "AMBASSADORS",
            "EMPOWERMENT",
          ]}
          separator="&bull;"
          className="text-sm font-medium uppercase tracking-[0.25em] text-dark/50"
        />
      </section>

      {/* ── 01 FEATURED PROGRAMS ──────────────────── */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex items-end justify-between gap-8 md:mb-20">
            <div>
              <ScrollReveal>
                <SectionIndex index="01" />
              </ScrollReveal>
              <h2 className="mt-3 font-serif text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.05] tracking-tight">
                <TextReveal>Featured Programs</TextReveal>
              </h2>
            </div>
          </div>

          <LineReveal />

          <StaggerContainer staggerDelay={0.15}>
            {featuredPrograms.map((program, i) => (
              <StaggerItem key={program.title}>
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
                        {program.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-7">
                      <p className="text-sm leading-relaxed text-dark/60 md:text-base">
                        {program.description}
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

      {/* ── 02 WORKSHOPS ───────────────────────── */}
      <section className="bg-dark px-6 py-24 text-cream md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 md:mb-20">
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
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/50 md:text-lg">
                InspireED Workshops are interactive learning experiences designed
                to equip students with practical knowledge, skills, and exposure
                beyond the classroom. Unlike traditional lectures, our workshops
                allow students to actively engage with mentors, professionals, and
                industry experts through discussions, activities, and real-life
                problem solving.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mb-10 font-sans text-xs uppercase tracking-[0.35em] text-cream/30">
              What our workshops focus on
            </p>
          </ScrollReveal>

          <div className="h-px w-full bg-cream/15" />

          <StaggerContainer staggerDelay={0.12}>
            {workshopFocusAreas.map((workshop, i) => (
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

          <ScrollReveal delay={0.4} className="mt-10">
            <p className="text-base leading-relaxed text-cream/40 md:text-lg max-w-2xl">
              Our workshops create a learning environment where students gain
              knowledge, confidence, mentorship, and exposure &mdash; helping them
              become better prepared for opportunities and leadership in the future.
            </p>
          </ScrollReveal>
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

                    {/* Description + CTA */}
                    <div className="md:col-span-7">
                      <p className="text-sm leading-relaxed text-dark/60 md:text-base">
                        {event.description}
                      </p>
                      <Link
                        href={event.cta.href}
                        className="group/link mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-accent transition-colors hover:text-dark"
                      >
                        {event.cta.label}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </Link>
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
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 border border-dark px-10 py-5 text-sm uppercase tracking-[0.2em] text-dark transition-colors duration-300 hover:bg-dark hover:text-cream"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="https://chat.whatsapp.com/De8dAQTc8rE4divhzVV7WG?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-accent px-10 py-5 text-sm uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-accent/90"
                >
                  Join community
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

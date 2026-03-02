"use client";

import Link from "next/link";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import LineReveal from "@/components/animations/LineReveal";

/* ───────────────────── Data ───────────────────── */

const steps = [
  {
    num: "01",
    title: "Apply",
    description:
      "Submit your application through our simple online form. Share your goals, interests, and aspirations.",
  },
  {
    num: "02",
    title: "Match",
    description:
      "We pair you with a compatible mentor based on your interests, goals, and personality for a meaningful connection.",
  },
  {
    num: "03",
    title: "Meet",
    description:
      "Begin regular one-on-one sessions with your mentor. Build a relationship grounded in trust and mutual respect.",
  },
  {
    num: "04",
    title: "Grow",
    description:
      "Set goals, track progress, and celebrate achievements together. Watch your confidence develop with every milestone.",
  },
];

const menteeBenefits = [
  "One-on-one guidance tailored to your unique goals and challenges",
  "Real-world knowledge about industries, careers, and professional growth",
  "Access to a network of professionals who open doors to new opportunities",
  "Confidence built through encouragement, feedback, and supported growth",
];

const mentorBenefits = [
  "Make a meaningful difference in a young person's life through shared wisdom",
  "Strengthen your own leadership, communication, and coaching abilities",
  "Connect with a community of like-minded professionals and changemakers",
  "Create a ripple effect of positive change that extends far beyond one mentorship",
];

const partnershipTypes = [
  {
    title: "Corporate",
    description:
      "Sponsor programs, provide resources, and engage employees in volunteer mentorship.",
  },
  {
    title: "Schools",
    description:
      "Deliver tutoring, workshops, and mentorship programs tailored to your students.",
  },
  {
    title: "Community",
    description:
      "Collaborate on events, initiatives, and outreach to build stronger communities.",
  },
  {
    title: "Individual",
    description:
      "Support youth development with generous contributions that fund scholarships and resources.",
  },
];

/* ───────────────────── Page ───────────────────── */

export default function MentorshipPage() {
  return (
    <main>
      {/* ─── 1. Header ─── */}
      <section className="bg-cream px-6 pb-20 pt-32 sm:pt-40 md:pb-28">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              Guidance &middot; Collaboration &middot; Growth
            </p>
          </ScrollReveal>

          <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-tight text-dark sm:text-7xl lg:text-8xl">
            <TextReveal delay={0.15}>Mentorship</TextReveal>
            <br />
            <span className="italic text-accent">
              <TextReveal delay={0.5}>&amp; Partnership</TextReveal>
            </span>
          </h1>

          <ScrollReveal delay={0.6}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-dark/60 sm:text-xl">
              Building meaningful connections between experienced professionals
              and aspiring youth. Together, we create pathways to success.
            </p>
          </ScrollReveal>

          <LineReveal className="mt-16" delay={0.8} />
        </div>
      </section>

      {/* ─── 2. How It Works — Vertical Timeline ─── */}
      <section className="bg-cream px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              The Process
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-dark sm:text-5xl lg:text-6xl">
              How It Works
            </h2>
          </ScrollReveal>

          <StaggerContainer className="mt-16 md:mt-20" staggerDelay={0.15}>
            {steps.map((step, i) => (
              <StaggerItem key={step.num}>
                <div className="relative flex gap-8 pb-16 last:pb-0 md:gap-12">
                  {/* Vertical line connector */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[1.1rem] top-12 bottom-0 w-px bg-dark/10 md:left-[1.6rem]" />
                  )}

                  {/* Number */}
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-dark/20 bg-cream md:h-13 md:w-13">
                    <span className="text-xs font-medium tracking-wider text-dark/40 md:text-sm">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-0.5 md:pt-1.5">
                    <h3 className="font-serif text-2xl tracking-tight text-dark md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-dark/50">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 3. Benefits — Two-Column Split ─── */}
      <section className="bg-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              Why Join
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Benefits
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-0 md:mt-20 md:grid-cols-[1fr_auto_1fr]">
            {/* For Mentees */}
            <ScrollReveal direction="left" className="pr-0 md:pr-12">
              <h3 className="font-serif text-2xl italic tracking-tight text-cream/90 md:text-3xl">
                For Mentees
              </h3>
              <ul className="mt-8 space-y-6">
                {menteeBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-base leading-relaxed text-cream/60">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Vertical separator */}
            <div className="my-12 flex items-stretch justify-center md:my-0">
              <LineReveal className="h-px w-full md:hidden" />
              <div className="hidden md:block">
                <div className="h-full w-px bg-cream/10" />
              </div>
            </div>

            {/* For Mentors */}
            <ScrollReveal direction="right" className="pl-0 md:pl-12">
              <h3 className="font-serif text-2xl italic tracking-tight text-cream/90 md:text-3xl">
                For Mentors
              </h3>
              <ul className="mt-8 space-y-6">
                {mentorBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-base leading-relaxed text-cream/60">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 4. Partnership Types — Editorial List ─── */}
      <section className="bg-cream px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              Collaborate
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-dark sm:text-5xl lg:text-6xl">
              Partnership Types
            </h2>
          </ScrollReveal>

          <StaggerContainer className="mt-16 md:mt-20" staggerDelay={0.12}>
            {partnershipTypes.map((type, i) => (
              <StaggerItem key={type.title}>
                {i === 0 && <LineReveal className="mb-0" />}
                <div className="group flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-12 md:py-10">
                  <h3 className="font-serif text-3xl tracking-tight text-dark md:text-4xl">
                    {type.title}
                  </h3>
                  <p className="max-w-md text-base leading-relaxed text-dark/50 sm:text-right">
                    {type.description}
                  </p>
                </div>
                <LineReveal delay={0.05 * i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 5. CTA ─── */}
      <section className="bg-dark px-6 py-28 md:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              Get Involved
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-normal leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Ready to shape the next generation?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/50">
              Whether you want to guide young minds as a mentor or collaborate as
              a partner, we would love to hear from you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 border border-cream bg-cream px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-dark transition-colors hover:bg-accent hover:border-accent hover:text-cream"
                >
                  Become a Mentor
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 12 12"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M1 6h10M7 2l4 4-4 4" />
                  </svg>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 border border-cream/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-cream transition-colors hover:border-accent hover:text-accent"
                >
                  Partner with Us
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 12 12"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M1 6h10M7 2l4 4-4 4" />
                  </svg>
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

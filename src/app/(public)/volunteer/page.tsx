"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import LineReveal from "@/components/animations/LineReveal";
import Marquee from "@/components/animations/Marquee";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const reasons = [
  {
    title: "Make a Real Impact",
    description:
      "Directly shape the futures of young learners in your community. Every hour you give creates ripple effects that last generations.",
  },
  {
    title: "Build Leadership Skills",
    description:
      "Develop mentoring, communication, and organizational abilities that strengthen both your personal growth and professional trajectory.",
  },
  {
    title: "Join a Community",
    description:
      "Connect with a network of passionate changemakers who share your commitment to educational equity and collective progress.",
  },
  {
    title: "Gain Experience",
    description:
      "Earn references, build your resume, and forge meaningful connections that open doors to future opportunities in education and beyond.",
  },
];

const roles = [
  {
    title: "Tutor",
    description:
      "Help students master core academic subjects through one-on-one or small group sessions tailored to individual learning needs.",
    commitment: "2 -- 4 hrs / week",
  },
  {
    title: "Workshop Facilitator",
    description:
      "Lead engaging, skill-building workshops on topics like public speaking, financial literacy, creative writing, and STEM.",
    commitment: "3 -- 5 hrs / week",
  },
  {
    title: "Event Coordinator",
    description:
      "Plan, organize, and execute community events, fundraisers, and educational showcases that bring people together.",
    commitment: "4 -- 6 hrs / week",
  },
  {
    title: "Admin Support",
    description:
      "Assist with day-to-day operations including scheduling, data entry, communications, and resource management.",
    commitment: "2 -- 3 hrs / week",
  },
  {
    title: "Outreach",
    description:
      "Spread the word about InspireED, recruit new participants and volunteers, and build partnerships with local organizations.",
    commitment: "2 -- 4 hrs / week",
  },
];

const ambassadorBenefits = [
  "Official Certificate of Recognition",
  "Personalized Recommendation Letters",
  "Exclusive Networking Events & Speaker Series",
  "Leadership Training in Event Planning & Public Speaking",
  "Direct Mentorship from InspireED Leadership",
  "Priority Access to Paid Internship Opportunities",
];

const roleOptions = [
  "Tutor",
  "Workshop Facilitator",
  "Event Coordinator",
  "Administrative Support",
  "Outreach Volunteer",
  "Ambassador",
];

const availabilityOptions = ["Weekday Mornings", "Weekday Afternoons", "Evenings", "Weekends"];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roleInterest: "",
    whyVolunteer: "",
    availability: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleAvailabilityChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability.includes(option)
        ? prev.availability.filter((a) => a !== option)
        : [...prev.availability, option],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream text-dark">
      {/* ============================================================ */}
      {/*  1. HEADER                                                    */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-cream pb-20 pt-32 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Eyebrow */}
          <ScrollReveal delay={0}>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
              Join the Movement
            </p>
          </ScrollReveal>

          {/* Main heading */}
          <h1 className="mt-6 font-serif text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.9] tracking-tight text-dark">
            <TextReveal delay={0.15}>Volunteer</TextReveal>
            <br />
            <span className="inline-block">
              <TextReveal delay={0.35}>&</TextReveal>
            </span>{" "}
            <span className="italic">
              <TextReveal delay={0.45}>Ambassador</TextReveal>
            </span>
          </h1>

          {/* Subtitle */}
          <ScrollReveal delay={0.6} className="mt-8 max-w-xl">
            <p className="font-sans text-lg leading-relaxed text-dark/60">
              Whether you have an hour a week or want to lead the charge, there
              is a place for you here. Give your time, grow your skills, and
              help shape the next generation.
            </p>
          </ScrollReveal>
        </div>

        {/* Decorative line */}
        <div className="mx-auto mt-16 max-w-7xl px-6">
          <LineReveal delay={0.8} />
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. WHY VOLUNTEER                                             */}
      {/* ============================================================ */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left label */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
                  Why Volunteer
                </p>
                <h2 className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight text-dark sm:text-5xl">
                  Four reasons
                  <br />
                  to join us
                </h2>
              </ScrollReveal>
            </div>

            {/* Right list */}
            <div className="lg:col-span-8">
              <StaggerContainer staggerDelay={0.12}>
                {reasons.map((reason, i) => (
                  <StaggerItem key={reason.title}>
                    <div className="group py-8">
                      <div className="flex gap-6 sm:gap-10">
                        {/* Index number */}
                        <span className="font-serif text-sm text-dark/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <div className="flex-1">
                          <h3 className="font-serif text-2xl font-normal tracking-tight text-dark transition-colors group-hover:text-accent sm:text-3xl">
                            {reason.title}
                          </h3>
                          <p className="mt-3 max-w-lg font-sans text-base leading-relaxed text-dark/50">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    {i < reasons.length - 1 && <LineReveal delay={0.1 * i} />}
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. ROLES                                                     */}
      {/* ============================================================ */}
      <section id="roles" className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <LineReveal />

          <ScrollReveal className="mt-16">
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
              Volunteer Roles
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-dark sm:text-5xl lg:text-6xl">
              Find your fit
            </h2>
          </ScrollReveal>

          <div className="mt-16">
            <StaggerContainer staggerDelay={0.1}>
              {roles.map((role, i) => (
                <StaggerItem key={role.title}>
                  <LineReveal delay={0.05 * i} />
                  <div className="group grid items-baseline gap-4 py-8 sm:grid-cols-12 sm:gap-8">
                    {/* Number */}
                    <div className="sm:col-span-1">
                      <span className="font-serif text-sm text-dark/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Role name */}
                    <div className="sm:col-span-3">
                      <h3 className="font-serif text-2xl font-normal tracking-tight text-dark transition-colors group-hover:text-accent sm:text-3xl">
                        {role.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="sm:col-span-5">
                      <p className="font-sans text-base leading-relaxed text-dark/50">
                        {role.description}
                      </p>
                    </div>

                    {/* Commitment */}
                    <div className="sm:col-span-3 sm:text-right">
                      <span className="font-sans text-sm text-dark/30">
                        {role.commitment}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <LineReveal />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. AMBASSADOR PROGRAM                                        */}
      {/* ============================================================ */}
      <section className="bg-dark py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left column */}
            <ScrollReveal>
              <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
                Ambassador Program
              </p>
              <h2 className="mt-6 font-serif text-5xl font-light leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
                Become an
                <br />
                <span className="italic">Ambassador</span>
              </h2>
              <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-cream/50">
                Ambassadors are dedicated leaders who represent InspireED within
                their schools, campuses, and local communities. They go beyond
                volunteering by actively championing our mission and inspiring
                others to get involved.
              </p>
            </ScrollReveal>

            {/* Right column -- benefits */}
            <div>
              <ScrollReveal delay={0.2}>
                <p className="mb-8 font-sans text-xs uppercase tracking-[0.35em] text-cream/30">
                  What you receive
                </p>
              </ScrollReveal>
              <StaggerContainer staggerDelay={0.08}>
                {ambassadorBenefits.map((benefit, i) => (
                  <StaggerItem key={benefit}>
                    <div className="border-b border-cream/10 py-5">
                      <div className="flex items-baseline gap-6">
                        <span className="font-serif text-xs text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="font-sans text-base text-cream/80">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <ScrollReveal delay={0.5} className="mt-10">
                <a
                  href="#apply"
                  className="group inline-flex items-center gap-3 font-sans text-sm uppercase tracking-[0.2em] text-accent transition-colors hover:text-cream"
                >
                  Apply now
                  <span className="inline-block h-px w-8 bg-accent transition-all group-hover:w-12 group-hover:bg-cream" />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24">
          <Marquee
            items={[
              "Leadership",
              "Community",
              "Impact",
              "Growth",
              "Mentorship",
              "Equity",
              "Service",
              "Education",
            ]}
            separator="/"
            className="font-serif text-2xl text-cream/10 sm:text-3xl"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. APPLICATION FORM                                          */}
      {/* ============================================================ */}
      <section id="apply" className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
              Application
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-dark sm:text-5xl lg:text-6xl">
              Get involved
            </h2>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-dark/50">
              Fill out the form below and our team will reach out to you within
              48 hours to discuss the next steps.
            </p>
          </ScrollReveal>

          <LineReveal className="mt-12" />

          {submitted ? (
            <ScrollReveal className="mt-16">
              <div className="py-20 text-center">
                <h3 className="font-serif text-4xl font-light tracking-tight text-dark sm:text-5xl">
                  Thank you.
                </h3>
                <p className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-dark/50">
                  Your application has been received. We will review your
                  submission and get back to you soon.
                </p>
                <a
                  href="/"
                  className="mt-10 inline-flex items-center gap-3 font-sans text-sm uppercase tracking-[0.2em] text-accent transition-colors hover:text-dark"
                >
                  Return home
                  <span className="inline-block h-px w-8 bg-accent" />
                </a>
              </div>
            </ScrollReveal>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            >
              {/* Row 1: Name, Email, Phone */}
              <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block font-sans text-xs uppercase tracking-[0.2em] text-dark/40"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Jane Doe"
                    className="mt-4 w-full border-b border-dark/20 bg-transparent pb-3 font-sans text-base text-dark outline-none transition-colors placeholder:text-dark/20 focus:border-accent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs uppercase tracking-[0.2em] text-dark/40"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="jane@example.com"
                    className="mt-4 w-full border-b border-dark/20 bg-transparent pb-3 font-sans text-base text-dark outline-none transition-colors placeholder:text-dark/20 focus:border-accent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-xs uppercase tracking-[0.2em] text-dark/40"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(555) 000-0000"
                    className="mt-4 w-full border-b border-dark/20 bg-transparent pb-3 font-sans text-base text-dark outline-none transition-colors placeholder:text-dark/20 focus:border-accent"
                  />
                </div>
              </div>

              {/* Row 2: Role Interest */}
              <div className="mt-14">
                <label
                  htmlFor="roleInterest"
                  className="block font-sans text-xs uppercase tracking-[0.2em] text-dark/40"
                >
                  Role Interest *
                </label>
                <select
                  id="roleInterest"
                  required
                  value={formData.roleInterest}
                  onChange={(e) =>
                    setFormData({ ...formData, roleInterest: e.target.value })
                  }
                  className="mt-4 w-full appearance-none border-b border-dark/20 bg-transparent pb-3 font-sans text-base text-dark outline-none transition-colors focus:border-accent"
                >
                  <option value="" disabled>
                    Select a role...
                  </option>
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 3: Why volunteer */}
              <div className="mt-14">
                <label
                  htmlFor="whyVolunteer"
                  className="block font-sans text-xs uppercase tracking-[0.2em] text-dark/40"
                >
                  Why do you want to volunteer? *
                </label>
                <textarea
                  id="whyVolunteer"
                  required
                  rows={4}
                  value={formData.whyVolunteer}
                  onChange={(e) =>
                    setFormData({ ...formData, whyVolunteer: e.target.value })
                  }
                  placeholder="Tell us about your motivation, experience, and what you hope to contribute..."
                  className="mt-4 w-full resize-none border-b border-dark/20 bg-transparent pb-3 font-sans text-base leading-relaxed text-dark outline-none transition-colors placeholder:text-dark/20 focus:border-accent"
                />
              </div>

              {/* Row 4: Availability */}
              <fieldset className="mt-14">
                <legend className="font-sans text-xs uppercase tracking-[0.2em] text-dark/40">
                  Availability *
                </legend>
                <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
                  {availabilityOptions.map((option) => (
                    <label
                      key={option}
                      className="group flex cursor-pointer items-center gap-3"
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center border transition-colors ${
                          formData.availability.includes(option)
                            ? "border-accent bg-accent"
                            : "border-dark/20 bg-transparent group-hover:border-dark/40"
                        }`}
                      >
                        {formData.availability.includes(option) && (
                          <svg
                            className="h-3 w-3 text-cream"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </span>
                      <input
                        type="checkbox"
                        checked={formData.availability.includes(option)}
                        onChange={() => handleAvailabilityChange(option)}
                        className="sr-only"
                      />
                      <span className="font-sans text-sm text-dark/60 transition-colors group-hover:text-dark">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Submit */}
              <div className="mt-16">
                <MagneticButton>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 bg-dark px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-accent"
                  >
                    Submit Application
                    <span className="inline-block h-px w-6 bg-cream/40 transition-all group-hover:w-10 group-hover:bg-cream" />
                  </button>
                </MagneticButton>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}

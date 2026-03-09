"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import LineReveal from "@/components/animations/LineReveal";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const contactInfo = [
  {
    label: "Email",
    value: "inspireed.org@gmail.com",
    href: "mailto:inspireed.org@gmail.com",
  },
  {
    label: "Phone",
    value: "+(234) 8109198312",
    href: "tel:+2348109198312",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/inspireed_connect?igsh=cXQ4bnlqeThsejZx",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/inspired-initiative1/",
  },
  {
    label: "WhatsApp Community",
    href: "https://chat.whatsapp.com/De8dAQTc8rE4divhzVV7WG?mode=gi_t",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Program Information",
  "Volunteering",
  "Mentorship",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <main className="bg-cream">
      {/* ─── SECTION 1: Header ─── */}
      <section className="relative overflow-hidden px-6 pt-40 pb-24 sm:pt-48 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Decorative index */}
          <ScrollReveal delay={0}>
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-dark/40">
              Contact
            </span>
          </ScrollReveal>

          {/* Main heading */}
          <h1 className="mt-6 font-serif text-6xl font-light leading-[1.05] tracking-tight text-dark sm:text-8xl lg:text-9xl">
            <TextReveal delay={0.1}>Get in</TextReveal>
            <br />
            <TextReveal delay={0.3}>Touch</TextReveal>
          </h1>

          {/* Subtitle */}
          <ScrollReveal delay={0.6} className="mt-8 max-w-md">
            <p className="font-sans text-base leading-relaxed text-dark/50 sm:text-lg">
              Whether you have a question, want to volunteer, or are exploring a
              partnership&mdash;we&apos;re here and ready to listen.
            </p>
          </ScrollReveal>
        </div>

        {/* Decorative line */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20">
          <LineReveal delay={0.8} />
        </div>
      </section>

      {/* ─── SECTION 2: Contact Details + Form ─── */}
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5">
            <StaggerContainer staggerDelay={0.12}>
              {contactInfo.map((item, index) => (
                <StaggerItem key={item.label}>
                  <div className="py-6">
                    <span className="block font-sans text-xs tracking-[0.2em] uppercase text-dark/40">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-2 block font-sans text-lg text-dark transition-colors duration-300 hover:text-accent sm:text-xl"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 whitespace-pre-line font-sans text-lg text-dark sm:text-xl">
                        {item.value}
                      </p>
                    )}
                  </div>
                  {index < contactInfo.length - 1 && (
                    <LineReveal delay={0.2 + index * 0.1} />
                  )}
                </StaggerItem>
              ))}

              {/* Social Links */}
              <StaggerItem>
                <LineReveal delay={0.4} />
                <div className="pt-8">
                  <span className="block font-sans text-xs tracking-[0.2em] uppercase text-dark/40">
                    Social
                  </span>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative font-sans text-base text-dark transition-colors duration-300 hover:text-accent"
                      >
                        {social.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                      </a>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ScrollReveal delay={0.2} direction="up">
              <div>
                <span className="block font-sans text-xs tracking-[0.2em] uppercase text-dark/40">
                  Send a message
                </span>
                <h2 className="mt-3 font-serif text-3xl font-light text-dark sm:text-4xl">
                  Write to us
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="mt-12 space-y-10">
                {/* Full Name */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/40 transition-colors duration-300 group-focus-within:text-accent"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="mt-3 w-full border-b border-dark/20 bg-transparent pb-3 font-sans text-lg text-dark placeholder:text-dark/25 transition-colors duration-300 focus:border-accent focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/40 transition-colors duration-300 group-focus-within:text-accent"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-3 w-full border-b border-dark/20 bg-transparent pb-3 font-sans text-lg text-dark placeholder:text-dark/25 transition-colors duration-300 focus:border-accent focus:outline-none"
                  />
                </div>

                {/* Subject */}
                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/40 transition-colors duration-300 group-focus-within:text-accent"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-3 w-full appearance-none border-b border-dark/20 bg-transparent pb-3 font-sans text-lg text-dark transition-colors duration-300 focus:border-accent focus:outline-none"
                  >
                    <option value="" disabled className="text-dark/25">
                      Select a subject
                    </option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/40 transition-colors duration-300 group-focus-within:text-accent"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="mt-3 w-full resize-none border-b border-dark/20 bg-transparent pb-3 font-sans text-lg text-dark placeholder:text-dark/25 transition-colors duration-300 focus:border-accent focus:outline-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <MagneticButton strength={0.15}>
                    <button
                      type="submit"
                      disabled={submitted}
                      className="group relative inline-flex items-center gap-3 overflow-hidden border border-dark bg-dark px-10 py-4 font-sans text-sm tracking-[0.15em] uppercase text-cream transition-all duration-500 hover:bg-accent hover:border-accent disabled:opacity-60"
                    >
                      <span className="relative z-10">
                        {submitted ? "Message Sent" : "Send Message"}
                      </span>
                      <motion.span
                        className="relative z-10 inline-block"
                        animate={submitted ? { rotate: 0 } : {}}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        &rarr;
                      </motion.span>
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Large Typography CTA ─── */}
      <section className="relative overflow-hidden bg-dark px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-7xl text-center">
          <ScrollReveal delay={0.1}>
            <span className="block font-sans text-xs tracking-[0.3em] uppercase text-cream/30">
              Let&apos;s connect
            </span>
          </ScrollReveal>

          <h2 className="mx-auto mt-8 max-w-4xl font-serif text-5xl font-light leading-[1.1] text-cream sm:text-7xl lg:text-8xl">
            <TextReveal className="text-cream" delay={0.2}>
              We&apos;d love to
            </TextReveal>
            <br />
            <TextReveal className="text-cream" delay={0.5}>
              hear from you
            </TextReveal>
          </h2>

          <ScrollReveal delay={0.8} className="mt-12">
            <MagneticButton strength={0.2}>
              <a
                href="mailto:inspireed.org@gmail.com"
                className="group relative inline-block font-serif text-3xl text-accent italic transition-colors duration-300 hover:text-cream sm:text-4xl lg:text-5xl"
              >
                inspireed.org@gmail.com
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-cream transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal delay={1.0} className="mt-16">
            <p className="font-sans text-sm tracking-wide text-cream/30">
              We typically respond within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

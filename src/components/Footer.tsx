"use client";

import Link from "next/link";
import ScrollReveal from "./animations/ScrollReveal";
import LineReveal from "./animations/LineReveal";
import TextReveal from "./animations/TextReveal";

const links = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/mentorship", label: "Mentorship" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        {/* Large CTA */}
        <ScrollReveal>
          <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">
            <TextReveal>Let&apos;s build</TextReveal>
            <br />
            <span className="italic text-accent">
              <TextReveal delay={0.3}>something great.</TextReveal>
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-12">
          <LineReveal className="opacity-30" />
        </div>

        <div className="mt-12 flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Links */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/40 transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-2 text-sm text-cream/40">
              <p>info@inspireed.org</p>
              <p>(555) 123-4567</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16">
          <LineReveal className="opacity-10" />
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-cream/20">
            &copy; {new Date().getFullYear()} InspireED Initiative
          </p>
          <p className="text-xs text-cream/20">
            Website crafted by{" "}
            <a
              href="https://forgeafrica.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 transition-colors hover:text-accent"
            >
              Forge Africa
            </a>
          </p>
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-cream/40 transition-colors hover:text-cream"
          >
            Inspire<span className="font-serif italic text-accent">ED</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

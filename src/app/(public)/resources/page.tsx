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
import { useDashboard } from "@/context/DashboardContext";
import { getSortedFaqs, formatArticleDate } from "@/lib/siteContent";
import type { Article } from "@/types/dashboard";
import FormModal from "@/components/dashboard/FormModal";

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ResourcesPage() {
  const { data } = useDashboard();
  const resources = data.resources;
  const articles = [...data.articles]
    .filter((article) => article.isPublished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const faqs = getSortedFaqs(data);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

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
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block font-sans text-sm font-medium text-accent transition-opacity hover:opacity-60"
                        >
                          Access&thinsp;
                          <span className="text-xs">&rarr;</span>
                        </a>
                      ) : (
                        <span className="text-sm text-dark/30">Coming soon</span>
                      )}
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
              <StaggerItem key={article.id}>
                <div
                  className={`border-t border-cream/10 py-12 md:py-16 ${
                    i === articles.length - 1 ? "border-b border-cream/10" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start md:gap-8">
                    {/* Date */}
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-cream/30 md:col-span-2 md:pt-2">
                      {formatArticleDate(article.date)}
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
                      <button
                        type="button"
                        onClick={() => setSelectedArticle(article)}
                        className="mt-4 inline-block font-sans text-sm font-medium text-accent transition-opacity hover:opacity-60"
                      >
                        Read&thinsp;
                        <span className="text-xs">&rarr;</span>
                      </button>
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
                <div key={faq.id}>
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

      <FormModal
        open={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle?.title ?? "Article"}
      >
        {selectedArticle && (
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-dark/40">
              {formatArticleDate(selectedArticle.date)}
            </p>
            <p className="text-sm leading-relaxed text-dark/60">{selectedArticle.excerpt}</p>
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-dark/80">
              {selectedArticle.content}
            </div>
          </div>
        )}
      </FormModal>
    </main>
  );
}

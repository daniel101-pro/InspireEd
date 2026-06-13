import type { DashboardData, Program } from "@/types/dashboard";

const IMPACT_DESCRIPTIONS = {
  youthImpacted:
    "Through our sessions, community programs, and educational initiatives, InspireED has empowered students with valuable knowledge, exposure, and opportunities for growth.",
  mentorsVolunteers:
    "We have hosted inspiring speakers including professionals, mentors, and industry leaders who share their experiences and insights to guide students on their academic and career journeys.",
  programsDelivered:
    "InspireED has organized engaging virtual sessions focused on helping students understand opportunities, improve their applications, and develop skills needed for future success.",
  communityPartners:
    "Our growing network of passionate volunteers, ambassadors, and students continues to expand, building a supportive community dedicated to learning, mentorship, and positive impact.",
} as const;

export function getActivePrograms(data: DashboardData, type?: Program["type"]) {
  return data.programs.filter(
    (program) => program.isActive && (!type || program.type === type)
  );
}

export function getImpactStats(data: DashboardData) {
  return [
    {
      target: data.stats.youthImpacted,
      suffix: "+",
      label: "Students Empowered",
      description: IMPACT_DESCRIPTIONS.youthImpacted,
    },
    {
      target: data.stats.mentorsVolunteers,
      suffix: "+",
      label: "Expert Speakers & Mentors",
      description: IMPACT_DESCRIPTIONS.mentorsVolunteers,
    },
    {
      target: data.stats.programsDelivered,
      suffix: "+",
      label: "Impactful Learning Sessions",
      description: IMPACT_DESCRIPTIONS.programsDelivered,
    },
    {
      target: data.stats.communityPartners,
      suffix: "+",
      label: "Community Partners",
      description: IMPACT_DESCRIPTIONS.communityPartners,
    },
  ];
}

export function getFeaturedPrograms(data: DashboardData, limit = 3) {
  return getActivePrograms(data, "study-session")
    .slice(0, limit)
    .map((program, index) => ({
      index: String(index + 1).padStart(2, "0"),
      title: program.title,
      description: program.description,
    }));
}

export function getEventCta(title: string) {
  const lower = title.toLowerCase();
  if (lower.includes("ambassador")) {
    return { label: "Become an Ambassador", href: "/volunteer" };
  }
  if (lower.includes("partnership") || lower.includes("partner")) {
    return { label: "Become a Partner", href: "/contact" };
  }
  return { label: "Get in touch", href: "/contact" };
}

export function getPublishedArticles(data: DashboardData) {
  return [...data.articles]
    .filter((article) => article.isPublished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((article) => ({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      date: formatArticleDate(article.date),
    }));
}

export function getSortedFaqs(data: DashboardData) {
  return [...data.faqs].sort((a, b) => a.order - b.order);
}

export function getGalleryCategories(data: DashboardData) {
  const categories = [...new Set(data.gallery.map((image) => image.category))];
  return ["All", ...categories];
}

export function formatArticleDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

import { promises as fs } from "fs";
import path from "path";
import { seedData } from "@/data/seed";
import type { DashboardData } from "@/types/dashboard";

const CONTENT_FILE = path.join(process.cwd(), "data", "site-content.json");

function mergeWithSeed(parsed: Partial<DashboardData>): DashboardData {
  return {
    ...seedData,
    ...parsed,
    programs: parsed.programs ?? seedData.programs,
    volunteers: parsed.volunteers ?? seedData.volunteers,
    articles: parsed.articles ?? seedData.articles,
    faqs: parsed.faqs ?? seedData.faqs,
    resources: parsed.resources ?? seedData.resources,
    teamMembers: parsed.teamMembers ?? seedData.teamMembers,
    partners: parsed.partners ?? seedData.partners,
    mentorshipApplications: parsed.mentorshipApplications ?? seedData.mentorshipApplications,
    mentorPairs: parsed.mentorPairs ?? seedData.mentorPairs,
    contactMessages: parsed.contactMessages ?? seedData.contactMessages,
    gallery: parsed.gallery ?? seedData.gallery,
    settings: { ...seedData.settings, ...parsed.settings },
    stats: { ...seedData.stats, ...parsed.stats },
    trends: parsed.trends ?? seedData.trends,
  };
}

export async function readContent(): Promise<DashboardData> {
  try {
    const raw = await fs.readFile(CONTENT_FILE, "utf-8");
    return mergeWithSeed(JSON.parse(raw) as Partial<DashboardData>);
  } catch {
    return { ...seedData };
  }
}

export async function writeContent(data: DashboardData): Promise<void> {
  await fs.mkdir(path.dirname(CONTENT_FILE), { recursive: true });
  await fs.writeFile(CONTENT_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function mutateContent(
  mutator: (data: DashboardData) => DashboardData
): Promise<DashboardData> {
  const current = await readContent();
  const next = mutator(current);
  await writeContent(next);
  return next;
}

import type { AnalyticsTrend } from "@/types/dashboard";

export function computeTrendPercent(
  trends: AnalyticsTrend[],
  key: keyof Pick<AnalyticsTrend, "youth" | "volunteers" | "programs">
): string {
  if (trends.length < 2) return "0%";

  const latest = trends[trends.length - 1][key];
  const previous = trends[trends.length - 2][key];

  if (previous === 0) {
    return latest > 0 ? "+100%" : "0%";
  }

  const change = Math.round(((latest - previous) / previous) * 100);
  return `${change >= 0 ? "+" : ""}${change}%`;
}

"use client";

import { useDashboard } from "@/context/DashboardContext";
import PageHeader from "@/components/dashboard/PageHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import MiniChart from "@/components/dashboard/MiniChart";
import StatusBadge from "@/components/dashboard/StatusBadge";

export default function DashboardOverview() {
  const { data, loading } = useDashboard();

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-sm text-dark/40">Loading...</p>
      </div>
    );
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const recentVolunteers = [...data.volunteers]
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
    .slice(0, 5);

  const activePairs = data.mentorPairs.filter((p) => p.status === "active");

  return (
    <div className="space-y-8">
      <PageHeader title="Overview" subtitle={today} />

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          label="Youth Impacted"
          value={data.stats.youthImpacted}
          suffix="+"
          trend="+12%"
        />
        <StatsCard
          label="Mentors & Volunteers"
          value={data.stats.mentorsVolunteers}
          suffix="+"
          trend="+8%"
        />
        <StatsCard
          label="Programs"
          value={data.stats.programsDelivered}
          suffix="+"
          trend="+15%"
        />
        <StatsCard
          label="Partners"
          value={data.stats.communityPartners}
          suffix="+"
          trend="+5%"
        />
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-dark/5 bg-white p-6">
          <h3 className="mb-4 font-serif text-lg">Youth Engagement</h3>
          <MiniChart
            data={data.trends as unknown as Record<string, unknown>[]}
            xKey="month"
            yKey="youth"
            type="area"
          />
        </div>
        <div className="rounded-2xl border border-dark/5 bg-white p-6">
          <h3 className="mb-4 font-serif text-lg">Programs</h3>
          <MiniChart
            data={data.trends as unknown as Record<string, unknown>[]}
            xKey="month"
            yKey="programs"
            type="bar"
          />
        </div>
      </div>

      {/* Recent Applications & Active Mentorship */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Applications */}
        <div className="rounded-2xl border border-dark/5 bg-white p-6">
          <h3 className="mb-4 font-serif text-lg">Recent Applications</h3>
          <div className="space-y-0">
            {recentVolunteers.map((v) => (
              <div
                key={v.id}
                className="flex items-center justify-between border-b border-dark/5 py-3 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-dark">{v.fullName}</p>
                  <p className="text-xs text-dark/40">{v.roleInterest}</p>
                </div>
                <StatusBadge status={v.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Active Mentorship */}
        <div className="rounded-2xl border border-dark/5 bg-white p-6">
          <h3 className="mb-4 font-serif text-lg">Active Mentorship</h3>
          <div className="space-y-0">
            {activePairs.length === 0 ? (
              <p className="py-6 text-center text-sm text-dark/30">
                No active pairs.
              </p>
            ) : (
              activePairs.map((pair) => (
                <div
                  key={pair.id}
                  className="flex items-center justify-between border-b border-dark/5 py-3 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-dark">
                      {pair.mentorName}
                    </p>
                    <p className="text-xs text-dark/40">{pair.menteeName}</p>
                  </div>
                  <StatusBadge status={pair.status} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

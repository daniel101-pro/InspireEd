"use client";

import Counter from "@/components/animations/Counter";

interface StatsCardProps {
  label: string;
  value: number;
  suffix?: string;
  trend?: string;
}

export default function StatsCard({ label, value, suffix, trend }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-dark/5 bg-cream px-6 py-5">
      <div className="flex items-end justify-between gap-4">
        <Counter
          target={value}
          suffix={suffix}
          className="font-serif text-4xl text-dark"
        />
        {trend && (
          <span className="mb-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
            {trend}
          </span>
        )}
      </div>
      <p className="mt-2 text-xs uppercase tracking-widest text-dark/40">
        {label}
      </p>
    </div>
  );
}

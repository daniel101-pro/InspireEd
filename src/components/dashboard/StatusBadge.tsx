"use client";

interface StatusBadgeProps {
  status: string;
}

const statusStyles: Record<string, string> = {
  pending: "border border-dark/20 text-dark/50",
  approved: "bg-accent/10 text-accent",
  active: "bg-accent/10 text-accent",
  matched: "bg-accent/10 text-accent",
  rejected: "bg-dark/5 text-dark/40 line-through",
  completed: "bg-dark/10 text-dark/60",
  paused: "border border-dark/10 text-dark/30",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status] ?? "border border-dark/10 text-dark/40";

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] capitalize leading-tight ${style}`}
    >
      {status}
    </span>
  );
}

"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: { label: string; onClick: () => void };
}

export default function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="font-serif text-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm text-dark/50">{subtitle}</p>
        )}
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

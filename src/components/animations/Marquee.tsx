"use client";

interface MarqueeProps {
  items: string[];
  separator?: string;
  className?: string;
  reverse?: boolean;
}

export default function Marquee({
  items,
  separator = "—",
  className = "",
  reverse = false,
}: MarqueeProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="animate-marquee inline-block"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}

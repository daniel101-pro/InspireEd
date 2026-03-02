"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface MiniChartProps {
  data: Array<Record<string, unknown>>;
  xKey: string;
  yKey: string;
  type?: "area" | "bar";
  color?: string;
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg bg-dark px-3 py-2 text-xs text-cream shadow-lg">
      <p className="text-cream/60">{label}</p>
      <p className="font-medium">{payload[0].value}</p>
    </div>
  );
}

export default function MiniChart({
  data,
  xKey,
  yKey,
  type = "area",
  color = "#1A6B6A",
}: MiniChartProps) {
  const gridStroke = "rgba(13, 13, 13, 0.08)";
  const axisStyle = { fontSize: 11, fill: "rgba(13, 13, 13, 0.35)" };

  return (
    <ResponsiveContainer width="100%" height={240}>
      {type === "area" ? (
        <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -12 }}>
          <defs>
            <linearGradient id={`fill-${yKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.1} />
              <stop offset="100%" stopColor={color} stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis dataKey={xKey} tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke={color}
            strokeWidth={1.5}
            fill={`url(#fill-${yKey})`}
          />
        </AreaChart>
      ) : (
        <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis dataKey={xKey} tick={axisStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey={yKey} fill={color} opacity={0.8} radius={[4, 4, 0, 0]} />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
}

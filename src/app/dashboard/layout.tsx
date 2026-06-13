import type { Metadata } from "next";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardAuthGate from "@/components/dashboard/DashboardAuthGate";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s — Dashboard — InspireED",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardAuthGate>
      <DashboardShell>{children}</DashboardShell>
    </DashboardAuthGate>
  );
}

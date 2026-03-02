import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer & Ambassador",
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

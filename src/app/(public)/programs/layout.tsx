import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Sessions",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

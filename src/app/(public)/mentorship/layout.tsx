import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentorship & Partnership",
};

export default function MentorshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

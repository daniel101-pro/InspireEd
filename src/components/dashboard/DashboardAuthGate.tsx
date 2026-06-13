"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { setAuthToken, getAuthToken } from "@/lib/dashboardAuth";

interface DashboardAuthGateProps {
  children: React.ReactNode;
}

export default function DashboardAuthGate({ children }: DashboardAuthGateProps) {
  const [authenticated, setAuthenticated] = useState(() => Boolean(getAuthToken()));
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const body = (await response.json()) as { token?: string; error?: string };

      if (!response.ok || !body.token) {
        setError(body.error ?? "Invalid password");
        return;
      }

      setAuthToken(body.token);
      setAuthenticated(true);
      setPassword("");
    } catch {
      setError("Unable to sign in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!authenticated) {
    return (
      <div className="dashboard-layout flex min-h-screen items-center justify-center bg-cream px-6">
        <div className="w-full max-w-md border border-dark/10 bg-cream p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-dark/40">InspireED</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-dark">Dashboard</h1>
          <p className="mt-3 text-sm leading-relaxed text-dark/55">
            Sign in to manage site content. Changes are saved to the server and appear on the public website for all visitors.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="dashboard-password" className="block text-xs uppercase tracking-[0.2em] text-dark/40">
                Password
              </label>
              <input
                id="dashboard-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="mt-3 w-full border-b border-dark/20 bg-transparent pb-3 text-base text-dark outline-none transition-colors focus:border-accent"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-dark px-6 py-4 text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-accent disabled:opacity-60"
            >
              {submitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <Link href="/" className="mt-6 inline-block text-sm text-dark/45 transition-colors hover:text-dark">
            Back to website
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

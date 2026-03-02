"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

interface DashboardShellProps {
  children: React.ReactNode;
}

export default function DashboardShell({ children }: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="dashboard-layout flex min-h-screen bg-cream">
      <Sidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Main content area */}
      <div className="flex flex-1 flex-col lg:pl-64">
        {/* Mobile header with hamburger */}
        <div className="flex items-center px-6 pt-6 lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle sidebar"
          >
            <motion.span
              className="block h-px w-5 bg-dark"
              animate={
                mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px w-5 bg-dark"
              animate={
                mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto px-6 py-6 md:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}

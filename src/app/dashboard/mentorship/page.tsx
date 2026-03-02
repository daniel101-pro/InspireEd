"use client";

import { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import type { MentorMenteePair, MentorshipApplication } from "@/types/dashboard";
import DataTable from "@/components/dashboard/DataTable";
import FormModal from "@/components/dashboard/FormModal";
import StatusBadge from "@/components/dashboard/StatusBadge";
import SearchFilter from "@/components/dashboard/SearchFilter";
import PageHeader from "@/components/dashboard/PageHeader";

type Column<T> = {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
};

export default function MentorshipPage() {
  const { data, loading, dispatch } = useDashboard();

  /* ── Search & Filter ── */
  const [pairSearch, setPairSearch] = useState("");
  const [pairFilter, setPairFilter] = useState("");
  const [appSearch, setAppSearch] = useState("");
  const [appFilter, setAppFilter] = useState("");

  /* ── Modals ── */
  const [createOpen, setCreateOpen] = useState(false);
  const [editPairId, setEditPairId] = useState<string | null>(null);
  const [editAppId, setEditAppId] = useState<string | null>(null);

  /* ── Create / Match form state ── */
  const [formMentor, setFormMentor] = useState("");
  const [formMentee, setFormMentee] = useState("");
  const [formStartDate, setFormStartDate] = useState("");
  const [formGoals, setFormGoals] = useState("");

  /* ── Edit pair form state ── */
  const [editStatus, setEditStatus] = useState<MentorMenteePair["status"]>("active");
  const [editGoals, setEditGoals] = useState("");

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-sm text-dark/40">Loading...</p>
      </div>
    );
  }

  /* ── Filtered pairs ── */
  const filteredPairs = data.mentorPairs.filter((p) => {
    const matchesSearch =
      !pairSearch ||
      p.mentorName.toLowerCase().includes(pairSearch.toLowerCase()) ||
      p.menteeName.toLowerCase().includes(pairSearch.toLowerCase()) ||
      p.goals.toLowerCase().includes(pairSearch.toLowerCase());
    const matchesFilter = !pairFilter || p.status === pairFilter;
    return matchesSearch && matchesFilter;
  });

  /* ── Filtered applications ── */
  const filteredApps = data.mentorshipApplications.filter((a) => {
    const matchesSearch =
      !appSearch ||
      a.name.toLowerCase().includes(appSearch.toLowerCase()) ||
      a.email.toLowerCase().includes(appSearch.toLowerCase()) ||
      a.interests.toLowerCase().includes(appSearch.toLowerCase());
    const matchesFilter = !appFilter || a.status === appFilter;
    return matchesSearch && matchesFilter;
  });

  const pendingCount = data.mentorshipApplications.filter(
    (a) => a.status === "pending"
  ).length;

  /* ── Handlers ── */
  function openCreate(prefillMentor?: string, prefillMentee?: string) {
    setFormMentor(prefillMentor ?? "");
    setFormMentee(prefillMentee ?? "");
    setFormStartDate(new Date().toISOString().split("T")[0]);
    setFormGoals("");
    setCreateOpen(true);
  }

  function handleCreateSubmit() {
    if (!formMentor.trim() || !formMentee.trim()) return;
    dispatch({
      type: "ADD_MENTOR_PAIR",
      payload: {
        mentorName: formMentor.trim(),
        menteeName: formMentee.trim(),
        status: "active",
        startDate: formStartDate,
        goals: formGoals.trim(),
      },
    });
    setCreateOpen(false);
  }

  function openEditPair(pair: MentorMenteePair) {
    setEditPairId(pair.id);
    setEditStatus(pair.status);
    setEditGoals(pair.goals);
  }

  function handleEditPairSubmit() {
    if (!editPairId) return;
    dispatch({
      type: "UPDATE_MENTOR_PAIR",
      payload: {
        id: editPairId,
        updates: { status: editStatus, goals: editGoals.trim() },
      },
    });
    setEditPairId(null);
  }

  function handleMatch(app: MentorshipApplication) {
    dispatch({
      type: "UPDATE_MENTORSHIP_APP_STATUS",
      payload: { id: app.id, status: "matched" },
    });
    if (app.type === "mentor") {
      openCreate(app.name, "");
    } else {
      openCreate("", app.name);
    }
  }

  /* ── Pair table columns ── */
  const pairColumns: Column<MentorMenteePair>[] = [
    {
      key: "mentorName",
      label: "Mentor",
      render: (p) => <span className="font-medium">{p.mentorName}</span>,
    },
    {
      key: "menteeName",
      label: "Mentee",
      render: (p) => <span className="font-medium">{p.menteeName}</span>,
    },
    {
      key: "status",
      label: "Status",
      render: (p) => <StatusBadge status={p.status} />,
    },
    {
      key: "startDate",
      label: "Start Date",
    },
    {
      key: "goals",
      label: "Goals",
      render: (p) => (
        <span className="text-dark/60" title={p.goals}>
          {p.goals.length > 50 ? p.goals.slice(0, 50) + "..." : p.goals}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (p) => (
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openEditPair(p);
            }}
            className="rounded-md border border-dark/10 px-2.5 py-1 text-xs text-dark/60 transition-colors hover:border-dark/30 hover:text-dark"
          >
            Edit Status
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openEditPair(p);
            }}
            className="rounded-md border border-dark/10 px-2.5 py-1 text-xs text-dark/60 transition-colors hover:border-dark/30 hover:text-dark"
          >
            Edit Details
          </button>
        </div>
      ),
    },
  ];

  /* ── Application table columns ── */
  const appColumns: Column<MentorshipApplication>[] = [
    {
      key: "name",
      label: "Name",
      render: (a) => <span className="font-medium">{a.name}</span>,
    },
    {
      key: "email",
      label: "Email",
      render: (a) => <span className="text-dark/50">{a.email}</span>,
    },
    {
      key: "type",
      label: "Type",
      render: (a) => (
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] capitalize leading-tight ${
            a.type === "mentor"
              ? "bg-accent/10 text-accent"
              : "border border-dark/15 text-dark/60"
          }`}
        >
          {a.type}
        </span>
      ),
    },
    {
      key: "interests",
      label: "Interests",
      render: (a) => (
        <span className="text-dark/60" title={a.interests}>
          {a.interests.length > 50
            ? a.interests.slice(0, 50) + "..."
            : a.interests}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (a) => <StatusBadge status={a.status} />,
    },
    {
      key: "actions",
      label: "Actions",
      render: (a) =>
        a.status === "pending" ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMatch(a);
            }}
            className="rounded-md bg-dark px-3 py-1 text-xs text-cream transition-colors hover:bg-accent"
          >
            Match
          </button>
        ) : null,
    },
  ];

  return (
    <div className="space-y-10">
      {/* ── Active Pairs Section ── */}
      <div className="space-y-6">
        <PageHeader
          title="Mentorship"
          action={{ label: "Create Pair", onClick: () => openCreate() }}
        />

        <SearchFilter
          search={pairSearch}
          onSearchChange={setPairSearch}
          filter={pairFilter}
          onFilterChange={setPairFilter}
          filterOptions={[
            { value: "", label: "All statuses" },
            { value: "active", label: "Active" },
            { value: "paused", label: "Paused" },
            { value: "completed", label: "Completed" },
          ]}
          placeholder="Search pairs..."
        />

        <DataTable<MentorMenteePair>
          columns={pairColumns}
          data={filteredPairs}
          emptyMessage="No mentor-mentee pairs found."
        />
      </div>

      {/* ── Applications Section ── */}
      <div className="space-y-6">
        <div className="flex items-baseline gap-3">
          <h2 className="font-serif text-2xl">Applications</h2>
          <span className="text-sm text-dark/40">
            {data.mentorshipApplications.length} total
            {pendingCount > 0 && (
              <span className="ml-1 text-accent">
                ({pendingCount} pending)
              </span>
            )}
          </span>
        </div>

        <SearchFilter
          search={appSearch}
          onSearchChange={setAppSearch}
          filter={appFilter}
          onFilterChange={setAppFilter}
          filterOptions={[
            { value: "", label: "All statuses" },
            { value: "pending", label: "Pending" },
            { value: "matched", label: "Matched" },
            { value: "active", label: "Active" },
            { value: "completed", label: "Completed" },
          ]}
          placeholder="Search applications..."
        />

        <DataTable<MentorshipApplication>
          columns={appColumns}
          data={filteredApps}
          emptyMessage="No mentorship applications found."
        />
      </div>

      {/* ── Create Pair Modal ── */}
      <FormModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Create Mentor-Mentee Pair"
      >
        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Mentor Name
            </label>
            <input
              type="text"
              value={formMentor}
              onChange={(e) => setFormMentor(e.target.value)}
              placeholder="Enter mentor name"
              className="w-full border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/50"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Mentee Name
            </label>
            <input
              type="text"
              value={formMentee}
              onChange={(e) => setFormMentee(e.target.value)}
              placeholder="Enter mentee name"
              className="w-full border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/50"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Start Date
            </label>
            <input
              type="date"
              value={formStartDate}
              onChange={(e) => setFormStartDate(e.target.value)}
              className="w-full border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors focus:border-dark/50"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Goals
            </label>
            <textarea
              value={formGoals}
              onChange={(e) => setFormGoals(e.target.value)}
              placeholder="Describe the mentorship goals..."
              rows={4}
              className="w-full resize-none border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/50"
            />
          </div>
          <button
            onClick={handleCreateSubmit}
            disabled={!formMentor.trim() || !formMentee.trim()}
            className="w-full rounded-lg bg-dark py-2.5 text-sm text-cream transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            Create Pair
          </button>
        </div>
      </FormModal>

      {/* ── Edit Pair Modal ── */}
      <FormModal
        open={editPairId !== null}
        onClose={() => setEditPairId(null)}
        title="Edit Pair"
      >
        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Status
            </label>
            <select
              value={editStatus}
              onChange={(e) =>
                setEditStatus(e.target.value as MentorMenteePair["status"])
              }
              className="w-full border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors focus:border-dark/50"
            >
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Goals
            </label>
            <textarea
              value={editGoals}
              onChange={(e) => setEditGoals(e.target.value)}
              rows={4}
              className="w-full resize-none border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/50"
            />
          </div>
          <button
            onClick={handleEditPairSubmit}
            className="w-full rounded-lg bg-dark py-2.5 text-sm text-cream transition-colors hover:bg-accent"
          >
            Save Changes
          </button>
        </div>
      </FormModal>
    </div>
  );
}

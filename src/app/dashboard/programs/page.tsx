"use client";

import { useState, useMemo } from "react";
import { useDashboard } from "@/context/DashboardContext";
import type { Program } from "@/types/dashboard";
import PageHeader from "@/components/dashboard/PageHeader";
import DataTable from "@/components/dashboard/DataTable";
import FormModal from "@/components/dashboard/FormModal";
import ConfirmDialog from "@/components/dashboard/ConfirmDialog";
import SearchFilter from "@/components/dashboard/SearchFilter";

type TabKey = "all" | "study-session" | "workshop" | "event";

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "study-session", label: "Study Sessions" },
  { key: "workshop", label: "Workshops" },
  { key: "event", label: "Events" },
];

const typeOptions: { value: Program["type"]; label: string }[] = [
  { value: "study-session", label: "Study Session" },
  { value: "workshop", label: "Workshop" },
  { value: "event", label: "Event" },
];

const emptyForm = {
  title: "",
  type: "study-session" as Program["type"],
  description: "",
  schedule: "",
  date: "",
  isActive: true,
};

export default function ProgramsPage() {
  const { data, loading, dispatch } = useDashboard();

  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  /* ---------- Filtered data ---------- */
  const filtered = useMemo(() => {
    let list = data.programs;

    if (activeTab !== "all") {
      list = list.filter((p) => p.type === activeTab);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }

    return list;
  }, [data.programs, activeTab, search]);

  /* ---------- Modal helpers ---------- */
  function openAdd() {
    setEditingProgram(null);
    setForm(emptyForm);
    setModalOpen(true);
  }

  function openEdit(program: Program) {
    setEditingProgram(program);
    setForm({
      title: program.title,
      type: program.type,
      description: program.description,
      schedule: program.schedule ?? "",
      date: program.date ?? "",
      isActive: program.isActive,
    });
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditingProgram(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (editingProgram) {
      dispatch({
        type: "UPDATE_PROGRAM",
        payload: {
          id: editingProgram.id,
          updates: {
            title: form.title,
            type: form.type,
            description: form.description,
            schedule: form.type !== "event" ? form.schedule : undefined,
            date: form.type === "event" ? form.date : undefined,
            isActive: form.isActive,
          },
        },
      });
    } else {
      dispatch({
        type: "ADD_PROGRAM",
        payload: {
          title: form.title,
          type: form.type,
          description: form.description,
          schedule: form.type !== "event" ? form.schedule : undefined,
          date: form.type === "event" ? form.date : undefined,
          isActive: form.isActive,
        },
      });
    }

    closeModal();
  }

  function handleDelete() {
    if (deleteId) {
      dispatch({ type: "DELETE_PROGRAM", payload: deleteId });
      setDeleteId(null);
    }
  }

  /* ---------- Table columns ---------- */
  const columns = [
    {
      key: "title",
      label: "Title",
      render: (p: Program) => (
        <span className="font-medium">{p.title}</span>
      ),
    },
    {
      key: "type",
      label: "Type",
      render: (p: Program) => (
        <span className="capitalize text-dark/50">
          {p.type.replace("-", " ")}
        </span>
      ),
    },
    {
      key: "schedule",
      label: "Schedule / Date",
      render: (p: Program) => (
        <span className="text-dark/60">
          {p.schedule || p.date || "\u2014"}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (p: Program) => (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: "TOGGLE_PROGRAM", payload: p.id });
          }}
          className="flex items-center gap-2"
          aria-label={p.isActive ? "Deactivate program" : "Activate program"}
        >
          <span
            className={`inline-block h-4 w-4 rounded-full transition-colors ${
              p.isActive ? "bg-accent" : "bg-dark/20"
            }`}
          />
          <span className="text-xs text-dark/40">
            {p.isActive ? "Active" : "Inactive"}
          </span>
        </button>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (p: Program) => (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openEdit(p);
            }}
            className="text-xs text-dark/40 underline transition-colors hover:text-dark"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDeleteId(p.id);
            }}
            className="text-xs text-dark/40 underline transition-colors hover:text-dark"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  /* ---------- Render ---------- */
  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-sm text-dark/40">Loading...</p>
      </div>
    );
  }

  const showSchedule = form.type === "study-session" || form.type === "workshop";
  const showDate = form.type === "event";

  return (
    <div className="space-y-6">
      <PageHeader
        title="Programs"
        action={{ label: "Add Program", onClick: openAdd }}
      />

      {/* Tab bar */}
      <div className="flex gap-6 border-b border-dark/10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2.5 text-sm transition-colors ${
              activeTab === tab.key
                ? "border-b-2 border-accent text-dark"
                : "text-dark/40 hover:text-dark/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        placeholder="Search programs..."
      />

      {/* Table */}
      <DataTable<Program>
        columns={columns}
        data={filtered}
        emptyMessage="No programs found."
      />

      {/* Add / Edit Modal */}
      <FormModal
        open={modalOpen}
        onClose={closeModal}
        title={editingProgram ? "Edit Program" : "Add Program"}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="mb-1 block text-xs uppercase tracking-wider text-dark/40">
              Title
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-lg border border-dark/10 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors focus:border-dark/30"
            />
          </div>

          {/* Type */}
          <div>
            <label className="mb-1 block text-xs uppercase tracking-wider text-dark/40">
              Type
            </label>
            <select
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value as Program["type"] })
              }
              className="w-full rounded-lg border border-dark/10 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors focus:border-dark/30"
            >
              {typeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="mb-1 block text-xs uppercase tracking-wider text-dark/40">
              Description
            </label>
            <textarea
              required
              rows={3}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full resize-none rounded-lg border border-dark/10 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors focus:border-dark/30"
            />
          </div>

          {/* Schedule (study-session / workshop) */}
          {showSchedule && (
            <div>
              <label className="mb-1 block text-xs uppercase tracking-wider text-dark/40">
                Schedule
              </label>
              <input
                type="text"
                value={form.schedule}
                onChange={(e) =>
                  setForm({ ...form, schedule: e.target.value })
                }
                placeholder="e.g. Tue & Thu, 4-6 PM"
                className="w-full rounded-lg border border-dark/10 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/30"
              />
            </div>
          )}

          {/* Date (event) */}
          {showDate && (
            <div>
              <label className="mb-1 block text-xs uppercase tracking-wider text-dark/40">
                Date
              </label>
              <input
                type="text"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                placeholder="e.g. July 15-17, 2026"
                className="w-full rounded-lg border border-dark/10 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/30"
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
          >
            {editingProgram ? "Save Changes" : "Create Program"}
          </button>
        </form>
      </FormModal>

      {/* Delete Confirm Dialog */}
      <ConfirmDialog
        open={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete Program"
        description="Are you sure you want to delete this program? This action cannot be undone."
      />
    </div>
  );
}

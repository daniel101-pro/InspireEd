"use client";

import { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import type { ContactMessage } from "@/types/dashboard";
import PageHeader from "@/components/dashboard/PageHeader";
import SearchFilter from "@/components/dashboard/SearchFilter";
import DataTable from "@/components/dashboard/DataTable";
import FormModal from "@/components/dashboard/FormModal";
import ConfirmDialog from "@/components/dashboard/ConfirmDialog";
import StatusBadge from "@/components/dashboard/StatusBadge";

const statusFilterOptions = [
  { value: "", label: "All Statuses" },
  { value: "new", label: "New" },
  { value: "read", label: "Read" },
  { value: "archived", label: "Archived" },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function MessagesPage() {
  const { data, loading, dispatch, refreshContent } = useDashboard();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    refreshContent();
  }, [refreshContent]);

  const filtered = data.contactMessages.filter((message) => {
    const matchesSearch =
      !search ||
      message.name.toLowerCase().includes(search.toLowerCase()) ||
      message.email.toLowerCase().includes(search.toLowerCase()) ||
      message.subject.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = !statusFilter || message.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const columns = [
    {
      key: "name",
      label: "Name",
      render: (message: ContactMessage) => (
        <span className="font-medium text-dark">{message.name}</span>
      ),
    },
    {
      key: "subject",
      label: "Subject",
      render: (message: ContactMessage) => (
        <span className="text-dark/70">{message.subject}</span>
      ),
    },
    {
      key: "submittedAt",
      label: "Received",
      render: (message: ContactMessage) => (
        <span className="text-sm text-dark/50">{formatDate(message.submittedAt)}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (message: ContactMessage) => <StatusBadge status={message.status} />,
    },
    {
      key: "actions",
      label: "Actions",
      render: (message: ContactMessage) => (
        <div className="flex items-center gap-3">
          {message.status === "new" && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "UPDATE_CONTACT_MESSAGE_STATUS", payload: { id: message.id, status: "read" } });
              }}
              className="text-xs font-medium text-accent hover:text-accent/70"
            >
              Mark read
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDeleteId(message.id);
            }}
            className="text-xs font-medium text-dark/40 hover:text-dark"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-sm text-dark/30">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Messages"
        subtitle={`${data.contactMessages.length} message${data.contactMessages.length !== 1 ? "s" : ""}`}
      />

      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        filter={statusFilter}
        onFilterChange={setStatusFilter}
        filterOptions={statusFilterOptions}
        placeholder="Search by name, email, or subject..."
      />

      <DataTable
        columns={columns}
        data={filtered}
        onRowClick={(message) => {
          setSelected(message);
          if (message.status === "new") {
            dispatch({ type: "UPDATE_CONTACT_MESSAGE_STATUS", payload: { id: message.id, status: "read" } });
          }
        }}
        emptyMessage="No messages yet. Contact form submissions will appear here."
      />

      <FormModal open={!!selected} onClose={() => setSelected(null)} title="Message Details">
        {selected && (
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-dark/40">From</p>
              <p className="mt-1 font-medium text-dark">{selected.name}</p>
              <p className="text-sm text-dark/50">{selected.email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-dark/40">Subject</p>
              <p className="mt-1 text-dark">{selected.subject}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-dark/40">Message</p>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-dark/70">{selected.message}</p>
            </div>
            <div className="flex gap-3 border-t border-dark/5 pt-4">
              {selected.status !== "archived" && (
                <button
                  onClick={() => {
                    dispatch({ type: "UPDATE_CONTACT_MESSAGE_STATUS", payload: { id: selected.id, status: "archived" } });
                    setSelected(null);
                  }}
                  className="rounded-lg border border-dark/15 px-4 py-2 text-sm text-dark/60 hover:text-dark"
                >
                  Archive
                </button>
              )}
              <a
                href={`mailto:${selected.email}`}
                className="rounded-lg bg-dark px-4 py-2 text-sm text-cream hover:bg-accent"
              >
                Reply by email
              </a>
            </div>
          </div>
        )}
      </FormModal>

      <ConfirmDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          if (deleteId) {
            dispatch({ type: "DELETE_CONTACT_MESSAGE", payload: deleteId });
            setDeleteId(null);
            setSelected(null);
          }
        }}
        title="Delete Message"
        description="This message will be permanently removed."
      />
    </div>
  );
}

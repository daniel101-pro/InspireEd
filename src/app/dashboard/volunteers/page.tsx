"use client";

import { useState, useMemo } from "react";
import { useDashboard } from "@/context/DashboardContext";
import type { VolunteerApplication } from "@/types/dashboard";
import PageHeader from "@/components/dashboard/PageHeader";
import SearchFilter from "@/components/dashboard/SearchFilter";
import DataTable from "@/components/dashboard/DataTable";
import StatusBadge from "@/components/dashboard/StatusBadge";
import FormModal from "@/components/dashboard/FormModal";

const statusFilterOptions = [
  { value: "", label: "All Statuses" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function VolunteersPage() {
  const { data, loading, dispatch } = useDashboard();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] =
    useState<VolunteerApplication | null>(null);

  const filtered = useMemo(() => {
    let list = data.volunteers;

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (v) =>
          v.fullName.toLowerCase().includes(q) ||
          v.email.toLowerCase().includes(q)
      );
    }

    if (statusFilter) {
      list = list.filter((v) => v.status === statusFilter);
    }

    return list;
  }, [data.volunteers, search, statusFilter]);

  function handleApprove(id: string) {
    dispatch({
      type: "UPDATE_VOLUNTEER_STATUS",
      payload: { id, status: "approved" },
    });
    if (selectedVolunteer?.id === id) {
      setSelectedVolunteer((prev) =>
        prev ? { ...prev, status: "approved", reviewedAt: new Date().toISOString().split("T")[0] } : null
      );
    }
  }

  function handleReject(id: string) {
    dispatch({
      type: "UPDATE_VOLUNTEER_STATUS",
      payload: { id, status: "rejected" },
    });
    if (selectedVolunteer?.id === id) {
      setSelectedVolunteer((prev) =>
        prev ? { ...prev, status: "rejected", reviewedAt: new Date().toISOString().split("T")[0] } : null
      );
    }
  }

  const columns = [
    {
      key: "fullName",
      label: "Name",
      render: (v: VolunteerApplication) => (
        <span className="font-medium text-dark">{v.fullName}</span>
      ),
    },
    {
      key: "email",
      label: "Email",
      render: (v: VolunteerApplication) => (
        <span className="text-sm text-dark/50">{v.email}</span>
      ),
    },
    {
      key: "roleInterest",
      label: "Role",
      render: (v: VolunteerApplication) => (
        <span className="text-dark/60">{v.roleInterest}</span>
      ),
    },
    {
      key: "availability",
      label: "Availability",
      render: (v: VolunteerApplication) => (
        <div className="flex flex-wrap gap-1">
          {v.availability.map((a) => (
            <span
              key={a}
              className="inline-block rounded-full bg-dark/5 px-2 py-0.5 text-[11px] text-dark/50"
            >
              {a}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: "submittedAt",
      label: "Submitted",
      render: (v: VolunteerApplication) => (
        <span className="text-sm text-dark/50">
          {formatDate(v.submittedAt)}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (v: VolunteerApplication) => <StatusBadge status={v.status} />,
    },
    {
      key: "actions",
      label: "Actions",
      render: (v: VolunteerApplication) =>
        v.status === "pending" ? (
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleApprove(v.id);
              }}
              className="text-xs font-medium text-accent transition-colors hover:text-accent/70"
            >
              Approve
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleReject(v.id);
              }}
              className="text-xs font-medium text-dark/50 transition-colors hover:text-dark"
            >
              Reject
            </button>
          </div>
        ) : null,
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
        title="Volunteer Applications"
        subtitle={`${data.volunteers.length} application${data.volunteers.length !== 1 ? "s" : ""}`}
      />

      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        filter={statusFilter}
        onFilterChange={setStatusFilter}
        filterOptions={statusFilterOptions}
        placeholder="Search by name or email..."
      />

      <DataTable
        columns={columns}
        data={filtered}
        onRowClick={(v) => setSelectedVolunteer(v)}
        emptyMessage="No volunteer applications found."
      />

      {/* Detail Panel */}
      <FormModal
        open={!!selectedVolunteer}
        onClose={() => setSelectedVolunteer(null)}
        title="Application Details"
      >
        {selectedVolunteer && (
          <div className="space-y-6">
            {/* Name & Status */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-xl text-dark">
                  {selectedVolunteer.fullName}
                </h3>
                <p className="mt-1 text-sm text-dark/50">
                  {selectedVolunteer.email}
                </p>
              </div>
              <StatusBadge status={selectedVolunteer.status} />
            </div>

            {/* Details */}
            <div className="space-y-4">
              <DetailRow label="Phone" value={selectedVolunteer.phone} />
              <DetailRow
                label="Role Interest"
                value={selectedVolunteer.roleInterest}
              />
              <DetailRow
                label="Availability"
                value={selectedVolunteer.availability.join(", ")}
              />
              <DetailRow
                label="Submitted"
                value={formatDate(selectedVolunteer.submittedAt)}
              />
              {selectedVolunteer.reviewedAt && (
                <DetailRow
                  label="Reviewed"
                  value={formatDate(selectedVolunteer.reviewedAt)}
                />
              )}
            </div>

            {/* Why volunteer */}
            <div>
              <p className="text-xs uppercase tracking-wider text-dark/40">
                Why volunteer?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-dark/70">
                {selectedVolunteer.whyVolunteer}
              </p>
            </div>

            {/* Action buttons for pending */}
            {selectedVolunteer.status === "pending" && (
              <div className="flex items-center gap-3 border-t border-dark/5 pt-6">
                <button
                  onClick={() => handleApprove(selectedVolunteer.id)}
                  className="rounded-lg bg-accent px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent/90"
                >
                  Approve Application
                </button>
                <button
                  onClick={() => handleReject(selectedVolunteer.id)}
                  className="rounded-lg border border-dark/15 px-5 py-2.5 text-sm text-dark/60 transition-colors hover:border-dark/30 hover:text-dark"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        )}
      </FormModal>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-dark/40">{label}</p>
      <p className="mt-1 text-sm text-dark/80">{value}</p>
    </div>
  );
}

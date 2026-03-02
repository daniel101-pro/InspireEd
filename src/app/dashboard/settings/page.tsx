"use client";

import { useState, useEffect } from "react";
import { useDashboard } from "@/context/DashboardContext";
import type { TeamMember, SiteSettings, ImpactStats } from "@/types/dashboard";
import FormModal from "@/components/dashboard/FormModal";
import ConfirmDialog from "@/components/dashboard/ConfirmDialog";
import PageHeader from "@/components/dashboard/PageHeader";

export default function SettingsPage() {
  const { data, loading, dispatch } = useDashboard();

  /* ── Contact Information ── */
  const [contact, setContact] = useState<SiteSettings>({
    email: "",
    phone: "",
    address: "",
    officeHours: "",
  });

  /* ── Impact Stats ── */
  const [stats, setStats] = useState<ImpactStats>({
    youthImpacted: 0,
    mentorsVolunteers: 0,
    programsDelivered: 0,
    communityPartners: 0,
  });

  /* ── Team Member modal ── */
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [memberForm, setMemberForm] = useState({
    name: "",
    initials: "",
    title: "",
    bio: "",
  });

  /* ── Delete team member ── */
  const [deleteMemberId, setDeleteMemberId] = useState<string | null>(null);

  /* ── Partners ── */
  const [newPartner, setNewPartner] = useState("");
  const [deletePartnerId, setDeletePartnerId] = useState<string | null>(null);

  /* ── Reset ── */
  const [resetOpen, setResetOpen] = useState(false);

  /* ── Hydrate local state from context data ── */
  useEffect(() => {
    if (!loading) {
      setContact({ ...data.settings });
      setStats({ ...data.stats });
    }
  }, [loading, data.settings, data.stats]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-sm text-dark/40">Loading...</p>
      </div>
    );
  }

  /* ── Contact handlers ── */
  function handleSaveContact() {
    dispatch({ type: "UPDATE_SETTINGS", payload: contact });
  }

  /* ── Stats handlers ── */
  function handleSaveStats() {
    dispatch({ type: "UPDATE_STATS", payload: stats });
  }

  /* ── Team member handlers ── */
  function openAddMember() {
    setEditingMember(null);
    setMemberForm({ name: "", initials: "", title: "", bio: "" });
    setMemberModalOpen(true);
  }

  function openEditMember(member: TeamMember) {
    setEditingMember(member);
    setMemberForm({
      name: member.name,
      initials: member.initials,
      title: member.title,
      bio: member.bio,
    });
    setMemberModalOpen(true);
  }

  function handleMemberSubmit() {
    if (!memberForm.name.trim() || !memberForm.initials.trim()) return;
    if (editingMember) {
      dispatch({
        type: "UPDATE_TEAM_MEMBER",
        payload: {
          id: editingMember.id,
          updates: {
            name: memberForm.name.trim(),
            initials: memberForm.initials.trim(),
            title: memberForm.title.trim(),
            bio: memberForm.bio.trim(),
          },
        },
      });
    } else {
      dispatch({
        type: "ADD_TEAM_MEMBER",
        payload: {
          name: memberForm.name.trim(),
          initials: memberForm.initials.trim(),
          title: memberForm.title.trim(),
          bio: memberForm.bio.trim(),
        },
      });
    }
    setMemberModalOpen(false);
  }

  function handleDeleteMember() {
    if (!deleteMemberId) return;
    dispatch({ type: "DELETE_TEAM_MEMBER", payload: deleteMemberId });
    setDeleteMemberId(null);
  }

  /* ── Partner handlers ── */
  function handleAddPartner() {
    if (!newPartner.trim()) return;
    dispatch({ type: "ADD_PARTNER", payload: newPartner.trim() });
    setNewPartner("");
  }

  function handleDeletePartner() {
    if (!deletePartnerId) return;
    dispatch({ type: "DELETE_PARTNER", payload: deletePartnerId });
    setDeletePartnerId(null);
  }

  /* ── Reset handler ── */
  function handleReset() {
    dispatch({ type: "RESET" });
    setResetOpen(false);
  }

  /* ── Shared input class ── */
  const inputClass =
    "w-full border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/50";

  return (
    <div className="space-y-8">
      <PageHeader title="Settings" subtitle="Manage site configuration and data" />

      {/* ── 1. Contact Information ── */}
      <section className="rounded-2xl border border-dark/5 p-6">
        <h2 className="mb-5 font-serif text-xl">Contact Information</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Email
            </label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) =>
                setContact((c) => ({ ...c, email: e.target.value }))
              }
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Phone
            </label>
            <input
              type="text"
              value={contact.phone}
              onChange={(e) =>
                setContact((c) => ({ ...c, phone: e.target.value }))
              }
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Address
            </label>
            <input
              type="text"
              value={contact.address}
              onChange={(e) =>
                setContact((c) => ({ ...c, address: e.target.value }))
              }
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Office Hours
            </label>
            <input
              type="text"
              value={contact.officeHours}
              onChange={(e) =>
                setContact((c) => ({ ...c, officeHours: e.target.value }))
              }
              className={inputClass}
            />
          </div>
          <div className="pt-2">
            <button
              onClick={handleSaveContact}
              className="rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
            >
              Save Contact Info
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Team Members ── */}
      <section className="rounded-2xl border border-dark/5 p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-serif text-xl">Team Members</h2>
          <button
            onClick={openAddMember}
            className="rounded-lg bg-dark px-4 py-2 text-sm text-cream transition-colors hover:bg-accent"
          >
            Add Member
          </button>
        </div>
        <div className="space-y-0">
          {data.teamMembers.length === 0 ? (
            <p className="py-8 text-center text-sm text-dark/30">
              No team members yet.
            </p>
          ) : (
            data.teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between border-b border-dark/5 py-4 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent text-xs font-medium text-dark">
                    {member.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">
                      {member.name}
                    </p>
                    <p className="text-xs text-dark/40">{member.title}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditMember(member)}
                    className="rounded-md border border-dark/10 px-2.5 py-1 text-xs text-dark/60 transition-colors hover:border-dark/30 hover:text-dark"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteMemberId(member.id)}
                    className="rounded-md border border-dark/10 px-2.5 py-1 text-xs text-dark/60 transition-colors hover:border-red-300 hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── 3. Partners ── */}
      <section className="rounded-2xl border border-dark/5 p-6">
        <h2 className="mb-5 font-serif text-xl">Partners</h2>
        <div className="space-y-0">
          {data.partners.length === 0 ? (
            <p className="py-6 text-center text-sm text-dark/30">
              No partners yet.
            </p>
          ) : (
            data.partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-between border-b border-dark/5 py-3 last:border-0"
              >
                <span className="text-sm text-dark">{partner.name}</span>
                <button
                  onClick={() => setDeletePartnerId(partner.id)}
                  className="rounded-md border border-dark/10 px-2.5 py-1 text-xs text-dark/60 transition-colors hover:border-red-300 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <input
            type="text"
            value={newPartner}
            onChange={(e) => setNewPartner(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddPartner()}
            placeholder="Partner name"
            className="flex-1 border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/50"
          />
          <button
            onClick={handleAddPartner}
            disabled={!newPartner.trim()}
            className="rounded-lg bg-dark px-4 py-2 text-sm text-cream transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            Add Partner
          </button>
        </div>
      </section>

      {/* ── 4. Impact Statistics ── */}
      <section className="rounded-2xl border border-dark/5 p-6">
        <h2 className="mb-5 font-serif text-xl">Impact Statistics</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Youth Impacted
            </label>
            <input
              type="number"
              value={stats.youthImpacted}
              onChange={(e) =>
                setStats((s) => ({
                  ...s,
                  youthImpacted: parseInt(e.target.value) || 0,
                }))
              }
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Mentors & Volunteers
            </label>
            <input
              type="number"
              value={stats.mentorsVolunteers}
              onChange={(e) =>
                setStats((s) => ({
                  ...s,
                  mentorsVolunteers: parseInt(e.target.value) || 0,
                }))
              }
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Programs
            </label>
            <input
              type="number"
              value={stats.programsDelivered}
              onChange={(e) =>
                setStats((s) => ({
                  ...s,
                  programsDelivered: parseInt(e.target.value) || 0,
                }))
              }
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Partners
            </label>
            <input
              type="number"
              value={stats.communityPartners}
              onChange={(e) =>
                setStats((s) => ({
                  ...s,
                  communityPartners: parseInt(e.target.value) || 0,
                }))
              }
              className={inputClass}
            />
          </div>
        </div>
        <div className="pt-4">
          <button
            onClick={handleSaveStats}
            className="rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
          >
            Save Statistics
          </button>
        </div>
      </section>

      {/* ── 5. Reset ── */}
      <section className="rounded-2xl border border-dark/5 p-6">
        <h2 className="mb-2 font-serif text-xl">Danger Zone</h2>
        <p className="mb-4 text-sm text-dark/50">
          Reset all dashboard data back to the original defaults.
        </p>
        <button
          onClick={() => setResetOpen(true)}
          className="rounded-lg border border-dark/15 px-5 py-2.5 text-sm text-dark/60 transition-colors hover:bg-dark/5 hover:text-dark"
        >
          Reset to Defaults
        </button>
      </section>

      {/* ── Modals ── */}

      {/* Team Member Form */}
      <FormModal
        open={memberModalOpen}
        onClose={() => setMemberModalOpen(false)}
        title={editingMember ? "Edit Team Member" : "Add Team Member"}
      >
        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Name
            </label>
            <input
              type="text"
              value={memberForm.name}
              onChange={(e) =>
                setMemberForm((f) => ({ ...f, name: e.target.value }))
              }
              placeholder="Full name"
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Initials
            </label>
            <input
              type="text"
              value={memberForm.initials}
              onChange={(e) =>
                setMemberForm((f) => ({
                  ...f,
                  initials: e.target.value.toUpperCase().slice(0, 3),
                }))
              }
              placeholder="e.g. AJ"
              maxLength={3}
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Title
            </label>
            <input
              type="text"
              value={memberForm.title}
              onChange={(e) =>
                setMemberForm((f) => ({ ...f, title: e.target.value }))
              }
              placeholder="Job title"
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-dark/40">
              Bio
            </label>
            <textarea
              value={memberForm.bio}
              onChange={(e) =>
                setMemberForm((f) => ({ ...f, bio: e.target.value }))
              }
              placeholder="Short biography..."
              rows={4}
              className="w-full resize-none border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/50"
            />
          </div>
          <button
            onClick={handleMemberSubmit}
            disabled={!memberForm.name.trim() || !memberForm.initials.trim()}
            className="w-full rounded-lg bg-dark py-2.5 text-sm text-cream transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            {editingMember ? "Save Changes" : "Add Member"}
          </button>
        </div>
      </FormModal>

      {/* Delete Team Member Confirm */}
      <ConfirmDialog
        open={deleteMemberId !== null}
        onClose={() => setDeleteMemberId(null)}
        onConfirm={handleDeleteMember}
        title="Delete Team Member"
        description="Are you sure you want to remove this team member? This action cannot be undone."
      />

      {/* Delete Partner Confirm */}
      <ConfirmDialog
        open={deletePartnerId !== null}
        onClose={() => setDeletePartnerId(null)}
        onConfirm={handleDeletePartner}
        title="Delete Partner"
        description="Are you sure you want to remove this partner? This action cannot be undone."
      />

      {/* Reset Confirm */}
      <ConfirmDialog
        open={resetOpen}
        onClose={() => setResetOpen(false)}
        onConfirm={handleReset}
        title="Reset to Defaults"
        description="This will reset all dashboard data to defaults. All customizations, added entries, and changes will be lost."
      />
    </div>
  );
}

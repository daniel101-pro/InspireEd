"use client";

import { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import type { GalleryImage } from "@/types/dashboard";
import PageHeader from "@/components/dashboard/PageHeader";
import FormModal from "@/components/dashboard/FormModal";
import ConfirmDialog from "@/components/dashboard/ConfirmDialog";
import SearchFilter from "@/components/dashboard/SearchFilter";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";

const categories = ["All", "Spotlight", "Ambassadors", "Events", "Community"];

export default function GalleryPage() {
  const { data, dispatch } = useDashboard();
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<GalleryImage | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [form, setForm] = useState({ src: "", alt: "", category: "Spotlight" });

  const filtered = data.gallery.filter((img) => {
    const matchSearch = img.alt.toLowerCase().includes(search.toLowerCase()) || img.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || img.category === filter;
    return matchSearch && matchFilter;
  });

  function openAdd() {
    setEditing(null);
    setForm({ src: "", alt: "", category: "Spotlight" });
    setModalOpen(true);
  }

  function openEdit(img: GalleryImage) {
    setEditing(img);
    setForm({ src: img.src, alt: img.alt, category: img.category });
    setModalOpen(true);
  }

  function handleSave() {
    if (!form.src || !form.alt) return;
    if (editing) {
      dispatch({ type: "UPDATE_GALLERY_IMAGE", payload: { id: editing.id, updates: form } });
    } else {
      dispatch({ type: "ADD_GALLERY_IMAGE", payload: form });
    }
    setModalOpen(false);
  }

  function handleDelete() {
    if (deleteId) {
      dispatch({ type: "DELETE_GALLERY_IMAGE", payload: deleteId });
      setDeleteId(null);
    }
  }

  return (
    <div className="space-y-8">
      <PageHeader title="Gallery" action={{ label: "Add Image", onClick: openAdd }} />

      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        filter={filter}
        onFilterChange={setFilter}
        filterOptions={categories.map(c => ({ value: c, label: c }))}
      />

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-dark/5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/0 transition-colors duration-300 group-hover:bg-dark/60" />
              <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex justify-end gap-1.5">
                  <button
                    onClick={() => openEdit(img)}
                    className="rounded-lg bg-cream/90 p-1.5 text-dark transition-colors hover:bg-accent hover:text-cream"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <a
                    href={img.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-cream/90 p-1.5 text-dark transition-colors hover:bg-accent hover:text-cream"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={() => setDeleteId(img.id)}
                    className="rounded-lg bg-cream/90 p-1.5 text-dark transition-colors hover:bg-red-500 hover:text-cream"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div>
                  <p className="text-xs font-medium text-cream">{img.alt}</p>
                  <p className="mt-0.5 text-xs text-cream/50">{img.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-dark/30 text-sm">No images found</p>
          <button onClick={openAdd} className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
            <Plus className="h-3.5 w-3.5" /> Add your first image
          </button>
        </div>
      )}

      {/* Add/Edit Modal */}
      <FormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Image" : "Add Image"}
      >
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-dark/60">Image URL</label>
            <input
              type="url"
              value={form.src}
              onChange={(e) => setForm({ ...form, src: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-dark/10 bg-cream px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>

          {form.src && (
            <div className="overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={form.src} alt="Preview" className="h-40 w-full object-cover" />
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-xs font-medium text-dark/60">Alt Text / Description</label>
            <input
              type="text"
              value={form.alt}
              onChange={(e) => setForm({ ...form, alt: e.target.value })}
              placeholder="Describe the image"
              className="w-full rounded-lg border border-dark/10 bg-cream px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-dark/60">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-lg border border-dark/10 bg-cream px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
            >
              {categories.filter(c => c !== "All").map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSave}
            disabled={!form.src || !form.alt}
            className="w-full rounded-lg bg-dark px-4 py-2.5 text-sm text-cream transition-colors hover:bg-accent disabled:opacity-40"
          >
            {editing ? "Update Image" : "Add Image"}
          </button>
        </div>
      </FormModal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete Image"
        description="This image will be permanently removed from the gallery."
      />
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useDashboard } from "@/context/DashboardContext";
import type { Article, FAQ, Resource } from "@/types/dashboard";
import PageHeader from "@/components/dashboard/PageHeader";
import DataTable from "@/components/dashboard/DataTable";
import FormModal from "@/components/dashboard/FormModal";
import ConfirmDialog from "@/components/dashboard/ConfirmDialog";
import SearchFilter from "@/components/dashboard/SearchFilter";
import { ChevronUp, ChevronDown, Pencil, Trash2 } from "lucide-react";

type Tab = "articles" | "faqs" | "resources";

const tabs: { key: Tab; label: string }[] = [
  { key: "articles", label: "Articles" },
  { key: "faqs", label: "FAQs" },
  { key: "resources", label: "Resources" },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/* ─────────────────────────────────────────────
   Main page
   ───────────────────────────────────────────── */
export default function ContentPage() {
  const { data, loading } = useDashboard();
  const [activeTab, setActiveTab] = useState<Tab>("articles");

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-sm text-dark/30">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader title="Content" subtitle="Manage articles, FAQs, and resources" />

      {/* Tab bar */}
      <div className="flex gap-1 border-b border-dark/10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative px-5 py-2.5 text-sm transition-colors ${
              activeTab === tab.key
                ? "text-dark"
                : "text-dark/40 hover:text-dark/60"
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <motion.span
                layoutId="content-tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "articles" && <ArticlesTab articles={data.articles} />}
      {activeTab === "faqs" && <FAQsTab faqs={data.faqs} />}
      {activeTab === "resources" && <ResourcesTab resources={data.resources} />}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ARTICLES TAB
   ───────────────────────────────────────────── */
function ArticlesTab({ articles }: { articles: Article[] }) {
  const { dispatch } = useDashboard();
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Article | null>(null);

  // Form state
  const [formTitle, setFormTitle] = useState("");
  const [formExcerpt, setFormExcerpt] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formPublished, setFormPublished] = useState(false);

  const filtered = useMemo(() => {
    if (!search) return articles;
    const q = search.toLowerCase();
    return articles.filter((a) => a.title.toLowerCase().includes(q));
  }, [articles, search]);

  function openAdd() {
    setEditingArticle(null);
    setFormTitle("");
    setFormExcerpt("");
    setFormContent("");
    setFormDate(new Date().toISOString().split("T")[0]);
    setFormPublished(false);
    setModalOpen(true);
  }

  function openEdit(article: Article) {
    setEditingArticle(article);
    setFormTitle(article.title);
    setFormExcerpt(article.excerpt);
    setFormContent(article.content);
    setFormDate(article.date);
    setFormPublished(article.isPublished);
    setModalOpen(true);
  }

  function handleSave() {
    if (!formTitle.trim()) return;

    if (editingArticle) {
      dispatch({
        type: "UPDATE_ARTICLE",
        payload: {
          id: editingArticle.id,
          updates: {
            title: formTitle,
            excerpt: formExcerpt,
            content: formContent,
            date: formDate,
            isPublished: formPublished,
          },
        },
      });
    } else {
      dispatch({
        type: "ADD_ARTICLE",
        payload: {
          title: formTitle,
          excerpt: formExcerpt,
          content: formContent,
          date: formDate,
          isPublished: formPublished,
        },
      });
    }
    setModalOpen(false);
  }

  function handleDelete() {
    if (deleteTarget) {
      dispatch({ type: "DELETE_ARTICLE", payload: deleteTarget.id });
      setDeleteTarget(null);
    }
  }

  const columns = [
    {
      key: "title",
      label: "Title",
      render: (a: Article) => (
        <span className="font-medium text-dark">{a.title}</span>
      ),
    },
    {
      key: "date",
      label: "Date",
      render: (a: Article) => (
        <span className="text-sm text-dark/50">{formatDate(a.date)}</span>
      ),
    },
    {
      key: "isPublished",
      label: "Published",
      render: (a: Article) => (
        <div className="flex items-center gap-2">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              a.isPublished ? "bg-accent" : "bg-dark/15"
            }`}
          />
          <span className="text-sm text-dark/50">
            {a.isPublished ? "Published" : "Draft"}
          </span>
        </div>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (a: Article) => (
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openEdit(a);
            }}
            className="text-xs font-medium text-dark/50 transition-colors hover:text-accent"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDeleteTarget(a);
            }}
            className="text-xs font-medium text-dark/30 transition-colors hover:text-dark"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <SearchFilter
          search={search}
          onSearchChange={setSearch}
          placeholder="Search articles..."
        />
        <button
          onClick={openAdd}
          className="rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
        >
          Add Article
        </button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        onRowClick={openEdit}
        emptyMessage="No articles yet."
      />

      {/* Add / Edit Modal */}
      <FormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingArticle ? "Edit Article" : "New Article"}
      >
        <div className="space-y-5">
          <Field label="Title">
            <input
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="w-full border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/40"
              placeholder="Article title"
            />
          </Field>

          <Field label="Excerpt">
            <textarea
              value={formExcerpt}
              onChange={(e) => setFormExcerpt(e.target.value)}
              rows={2}
              className="w-full resize-none rounded-lg border border-dark/10 bg-dark/[0.02] px-3 py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/20"
              placeholder="Short description..."
            />
          </Field>

          <Field label="Content">
            <textarea
              value={formContent}
              onChange={(e) => setFormContent(e.target.value)}
              rows={6}
              className="w-full resize-none rounded-lg border border-dark/10 bg-dark/[0.02] px-3 py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/20"
              placeholder="Full article content..."
            />
          </Field>

          <Field label="Date">
            <input
              type="date"
              value={formDate}
              onChange={(e) => setFormDate(e.target.value)}
              className="w-full border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors focus:border-dark/40"
            />
          </Field>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFormPublished(!formPublished)}
              className={`relative h-5 w-9 rounded-full transition-colors ${
                formPublished ? "bg-accent" : "bg-dark/15"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-cream shadow transition-transform ${
                  formPublished ? "left-[18px]" : "left-0.5"
                }`}
              />
            </button>
            <span className="text-sm text-dark/60">
              {formPublished ? "Published" : "Draft"}
            </span>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={handleSave}
              className="rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
            >
              {editingArticle ? "Save Changes" : "Create Article"}
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="rounded-lg border border-dark/15 px-5 py-2.5 text-sm text-dark/60 transition-colors hover:border-dark/30 hover:text-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </FormModal>

      {/* Delete Confirm */}
      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Article"
        description={`Are you sure you want to delete "${deleteTarget?.title}"? This action cannot be undone.`}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   FAQs TAB
   ───────────────────────────────────────────── */
function FAQsTab({ faqs }: { faqs: FAQ[] }) {
  const { dispatch } = useDashboard();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<FAQ | null>(null);

  // Form state
  const [formQuestion, setFormQuestion] = useState("");
  const [formAnswer, setFormAnswer] = useState("");

  const sorted = useMemo(
    () => [...faqs].sort((a, b) => a.order - b.order),
    [faqs]
  );

  function openAdd() {
    setEditingFAQ(null);
    setFormQuestion("");
    setFormAnswer("");
    setModalOpen(true);
  }

  function openEdit(faq: FAQ) {
    setEditingFAQ(faq);
    setFormQuestion(faq.question);
    setFormAnswer(faq.answer);
    setModalOpen(true);
  }

  function handleSave() {
    if (!formQuestion.trim()) return;

    if (editingFAQ) {
      dispatch({
        type: "UPDATE_FAQ",
        payload: {
          id: editingFAQ.id,
          updates: {
            question: formQuestion,
            answer: formAnswer,
          },
        },
      });
    } else {
      const maxOrder = sorted.length > 0 ? sorted[sorted.length - 1].order : 0;
      dispatch({
        type: "ADD_FAQ",
        payload: {
          question: formQuestion,
          answer: formAnswer,
          order: maxOrder + 1,
        },
      });
    }
    setModalOpen(false);
  }

  function handleDelete() {
    if (deleteTarget) {
      dispatch({ type: "DELETE_FAQ", payload: deleteTarget.id });
      setDeleteTarget(null);
    }
  }

  function moveUp(faq: FAQ) {
    const idx = sorted.findIndex((f) => f.id === faq.id);
    if (idx <= 0) return;
    const prev = sorted[idx - 1];
    dispatch({
      type: "UPDATE_FAQ",
      payload: { id: faq.id, updates: { order: prev.order } },
    });
    dispatch({
      type: "UPDATE_FAQ",
      payload: { id: prev.id, updates: { order: faq.order } },
    });
  }

  function moveDown(faq: FAQ) {
    const idx = sorted.findIndex((f) => f.id === faq.id);
    if (idx < 0 || idx >= sorted.length - 1) return;
    const next = sorted[idx + 1];
    dispatch({
      type: "UPDATE_FAQ",
      payload: { id: faq.id, updates: { order: next.order } },
    });
    dispatch({
      type: "UPDATE_FAQ",
      payload: { id: next.id, updates: { order: faq.order } },
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button
          onClick={openAdd}
          className="rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
        >
          Add FAQ
        </button>
      </div>

      {sorted.length === 0 ? (
        <p className="py-12 text-center text-sm text-dark/30">No FAQs yet.</p>
      ) : (
        <div className="space-y-2">
          {sorted.map((faq, idx) => (
            <motion.div
              key={faq.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="group flex items-start gap-4 rounded-xl border border-dark/5 bg-cream px-5 py-4 transition-colors hover:border-dark/10"
            >
              {/* Order number */}
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dark/5 text-xs font-medium text-dark/40">
                {faq.order}
              </span>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="font-medium text-dark">{faq.question}</p>
                <p className="mt-1 line-clamp-2 text-sm text-dark/50">
                  {faq.answer}
                </p>
              </div>

              {/* Actions */}
              <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                <button
                  onClick={() => moveUp(faq)}
                  disabled={idx === 0}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-dark/30 transition-colors hover:bg-dark/5 hover:text-dark disabled:opacity-20"
                >
                  <ChevronUp className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => moveDown(faq)}
                  disabled={idx === sorted.length - 1}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-dark/30 transition-colors hover:bg-dark/5 hover:text-dark disabled:opacity-20"
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => openEdit(faq)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-dark/30 transition-colors hover:bg-dark/5 hover:text-accent"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setDeleteTarget(faq)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-dark/30 transition-colors hover:bg-dark/5 hover:text-dark"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      <FormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingFAQ ? "Edit FAQ" : "New FAQ"}
      >
        <div className="space-y-5">
          <Field label="Question">
            <textarea
              value={formQuestion}
              onChange={(e) => setFormQuestion(e.target.value)}
              rows={2}
              className="w-full resize-none rounded-lg border border-dark/10 bg-dark/[0.02] px-3 py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/20"
              placeholder="Enter the question..."
            />
          </Field>

          <Field label="Answer">
            <textarea
              value={formAnswer}
              onChange={(e) => setFormAnswer(e.target.value)}
              rows={5}
              className="w-full resize-none rounded-lg border border-dark/10 bg-dark/[0.02] px-3 py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/20"
              placeholder="Enter the answer..."
            />
          </Field>

          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={handleSave}
              className="rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
            >
              {editingFAQ ? "Save Changes" : "Create FAQ"}
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="rounded-lg border border-dark/15 px-5 py-2.5 text-sm text-dark/60 transition-colors hover:border-dark/30 hover:text-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </FormModal>

      {/* Delete Confirm */}
      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete FAQ"
        description={`Are you sure you want to delete this FAQ? This action cannot be undone.`}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   RESOURCES TAB
   ───────────────────────────────────────────── */
function ResourcesTab({ resources }: { resources: Resource[] }) {
  const { dispatch } = useDashboard();
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Resource | null>(null);

  // Form state
  const [formNum, setFormNum] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const filtered = useMemo(() => {
    if (!search) return resources;
    const q = search.toLowerCase();
    return resources.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q)
    );
  }, [resources, search]);

  function openAdd() {
    setEditingResource(null);
    const nextNum =
      resources.length > 0
        ? String(
            Math.max(...resources.map((r) => parseInt(r.num, 10) || 0)) + 1
          ).padStart(2, "0")
        : "01";
    setFormNum(nextNum);
    setFormTitle("");
    setFormDescription("");
    setModalOpen(true);
  }

  function openEdit(resource: Resource) {
    setEditingResource(resource);
    setFormNum(resource.num);
    setFormTitle(resource.title);
    setFormDescription(resource.description);
    setModalOpen(true);
  }

  function handleSave() {
    if (!formTitle.trim()) return;

    if (editingResource) {
      dispatch({
        type: "UPDATE_RESOURCE",
        payload: {
          id: editingResource.id,
          updates: {
            num: formNum,
            title: formTitle,
            description: formDescription,
          },
        },
      });
    } else {
      dispatch({
        type: "ADD_RESOURCE",
        payload: {
          num: formNum,
          title: formTitle,
          description: formDescription,
        },
      });
    }
    setModalOpen(false);
  }

  function handleDelete() {
    if (deleteTarget) {
      dispatch({ type: "DELETE_RESOURCE", payload: deleteTarget.id });
      setDeleteTarget(null);
    }
  }

  const columns = [
    {
      key: "num",
      label: "Num",
      render: (r: Resource) => (
        <span className="font-serif text-lg text-dark/30">{r.num}</span>
      ),
    },
    {
      key: "title",
      label: "Title",
      render: (r: Resource) => (
        <span className="font-medium text-dark">{r.title}</span>
      ),
    },
    {
      key: "description",
      label: "Description",
      render: (r: Resource) => (
        <span className="line-clamp-1 text-sm text-dark/50">
          {r.description}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (r: Resource) => (
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openEdit(r);
            }}
            className="text-xs font-medium text-dark/50 transition-colors hover:text-accent"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDeleteTarget(r);
            }}
            className="text-xs font-medium text-dark/30 transition-colors hover:text-dark"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <SearchFilter
          search={search}
          onSearchChange={setSearch}
          placeholder="Search resources..."
        />
        <button
          onClick={openAdd}
          className="rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
        >
          Add Resource
        </button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        onRowClick={openEdit}
        emptyMessage="No resources yet."
      />

      {/* Add / Edit Modal */}
      <FormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingResource ? "Edit Resource" : "New Resource"}
      >
        <div className="space-y-5">
          <Field label="Number">
            <input
              type="text"
              value={formNum}
              onChange={(e) => setFormNum(e.target.value)}
              className="w-full border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/40"
              placeholder="01"
            />
          </Field>

          <Field label="Title">
            <input
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="w-full border-b border-dark/20 bg-transparent py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/40"
              placeholder="Resource title"
            />
          </Field>

          <Field label="Description">
            <textarea
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
              rows={4}
              className="w-full resize-none rounded-lg border border-dark/10 bg-dark/[0.02] px-3 py-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/20"
              placeholder="Describe this resource..."
            />
          </Field>

          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={handleSave}
              className="rounded-lg bg-dark px-5 py-2.5 text-sm text-cream transition-colors hover:bg-accent"
            >
              {editingResource ? "Save Changes" : "Create Resource"}
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="rounded-lg border border-dark/15 px-5 py-2.5 text-sm text-dark/60 transition-colors hover:border-dark/30 hover:text-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </FormModal>

      {/* Delete Confirm */}
      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Resource"
        description={`Are you sure you want to delete "${deleteTarget?.title}"? This action cannot be undone.`}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Shared Field wrapper
   ───────────────────────────────────────────── */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-dark/40">
        {label}
      </label>
      {children}
    </div>
  );
}

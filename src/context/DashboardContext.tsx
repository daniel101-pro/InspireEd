"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import type {
  DashboardData, Program, VolunteerApplication, Article, FAQ,
  Resource, TeamMember, Partner, MentorshipApplication, MentorMenteePair,
  SiteSettings, ImpactStats, GalleryImage, ContactMessage, AnalyticsTrend,
} from "@/types/dashboard";
import { seedData } from "@/data/seed";
import { getAuthToken } from "@/lib/dashboardAuth";
import { createId, today } from "@/lib/id";

type Action =
  | { type: "SET_ALL"; payload: DashboardData }
  | { type: "ADD_PROGRAM"; payload: Omit<Program, "id" | "createdAt" | "updatedAt"> }
  | { type: "UPDATE_PROGRAM"; payload: { id: string; updates: Partial<Program> } }
  | { type: "DELETE_PROGRAM"; payload: string }
  | { type: "TOGGLE_PROGRAM"; payload: string }
  | { type: "ADD_VOLUNTEER"; payload: Omit<VolunteerApplication, "id" | "status" | "submittedAt"> }
  | { type: "UPDATE_VOLUNTEER_STATUS"; payload: { id: string; status: VolunteerApplication["status"] } }
  | { type: "DELETE_VOLUNTEER"; payload: string }
  | { type: "ADD_ARTICLE"; payload: Omit<Article, "id"> }
  | { type: "UPDATE_ARTICLE"; payload: { id: string; updates: Partial<Article> } }
  | { type: "DELETE_ARTICLE"; payload: string }
  | { type: "ADD_FAQ"; payload: Omit<FAQ, "id"> }
  | { type: "UPDATE_FAQ"; payload: { id: string; updates: Partial<FAQ> } }
  | { type: "DELETE_FAQ"; payload: string }
  | { type: "ADD_RESOURCE"; payload: Omit<Resource, "id"> }
  | { type: "UPDATE_RESOURCE"; payload: { id: string; updates: Partial<Resource> } }
  | { type: "DELETE_RESOURCE"; payload: string }
  | { type: "ADD_TEAM_MEMBER"; payload: Omit<TeamMember, "id"> }
  | { type: "UPDATE_TEAM_MEMBER"; payload: { id: string; updates: Partial<TeamMember> } }
  | { type: "DELETE_TEAM_MEMBER"; payload: string }
  | { type: "ADD_PARTNER"; payload: string }
  | { type: "DELETE_PARTNER"; payload: string }
  | { type: "ADD_MENTORSHIP_APPLICATION"; payload: Omit<MentorshipApplication, "id" | "status" | "submittedAt"> }
  | { type: "UPDATE_MENTORSHIP_APP_STATUS"; payload: { id: string; status: MentorshipApplication["status"] } }
  | { type: "DELETE_MENTORSHIP_APPLICATION"; payload: string }
  | { type: "ADD_MENTOR_PAIR"; payload: Omit<MentorMenteePair, "id"> }
  | { type: "UPDATE_MENTOR_PAIR"; payload: { id: string; updates: Partial<MentorMenteePair> } }
  | { type: "DELETE_MENTOR_PAIR"; payload: string }
  | { type: "UPDATE_CONTACT_MESSAGE_STATUS"; payload: { id: string; status: ContactMessage["status"] } }
  | { type: "DELETE_CONTACT_MESSAGE"; payload: string }
  | { type: "UPDATE_SETTINGS"; payload: Partial<SiteSettings> }
  | { type: "UPDATE_STATS"; payload: Partial<ImpactStats> }
  | { type: "UPDATE_TRENDS"; payload: AnalyticsTrend[] }
  | { type: "ADD_GALLERY_IMAGE"; payload: Omit<GalleryImage, "id" | "createdAt"> }
  | { type: "UPDATE_GALLERY_IMAGE"; payload: { id: string; updates: Partial<GalleryImage> } }
  | { type: "DELETE_GALLERY_IMAGE"; payload: string }
  | { type: "RESET" };

function reducer(state: DashboardData, action: Action): DashboardData {
  switch (action.type) {
    case "SET_ALL":
      return action.payload;
    case "RESET":
      return { ...seedData };

    case "ADD_PROGRAM":
      return { ...state, programs: [...state.programs, { ...action.payload, id: createId(), createdAt: today(), updatedAt: today() }] };
    case "UPDATE_PROGRAM":
      return { ...state, programs: state.programs.map((p) => p.id === action.payload.id ? { ...p, ...action.payload.updates, updatedAt: today() } : p) };
    case "DELETE_PROGRAM":
      return { ...state, programs: state.programs.filter((p) => p.id !== action.payload) };
    case "TOGGLE_PROGRAM":
      return { ...state, programs: state.programs.map((p) => p.id === action.payload ? { ...p, isActive: !p.isActive, updatedAt: today() } : p) };

    case "ADD_VOLUNTEER":
      return { ...state, volunteers: [{ ...action.payload, id: createId(), status: "pending", submittedAt: today() }, ...state.volunteers] };
    case "UPDATE_VOLUNTEER_STATUS":
      return { ...state, volunteers: state.volunteers.map((v) => v.id === action.payload.id ? { ...v, status: action.payload.status, reviewedAt: today() } : v) };
    case "DELETE_VOLUNTEER":
      return { ...state, volunteers: state.volunteers.filter((v) => v.id !== action.payload) };

    case "ADD_ARTICLE":
      return { ...state, articles: [...state.articles, { ...action.payload, id: createId() }] };
    case "UPDATE_ARTICLE":
      return { ...state, articles: state.articles.map((a) => a.id === action.payload.id ? { ...a, ...action.payload.updates } : a) };
    case "DELETE_ARTICLE":
      return { ...state, articles: state.articles.filter((a) => a.id !== action.payload) };

    case "ADD_FAQ":
      return { ...state, faqs: [...state.faqs, { ...action.payload, id: createId() }] };
    case "UPDATE_FAQ":
      return { ...state, faqs: state.faqs.map((f) => f.id === action.payload.id ? { ...f, ...action.payload.updates } : f) };
    case "DELETE_FAQ":
      return { ...state, faqs: state.faqs.filter((f) => f.id !== action.payload) };

    case "ADD_RESOURCE":
      return { ...state, resources: [...state.resources, { ...action.payload, id: createId() }] };
    case "UPDATE_RESOURCE":
      return { ...state, resources: state.resources.map((r) => r.id === action.payload.id ? { ...r, ...action.payload.updates } : r) };
    case "DELETE_RESOURCE":
      return { ...state, resources: state.resources.filter((r) => r.id !== action.payload) };

    case "ADD_TEAM_MEMBER":
      return { ...state, teamMembers: [...state.teamMembers, { ...action.payload, id: createId() }] };
    case "UPDATE_TEAM_MEMBER":
      return { ...state, teamMembers: state.teamMembers.map((t) => t.id === action.payload.id ? { ...t, ...action.payload.updates } : t) };
    case "DELETE_TEAM_MEMBER":
      return { ...state, teamMembers: state.teamMembers.filter((t) => t.id !== action.payload) };

    case "ADD_PARTNER": {
      const partners = [...state.partners, { id: createId(), name: action.payload }];
      return { ...state, partners, stats: { ...state.stats, communityPartners: partners.length } };
    }
    case "DELETE_PARTNER": {
      const partners = state.partners.filter((p) => p.id !== action.payload);
      return { ...state, partners, stats: { ...state.stats, communityPartners: partners.length } };
    }

    case "ADD_MENTORSHIP_APPLICATION":
      return { ...state, mentorshipApplications: [{ ...action.payload, id: createId(), status: "pending", submittedAt: today() }, ...state.mentorshipApplications] };
    case "UPDATE_MENTORSHIP_APP_STATUS":
      return { ...state, mentorshipApplications: state.mentorshipApplications.map((a) => a.id === action.payload.id ? { ...a, status: action.payload.status } : a) };
    case "DELETE_MENTORSHIP_APPLICATION":
      return { ...state, mentorshipApplications: state.mentorshipApplications.filter((a) => a.id !== action.payload) };

    case "ADD_MENTOR_PAIR":
      return { ...state, mentorPairs: [...state.mentorPairs, { ...action.payload, id: createId() }] };
    case "UPDATE_MENTOR_PAIR":
      return { ...state, mentorPairs: state.mentorPairs.map((p) => p.id === action.payload.id ? { ...p, ...action.payload.updates } : p) };
    case "DELETE_MENTOR_PAIR":
      return { ...state, mentorPairs: state.mentorPairs.filter((p) => p.id !== action.payload) };

    case "UPDATE_CONTACT_MESSAGE_STATUS":
      return { ...state, contactMessages: state.contactMessages.map((m) => m.id === action.payload.id ? { ...m, status: action.payload.status } : m) };
    case "DELETE_CONTACT_MESSAGE":
      return { ...state, contactMessages: state.contactMessages.filter((m) => m.id !== action.payload) };

    case "UPDATE_SETTINGS":
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case "UPDATE_STATS":
      return { ...state, stats: { ...state.stats, ...action.payload } };
    case "UPDATE_TRENDS":
      return { ...state, trends: action.payload };

    case "ADD_GALLERY_IMAGE":
      return { ...state, gallery: [...state.gallery, { ...action.payload, id: createId(), createdAt: today() }] };
    case "UPDATE_GALLERY_IMAGE":
      return { ...state, gallery: state.gallery.map((g) => g.id === action.payload.id ? { ...g, ...action.payload.updates } : g) };
    case "DELETE_GALLERY_IMAGE":
      return { ...state, gallery: state.gallery.filter((g) => g.id !== action.payload) };

    default:
      return state;
  }
}

interface DashboardContextType {
  data: DashboardData;
  loading: boolean;
  saving: boolean;
  saveError: string | null;
  dispatch: React.Dispatch<Action>;
  refreshContent: () => Promise<void>;
}

const DashboardContext = createContext<DashboardContextType | null>(null);

async function fetchContent(): Promise<DashboardData> {
  const response = await fetch("/api/content");
  if (!response.ok) throw new Error("Failed to load site content");
  return response.json() as Promise<DashboardData>;
}

async function saveContent(data: DashboardData): Promise<void> {
  const token = getAuthToken();
  const response = await fetch("/api/content", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(body?.error ?? "Failed to save site content");
  }
}

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [data, dispatch] = useReducer(reducer, seedData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const hydrated = useRef(false);
  const skipSave = useRef(false);

  const refreshContent = useCallback(async () => {
    skipSave.current = true;
    try {
      const content = await fetchContent();
      dispatch({ type: "SET_ALL", payload: content });
    } finally {
      skipSave.current = false;
    }
  }, []);

  useEffect(() => {
    refreshContent()
      .catch(() => {
        // Fall back to bundled seed data if the API is unavailable.
      })
      .finally(() => {
        hydrated.current = true;
        setLoading(false);
      });
  }, [refreshContent]);

  useEffect(() => {
    if (!hydrated.current || loading || skipSave.current) return;
    if (!getAuthToken()) return;

    setSaving(true);
    setSaveError(null);

    const timeout = setTimeout(() => {
      saveContent(data)
        .then(() => setSaveError(null))
        .catch((error: Error) => setSaveError(error.message))
        .finally(() => setSaving(false));
    }, 600);

    return () => clearTimeout(timeout);
  }, [data, loading]);

  return (
    <DashboardContext.Provider value={{ data, loading, saving, saveError, dispatch, refreshContent }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
}

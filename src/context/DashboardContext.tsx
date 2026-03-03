"use client";

import { createContext, useContext, useReducer, useEffect, useState, ReactNode } from "react";
import type {
  DashboardData, Program, VolunteerApplication, Article, FAQ,
  Resource, TeamMember, Partner, MentorshipApplication, MentorMenteePair,
  SiteSettings, ImpactStats, GalleryImage,
} from "@/types/dashboard";
import { seedData } from "@/data/seed";

const STORAGE_KEY = "inspired-dashboard-data";

function genId() {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

function now() {
  return new Date().toISOString().split("T")[0];
}

type Action =
  | { type: "SET_ALL"; payload: DashboardData }
  | { type: "ADD_PROGRAM"; payload: Omit<Program, "id" | "createdAt" | "updatedAt"> }
  | { type: "UPDATE_PROGRAM"; payload: { id: string; updates: Partial<Program> } }
  | { type: "DELETE_PROGRAM"; payload: string }
  | { type: "TOGGLE_PROGRAM"; payload: string }
  | { type: "UPDATE_VOLUNTEER_STATUS"; payload: { id: string; status: VolunteerApplication["status"] } }
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
  | { type: "ADD_MENTOR_PAIR"; payload: Omit<MentorMenteePair, "id"> }
  | { type: "UPDATE_MENTOR_PAIR"; payload: { id: string; updates: Partial<MentorMenteePair> } }
  | { type: "UPDATE_MENTORSHIP_APP_STATUS"; payload: { id: string; status: MentorshipApplication["status"] } }
  | { type: "UPDATE_SETTINGS"; payload: Partial<SiteSettings> }
  | { type: "UPDATE_STATS"; payload: Partial<ImpactStats> }
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

    // Programs
    case "ADD_PROGRAM":
      return { ...state, programs: [...state.programs, { ...action.payload, id: genId(), createdAt: now(), updatedAt: now() }] };
    case "UPDATE_PROGRAM":
      return { ...state, programs: state.programs.map(p => p.id === action.payload.id ? { ...p, ...action.payload.updates, updatedAt: now() } : p) };
    case "DELETE_PROGRAM":
      return { ...state, programs: state.programs.filter(p => p.id !== action.payload) };
    case "TOGGLE_PROGRAM":
      return { ...state, programs: state.programs.map(p => p.id === action.payload ? { ...p, isActive: !p.isActive, updatedAt: now() } : p) };

    // Volunteers
    case "UPDATE_VOLUNTEER_STATUS":
      return { ...state, volunteers: state.volunteers.map(v => v.id === action.payload.id ? { ...v, status: action.payload.status, reviewedAt: now() } : v) };

    // Articles
    case "ADD_ARTICLE":
      return { ...state, articles: [...state.articles, { ...action.payload, id: genId() }] };
    case "UPDATE_ARTICLE":
      return { ...state, articles: state.articles.map(a => a.id === action.payload.id ? { ...a, ...action.payload.updates } : a) };
    case "DELETE_ARTICLE":
      return { ...state, articles: state.articles.filter(a => a.id !== action.payload) };

    // FAQs
    case "ADD_FAQ":
      return { ...state, faqs: [...state.faqs, { ...action.payload, id: genId() }] };
    case "UPDATE_FAQ":
      return { ...state, faqs: state.faqs.map(f => f.id === action.payload.id ? { ...f, ...action.payload.updates } : f) };
    case "DELETE_FAQ":
      return { ...state, faqs: state.faqs.filter(f => f.id !== action.payload) };

    // Resources
    case "ADD_RESOURCE":
      return { ...state, resources: [...state.resources, { ...action.payload, id: genId() }] };
    case "UPDATE_RESOURCE":
      return { ...state, resources: state.resources.map(r => r.id === action.payload.id ? { ...r, ...action.payload.updates } : r) };
    case "DELETE_RESOURCE":
      return { ...state, resources: state.resources.filter(r => r.id !== action.payload) };

    // Team
    case "ADD_TEAM_MEMBER":
      return { ...state, teamMembers: [...state.teamMembers, { ...action.payload, id: genId() }] };
    case "UPDATE_TEAM_MEMBER":
      return { ...state, teamMembers: state.teamMembers.map(t => t.id === action.payload.id ? { ...t, ...action.payload.updates } : t) };
    case "DELETE_TEAM_MEMBER":
      return { ...state, teamMembers: state.teamMembers.filter(t => t.id !== action.payload) };

    // Partners
    case "ADD_PARTNER":
      return { ...state, partners: [...state.partners, { id: genId(), name: action.payload }] };
    case "DELETE_PARTNER":
      return { ...state, partners: state.partners.filter(p => p.id !== action.payload) };

    // Mentorship
    case "ADD_MENTOR_PAIR":
      return { ...state, mentorPairs: [...state.mentorPairs, { ...action.payload, id: genId() }] };
    case "UPDATE_MENTOR_PAIR":
      return { ...state, mentorPairs: state.mentorPairs.map(p => p.id === action.payload.id ? { ...p, ...action.payload.updates } : p) };
    case "UPDATE_MENTORSHIP_APP_STATUS":
      return { ...state, mentorshipApplications: state.mentorshipApplications.map(a => a.id === action.payload.id ? { ...a, status: action.payload.status } : a) };

    // Gallery
    case "ADD_GALLERY_IMAGE":
      return { ...state, gallery: [...state.gallery, { ...action.payload, id: genId(), createdAt: now() }] };
    case "UPDATE_GALLERY_IMAGE":
      return { ...state, gallery: state.gallery.map(g => g.id === action.payload.id ? { ...g, ...action.payload.updates } : g) };
    case "DELETE_GALLERY_IMAGE":
      return { ...state, gallery: state.gallery.filter(g => g.id !== action.payload) };

    // Settings
    case "UPDATE_SETTINGS":
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case "UPDATE_STATS":
      return { ...state, stats: { ...state.stats, ...action.payload } };

    default:
      return state;
  }
}

interface DashboardContextType {
  data: DashboardData;
  loading: boolean;
  dispatch: React.Dispatch<Action>;
}

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [data, dispatch] = useReducer(reducer, seedData);
  const [loading, setLoading] = useState(true);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<DashboardData>;
        dispatch({ type: "SET_ALL", payload: { ...seedData, ...parsed, gallery: parsed.gallery ?? seedData.gallery } });
      }
    } catch {
      // Use seed data on error
    }
    setLoading(false);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, loading]);

  return (
    <DashboardContext.Provider value={{ data, loading, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
}

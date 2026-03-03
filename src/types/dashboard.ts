export interface Program {
  id: string;
  type: "study-session" | "workshop" | "event";
  title: string;
  description: string;
  schedule?: string;
  date?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  title: string;
  bio: string;
}

export interface Partner {
  id: string;
  name: string;
}

export interface VolunteerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  roleInterest: string;
  whyVolunteer: string;
  availability: string[];
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  reviewedAt?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  isPublished: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface Resource {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface MentorshipApplication {
  id: string;
  name: string;
  email: string;
  type: "mentor" | "mentee";
  interests: string;
  status: "pending" | "matched" | "active" | "completed";
  submittedAt: string;
}

export interface MentorMenteePair {
  id: string;
  mentorName: string;
  menteeName: string;
  status: "active" | "paused" | "completed";
  startDate: string;
  goals: string;
}

export interface SiteSettings {
  email: string;
  phone: string;
  address: string;
  officeHours: string;
}

export interface ImpactStats {
  youthImpacted: number;
  mentorsVolunteers: number;
  programsDelivered: number;
  communityPartners: number;
}

export interface AnalyticsTrend {
  month: string;
  youth: number;
  volunteers: number;
  programs: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  createdAt: string;
}

export interface DashboardData {
  programs: Program[];
  volunteers: VolunteerApplication[];
  articles: Article[];
  faqs: FAQ[];
  resources: Resource[];
  teamMembers: TeamMember[];
  partners: Partner[];
  mentorshipApplications: MentorshipApplication[];
  mentorPairs: MentorMenteePair[];
  settings: SiteSettings;
  stats: ImpactStats;
  trends: AnalyticsTrend[];
  gallery: GalleryImage[];
}

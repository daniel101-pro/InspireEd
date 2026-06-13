import { createId, today } from "@/lib/id";
import { mutateContent } from "@/lib/contentStore";
import type {
  ContactMessage,
  MentorshipApplication,
  VolunteerApplication,
} from "@/types/dashboard";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitVolunteerApplication(input: {
  fullName: string;
  email: string;
  phone: string;
  roleInterest: string;
  whyVolunteer: string;
  availability: string[];
}) {
  if (!input.fullName.trim() || !isEmail(input.email) || !input.roleInterest.trim()) {
    throw new Error("Missing required volunteer fields");
  }

  const application: VolunteerApplication = {
    id: createId(),
    fullName: input.fullName.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    roleInterest: input.roleInterest.trim(),
    whyVolunteer: input.whyVolunteer.trim(),
    availability: input.availability,
    status: "pending",
    submittedAt: today(),
  };

  return mutateContent((data) => ({
    ...data,
    volunteers: [application, ...data.volunteers],
  }));
}

export async function submitContactMessage(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!input.name.trim() || !isEmail(input.email) || !input.subject.trim() || !input.message.trim()) {
    throw new Error("Missing required contact fields");
  }

  const message: ContactMessage = {
    id: createId(),
    name: input.name.trim(),
    email: input.email.trim(),
    subject: input.subject.trim(),
    message: input.message.trim(),
    status: "new",
    submittedAt: today(),
  };

  return mutateContent((data) => ({
    ...data,
    contactMessages: [message, ...data.contactMessages],
  }));
}

export async function submitMentorshipApplication(input: {
  name: string;
  email: string;
  type: "mentor" | "mentee";
  interests: string;
}) {
  if (!input.name.trim() || !isEmail(input.email) || !input.interests.trim()) {
    throw new Error("Missing required mentorship fields");
  }

  const application: MentorshipApplication = {
    id: createId(),
    name: input.name.trim(),
    email: input.email.trim(),
    type: input.type,
    interests: input.interests.trim(),
    status: "pending",
    submittedAt: today(),
  };

  return mutateContent((data) => ({
    ...data,
    mentorshipApplications: [application, ...data.mentorshipApplications],
  }));
}

import type { DashboardData } from "@/types/dashboard";

export const seedData: DashboardData = {
  programs: [
    { id: "p1", type: "study-session", title: "Learning Sessions & Webinars", description: "Engaging learning sessions and webinars where students interact with experienced professionals, mentors, entrepreneurs, and experts from different industries.", isActive: true, createdAt: "2025-09-01", updatedAt: "2025-09-01" },
    { id: "p2", type: "study-session", title: "Mentorship & Career Guidance", description: "Connecting students with mentors who provide guidance on education, career paths, and personal development.", isActive: true, createdAt: "2025-09-01", updatedAt: "2025-09-01" },
    { id: "p3", type: "study-session", title: "Application & Opportunity Support", description: "Helping students prepare strong applications for scholarships, schools, internships, and leadership opportunities.", isActive: true, createdAt: "2025-09-01", updatedAt: "2025-09-01" },
    { id: "p4", type: "study-session", title: "Student Community & Networking", description: "A growing community where students connect, share ideas, collaborate, and support each other's growth.", isActive: true, createdAt: "2025-09-15", updatedAt: "2025-09-15" },
    { id: "p5", type: "study-session", title: "High School Ambassadors Program", description: "Empowering passionate students to represent InspireED in their schools and communities.", isActive: true, createdAt: "2025-09-15", updatedAt: "2025-09-15" },
    { id: "p6", type: "study-session", title: "Youth Empowerment Initiatives", description: "Initiatives and projects focused on empowering young people with knowledge, leadership skills, and confidence.", isActive: true, createdAt: "2025-09-15", updatedAt: "2025-09-15" },
    { id: "p7", type: "workshop", title: "Application & Opportunity Workshops", description: "Students learn how to create strong applications for scholarships, schools, internships, and leadership opportunities.", isActive: true, createdAt: "2025-10-01", updatedAt: "2025-10-01" },
    { id: "p8", type: "workshop", title: "Career Exploration Workshops", description: "Workshops that expose students to different career paths by connecting them with professionals from various industries.", isActive: true, createdAt: "2025-10-01", updatedAt: "2025-10-01" },
    { id: "p9", type: "workshop", title: "Leadership & Personal Development Workshops", description: "Students develop essential life skills such as leadership, communication, critical thinking, and confidence.", isActive: true, createdAt: "2025-10-01", updatedAt: "2025-10-01" },
    { id: "p10", type: "workshop", title: "Skills & Knowledge Workshops", description: "Focused sessions on practical skills such as public speaking, networking, personal branding, and preparing for future opportunities.", isActive: true, createdAt: "2025-10-01", updatedAt: "2025-10-01" },
    { id: "p11", type: "event", title: "Annual Ambassador's Picnic", description: "An exclusive event for InspireED ambassadors to connect, celebrate their achievements, and build stronger bonds. Happens every August.", date: "August (Annual)", isActive: true, createdAt: "2025-11-01", updatedAt: "2025-11-01" },
    { id: "p12", type: "event", title: "InspireED Partnership Summit", description: "An annual event with InspireED initiative and our partners and collaborators to network and build meaningful connections.", date: "Annual", isActive: true, createdAt: "2025-11-01", updatedAt: "2025-11-01" },
  ],

  volunteers: [
    { id: "v1", fullName: "Sarah Mitchell", email: "sarah.m@email.com", phone: "(555) 234-5678", roleInterest: "Community Manager", whyVolunteer: "I want to give back to the community and help students succeed in their academic journey. Education changed my life and I want to pay it forward.", availability: ["Weekdays", "Evenings"], status: "approved", submittedAt: "2025-12-15", reviewedAt: "2025-12-18" },
    { id: "v2", fullName: "James Carter", email: "j.carter@email.com", phone: "(555) 345-6789", roleInterest: "Content Creator", whyVolunteer: "As a writer, I believe in the power of compelling content to inspire and educate young people.", availability: ["Weekends"], status: "approved", submittedAt: "2025-12-20", reviewedAt: "2025-12-22" },
    { id: "v3", fullName: "Maria Lopez", email: "maria.l@email.com", phone: "(555) 456-7890", roleInterest: "Graphics Designer", whyVolunteer: "I have extensive design experience and would love to help create visual content for InspireED.", availability: ["Weekdays", "Weekends"], status: "pending", submittedAt: "2026-01-05" },
    { id: "v4", fullName: "David Kim", email: "d.kim@email.com", phone: "(555) 567-8901", roleInterest: "Video Editor", whyVolunteer: "I'm passionate about video production and would love to help bring InspireED's content to life.", availability: ["Evenings"], status: "pending", submittedAt: "2026-01-10" },
    { id: "v5", fullName: "Aisha Patel", email: "aisha.p@email.com", phone: "(555) 678-9012", roleInterest: "Ambassador", whyVolunteer: "I believe in InspireED's mission and want to represent the organization at my school.", availability: ["Weekdays", "Weekends", "Evenings"], status: "approved", submittedAt: "2025-11-20", reviewedAt: "2025-11-25" },
    { id: "v6", fullName: "Robert Chen", email: "r.chen@email.com", phone: "(555) 789-0123", roleInterest: "Social Media Handler", whyVolunteer: "I have social media management experience and want to help InspireED grow its online presence.", availability: ["Weekdays"], status: "approved", submittedAt: "2025-10-15", reviewedAt: "2025-10-20" },
    { id: "v7", fullName: "Emma Wilson", email: "emma.w@email.com", phone: "(555) 890-1234", roleInterest: "Head of Programs", whyVolunteer: "I have program management experience and would love to help coordinate InspireED's initiatives.", availability: ["Weekends", "Evenings"], status: "pending", submittedAt: "2026-02-01" },
    { id: "v8", fullName: "Tyrone Jackson", email: "t.jackson@email.com", phone: "(555) 901-2345", roleInterest: "Content Creator", whyVolunteer: "I want to use my writing skills to create content that empowers and inspires students.", availability: ["Weekdays", "Weekends"], status: "pending", submittedAt: "2026-02-15" },
  ],

  articles: [
    { id: "a1", title: "5 Study Habits That Actually Work", excerpt: "Discover evidence-based study techniques that can transform your learning.", content: "Full article content about study habits including spaced repetition, active recall, and more.", date: "2026-01-15", isPublished: true },
    { id: "a2", title: "Building Your First Resume: A Step-by-Step Guide", excerpt: "Everything you need to create a professional resume that stands out.", content: "Comprehensive guide covering resume format, content, and common mistakes to avoid.", date: "2026-02-01", isPublished: true },
    { id: "a3", title: "Why Mentorship Matters: Stories from Our Community", excerpt: "Real stories from mentors and mentees about the power of guidance.", content: "Collection of testimonials and stories about how mentorship has impacted lives in our community.", date: "2026-02-20", isPublished: true },
  ],

  faqs: [
    { id: "f1", question: "Who can participate in InspireED programs?", answer: "Our programs are open to all young people, especially students. We welcome participants from all backgrounds and experience levels.", order: 1 },
    { id: "f2", question: "Are programs free?", answer: "Yes, all InspireED programs are completely free. We believe education and development should be accessible to everyone.", order: 2 },
    { id: "f3", question: "How do I sign up?", answer: "You can sign up through our Contact page, join our WhatsApp community, or reach out to us directly via email at inspireed.org@gmail.com.", order: 3 },
    { id: "f4", question: "Where are sessions held?", answer: "Our sessions are primarily held virtually, making them accessible to students anywhere. We also organize in-person events and picnics.", order: 4 },
    { id: "f5", question: "How can I become an ambassador?", answer: "Visit our Volunteer page and apply through the application form. Select 'Ambassador' as your role of interest and we'll get back to you within 48 hours.", order: 5 },
    { id: "f6", question: "How can I partner with InspireED?", answer: "We welcome partnerships with organizations, schools, and individuals. Contact us through our Contact page or email us at inspireed.org@gmail.com to explore collaboration opportunities.", order: 6 },
  ],

  resources: [
    { id: "r1", num: "01", title: "Study Guides & Worksheets", description: "Comprehensive materials covering core subjects to supplement your learning." },
    { id: "r2", num: "02", title: "College Prep Toolkit", description: "Everything you need for college applications, essays, and standardized test preparation." },
    { id: "r3", num: "03", title: "Scholarship Database", description: "A curated collection of scholarships and financial aid opportunities for students." },
    { id: "r4", num: "04", title: "Career Exploration Kit", description: "Assessment tools, career path guides, and industry overviews to help you find your path." },
  ],

  teamMembers: [
    { id: "t1", name: "Raphael Ogundipe", initials: "RO", title: "Founder & Team Lead", bio: "Visionary behind InspireED initiative. A 15-year-old changemaker, moved by impact and ready to lead the giants of the next generation into greatness!" },
    { id: "t2", name: "Rita", initials: "RI", title: "Graphic Designer", bio: "Her creativity and design skills are truly unmatched. Rita effortlessly brings our vision to life with creative and on-message designs." },
    { id: "t3", name: "Yewande", initials: "YE", title: "Programs Coordinator", bio: "The driving force behind our events, meticulously planning every detail from schedules to logistics." },
    { id: "t4", name: "Favour", initials: "FA", title: "Social Media Manager", bio: "The heartbeat of our Instagram presence, crafting engaging posts and fostering a vibrant online community." },
    { id: "t5", name: "Samuel", initials: "SA", title: "Content Writer", bio: "Our go-to wordsmith, stepping in with creative ideas and engaging text whenever fresh content is needed." },
    { id: "t6", name: "Opemipo", initials: "OP", title: "PR & Community Manager", bio: "The pillar of our community management, ensuring our group remains positive, engaged, and well-organized." },
    { id: "t7", name: "Gifted", initials: "GI", title: "Video Creator", bio: "Our video expert, bringing content to life with creative and visually compelling productions." },
  ],

  partners: [
    { id: "pr1", name: "iCove Initiative" },
    { id: "pr2", name: "Femi Omolade Private College" },
    { id: "pr3", name: "Seyi Ogundipe" },
    { id: "pr4", name: "Daniel Falodun" },
    { id: "pr5", name: "Forge Africa" },
  ],

  mentorshipApplications: [
    { id: "ma1", name: "Dr. Rachel Foster", email: "r.foster@email.com", type: "mentor", interests: "Career development, academic guidance, leadership skills", status: "active", submittedAt: "2025-09-10" },
    { id: "ma2", name: "Kevin Thompson", email: "k.thompson@email.com", type: "mentor", interests: "Technology, entrepreneurship, coding", status: "active", submittedAt: "2025-09-15" },
    { id: "ma3", name: "Lisa Wang", email: "l.wang@email.com", type: "mentor", interests: "Creative arts, writing, self-expression", status: "pending", submittedAt: "2026-01-20" },
    { id: "ma4", name: "Jordan Ellis", email: "j.ellis@email.com", type: "mentee", interests: "I want to learn about careers in healthcare", status: "active", submittedAt: "2025-10-01" },
    { id: "ma5", name: "Zara Ahmed", email: "z.ahmed@email.com", type: "mentee", interests: "Looking for guidance in college applications and choosing a major", status: "active", submittedAt: "2025-10-05" },
    { id: "ma6", name: "Tyler Brooks", email: "t.brooks@email.com", type: "mentee", interests: "Want to start a small business and need guidance", status: "pending", submittedAt: "2026-02-10" },
    { id: "ma7", name: "Maya Singh", email: "m.singh@email.com", type: "mentee", interests: "Interested in coding and tech career paths", status: "matched", submittedAt: "2026-01-15" },
  ],

  mentorPairs: [
    { id: "mp1", mentorName: "Dr. Rachel Foster", menteeName: "Jordan Ellis", status: "active", startDate: "2025-10-15", goals: "Explore healthcare careers, shadow at hospital, prepare for pre-med track" },
    { id: "mp2", mentorName: "Kevin Thompson", menteeName: "Zara Ahmed", status: "active", startDate: "2025-10-20", goals: "College application essays, major selection, scholarship applications" },
    { id: "mp3", mentorName: "Kevin Thompson", menteeName: "Maya Singh", status: "active", startDate: "2026-02-01", goals: "Learn Python basics, build a portfolio project, explore tech internships" },
  ],

  settings: {
    email: "inspireed.org@gmail.com",
    phone: "+(234) 8109198312",
    address: "",
    officeHours: "",
  },

  stats: {
    youthImpacted: 150,
    mentorsVolunteers: 30,
    programsDelivered: 3,
    communityPartners: 10,
  },

  trends: [
    { month: "Apr", youth: 20, volunteers: 5, programs: 1 },
    { month: "May", youth: 35, volunteers: 8, programs: 1 },
    { month: "Jun", youth: 45, volunteers: 10, programs: 1 },
    { month: "Jul", youth: 55, volunteers: 12, programs: 2 },
    { month: "Aug", youth: 65, volunteers: 14, programs: 2 },
    { month: "Sep", youth: 80, volunteers: 16, programs: 2 },
    { month: "Oct", youth: 95, volunteers: 20, programs: 3 },
    { month: "Nov", youth: 110, volunteers: 22, programs: 3 },
    { month: "Dec", youth: 120, volunteers: 24, programs: 3 },
    { month: "Jan", youth: 130, volunteers: 26, programs: 3 },
    { month: "Feb", youth: 140, volunteers: 28, programs: 3 },
    { month: "Mar", youth: 150, volunteers: 30, programs: 3 },
  ],

  gallery: [
    { id: "g1", src: "/Gallery/1-1.png", alt: "November Spotlight — Seyi Emmanuel Ogundipe on the Stand Out Factor", category: "Spotlight", createdAt: "2025-11-29" },
    { id: "g2", src: "/Gallery/3.png", alt: "November Spotlight — Varnessa Kayen Varlyngton, Eco Journalist & UN CC:Learn Champion", category: "Spotlight", createdAt: "2025-11-29" },
    { id: "g3", src: "/Gallery/4-4.png", alt: "January Spotlight — Chidera Duru on Education and Technology", category: "Spotlight", createdAt: "2026-01-03" },
    { id: "g4", src: "/Gallery/5.png", alt: "The Stand Out Factor — Secret to a Memorable Application", category: "Events", createdAt: "2025-11-29" },
    { id: "g5", src: "/Gallery/5-3.png", alt: "January Spotlight — Tony Odhiambo, MIT Scholar & STEM Educator", category: "Spotlight", createdAt: "2026-01-03" },
    { id: "g6", src: "/Gallery/6-1.png", alt: "School Ambassador — Kabengwa Eric, Makerere University, Uganda", category: "Ambassadors", createdAt: "2025-10-01" },
    { id: "g7", src: "/Gallery/7.png", alt: "School Ambassador — Omar Touray, Gambia Senior Secondary School", category: "Ambassadors", createdAt: "2025-10-15" },
    { id: "g8", src: "/Gallery/9-2.png", alt: "School Ambassador — Bonou Precious, Honour Comprehensive High School", category: "Ambassadors", createdAt: "2025-10-20" },
    { id: "g9", src: "/Gallery/10.png", alt: "School Ambassador — Aghomi Dabo, Honour Comprehensive High School", category: "Ambassadors", createdAt: "2025-10-25" },
    { id: "g10", src: "/Gallery/14-1.png", alt: "Unlocking the Power of Technology and Education — Session Theme", category: "Events", createdAt: "2026-01-03" },
    { id: "g11", src: "/Gallery/17_20260227_204106_0016.png", alt: "Digital Fame — Becoming a Recognizable Voice Online", category: "Events", createdAt: "2026-02-28" },
    { id: "g12", src: "/Gallery/InspirED.png", alt: "School Ambassador — Olanireti Godgift, Career Builder College", category: "Ambassadors", createdAt: "2025-11-01" },
    { id: "g13", src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20.png", alt: "Meet the InspireED Team — The People Behind the Mission", category: "Community", createdAt: "2025-09-01" },
    { id: "g14", src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20_20260220_134701_0000.png", alt: "January Project Winners — Team The Optimistics One", category: "Community", createdAt: "2026-01-20" },
    { id: "g15", src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20_20260227_204721_0000.png", alt: "February Spotlight — Oluwadamilare Joseph on Digital Fame", category: "Spotlight", createdAt: "2026-02-28" },
    { id: "g16", src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20(2)-2.png", alt: "November Spotlight — Daniel Falodun, Full-Stack Developer & Rise Global Fellow", category: "Spotlight", createdAt: "2025-11-29" },
    { id: "g17", src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20-2.png", alt: "School Ambassador — Excel Ebeagbor, Main Sequence Montessori School", category: "Ambassadors", createdAt: "2025-11-10" },
    { id: "g18", src: "/Gallery/Flyer%20for%20Inspire.Ed%20community%20by%20RitaOkam%20%20(2).png", alt: "Partnership Announcement — InspireED x ICOVE", category: "Community", createdAt: "2026-02-01" },
  ],
};

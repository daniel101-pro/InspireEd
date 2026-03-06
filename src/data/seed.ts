import type { DashboardData } from "@/types/dashboard";

export const seedData: DashboardData = {
  programs: [
    { id: "p1", type: "study-session", title: "Weekly Tutoring", description: "Small group sessions covering core subjects including Math, Science, English, and History.", schedule: "Tue & Thu, 4–6 PM", isActive: true, createdAt: "2025-09-01", updatedAt: "2025-09-01" },
    { id: "p2", type: "study-session", title: "Exam Preparation", description: "Intensive review sessions with practice tests and study strategies before major exams.", schedule: "Bi-weekly Saturdays, 10 AM–1 PM", isActive: true, createdAt: "2025-09-01", updatedAt: "2025-09-01" },
    { id: "p3", type: "study-session", title: "Study Groups", description: "Peer-led collaborative learning environments where students teach and learn from each other.", schedule: "Wednesdays, 3:30–5:30 PM", isActive: true, createdAt: "2025-09-01", updatedAt: "2025-09-01" },
    { id: "p4", type: "workshop", title: "Career Readiness", description: "Resume building, interview skills, professional networking, and career exploration.", isActive: true, createdAt: "2025-09-15", updatedAt: "2025-09-15" },
    { id: "p5", type: "workshop", title: "Financial Literacy", description: "Budgeting, saving, understanding credit, and making smart financial decisions.", isActive: true, createdAt: "2025-09-15", updatedAt: "2025-09-15" },
    { id: "p6", type: "workshop", title: "Health & Wellness", description: "Mental health awareness, stress management, fitness, and nutrition education.", isActive: true, createdAt: "2025-09-15", updatedAt: "2025-09-15" },
    { id: "p7", type: "workshop", title: "Digital Skills", description: "Coding basics, digital literacy, social media management, and online safety.", isActive: false, createdAt: "2025-10-01", updatedAt: "2025-10-01" },
    { id: "p8", type: "event", title: "Annual Youth Summit", description: "Multi-day conference featuring keynote speakers, interactive workshops, and networking.", date: "July 15–17, 2026", isActive: true, createdAt: "2025-11-01", updatedAt: "2025-11-01" },
    { id: "p9", type: "event", title: "Networking Events", description: "Connect with professionals, alumni, and peers in a relaxed environment.", date: "Monthly", isActive: true, createdAt: "2025-11-01", updatedAt: "2025-11-01" },
    { id: "p10", type: "event", title: "Community Service Days", description: "Give back to the community while building leadership and teamwork skills.", date: "April 12, 2026", isActive: true, createdAt: "2025-11-01", updatedAt: "2025-11-01" },
  ],

  volunteers: [
    { id: "v1", fullName: "Sarah Mitchell", email: "sarah.m@email.com", phone: "(555) 234-5678", roleInterest: "Tutor", whyVolunteer: "I want to give back to the community and help students succeed in their academic journey. Education changed my life and I want to pay it forward.", availability: ["Weekdays", "Evenings"], status: "approved", submittedAt: "2025-12-15", reviewedAt: "2025-12-18" },
    { id: "v2", fullName: "James Carter", email: "j.carter@email.com", phone: "(555) 345-6789", roleInterest: "Workshop Facilitator", whyVolunteer: "As a financial advisor, I believe teaching young people about money management early can transform their futures.", availability: ["Weekends"], status: "approved", submittedAt: "2025-12-20", reviewedAt: "2025-12-22" },
    { id: "v3", fullName: "Maria Lopez", email: "maria.l@email.com", phone: "(555) 456-7890", roleInterest: "Event Coordinator", whyVolunteer: "I have extensive event planning experience and would love to help create memorable experiences for young people.", availability: ["Weekdays", "Weekends"], status: "pending", submittedAt: "2026-01-05" },
    { id: "v4", fullName: "David Kim", email: "d.kim@email.com", phone: "(555) 567-8901", roleInterest: "Tutor", whyVolunteer: "I'm currently studying Computer Science and would love to help students discover their passion for technology.", availability: ["Evenings"], status: "pending", submittedAt: "2026-01-10" },
    { id: "v5", fullName: "Aisha Patel", email: "aisha.p@email.com", phone: "(555) 678-9012", roleInterest: "Ambassador", whyVolunteer: "I believe in InspireED's mission and want to represent the organization at my university.", availability: ["Weekdays", "Weekends", "Evenings"], status: "approved", submittedAt: "2025-11-20", reviewedAt: "2025-11-25" },
    { id: "v6", fullName: "Robert Chen", email: "r.chen@email.com", phone: "(555) 789-0123", roleInterest: "Administrative Support", whyVolunteer: "I recently retired and have plenty of time and organizational skills to contribute.", availability: ["Weekdays"], status: "rejected", submittedAt: "2025-10-15", reviewedAt: "2025-10-20" },
    { id: "v7", fullName: "Emma Wilson", email: "emma.w@email.com", phone: "(555) 890-1234", roleInterest: "Outreach Volunteer", whyVolunteer: "I work in marketing and would love to help spread the word about InspireED's amazing programs.", availability: ["Weekends", "Evenings"], status: "pending", submittedAt: "2026-02-01" },
    { id: "v8", fullName: "Tyrone Jackson", email: "t.jackson@email.com", phone: "(555) 901-2345", roleInterest: "Workshop Facilitator", whyVolunteer: "As a health and fitness coach, I want to teach young people about wellness and healthy habits.", availability: ["Weekdays", "Weekends"], status: "pending", submittedAt: "2026-02-15" },
  ],

  articles: [
    { id: "a1", title: "5 Study Habits That Actually Work", excerpt: "Discover evidence-based study techniques that can transform your learning.", content: "Full article content about study habits including spaced repetition, active recall, and more.", date: "2026-01-15", isPublished: true },
    { id: "a2", title: "Building Your First Resume: A Step-by-Step Guide", excerpt: "Everything you need to create a professional resume that stands out.", content: "Comprehensive guide covering resume format, content, and common mistakes to avoid.", date: "2026-02-01", isPublished: true },
    { id: "a3", title: "Why Mentorship Matters: Stories from Our Community", excerpt: "Real stories from mentors and mentees about the power of guidance.", content: "Collection of testimonials and stories about how mentorship has impacted lives in our community.", date: "2026-02-20", isPublished: true },
  ],

  faqs: [
    { id: "f1", question: "Who can participate in InspireED programs?", answer: "Our programs are open to all young people ages 13–25. We welcome participants from all backgrounds and experience levels.", order: 1 },
    { id: "f2", question: "Are programs free?", answer: "Yes, all InspireED programs are completely free. We believe education and development should be accessible to everyone.", order: 2 },
    { id: "f3", question: "How do I sign up?", answer: "You can sign up through our Contact page or by reaching out to us directly via email. Registration is simple and takes just a few minutes.", order: 3 },
    { id: "f4", question: "Where are sessions held?", answer: "Sessions are held at our main office and various partner locations throughout the city. Virtual options are also available for many programs.", order: 4 },
    { id: "f5", question: "Can parents or guardians get involved?", answer: "Absolutely! We encourage family involvement. Parents can volunteer, attend events, and help support their children's learning journey.", order: 5 },
    { id: "f6", question: "Do I need to bring anything?", answer: "Just yourself and a willingness to learn! We provide all necessary materials, supplies, and resources for our programs.", order: 6 },
  ],

  resources: [
    { id: "r1", num: "01", title: "Study Guides & Worksheets", description: "Comprehensive materials covering core subjects to supplement your learning." },
    { id: "r2", num: "02", title: "College Prep Toolkit", description: "Everything you need for college applications, essays, and standardized test preparation." },
    { id: "r3", num: "03", title: "Scholarship Database", description: "A curated collection of scholarships and financial aid opportunities for students." },
    { id: "r4", num: "04", title: "Career Exploration Kit", description: "Assessment tools, career path guides, and industry overviews to help you find your path." },
  ],

  teamMembers: [
    { id: "t1", name: "Amara Johnson", initials: "AJ", title: "Executive Director", bio: "With over 15 years in education leadership, Amara founded InspireED to bridge the gap between potential and opportunity." },
    { id: "t2", name: "David Chen", initials: "DC", title: "Program Director", bio: "David designs and oversees all youth programs, drawing on his background in curriculum development." },
    { id: "t3", name: "Sofia Martinez", initials: "SM", title: "Outreach Coordinator", bio: "Sofia builds relationships with schools, families, and community organizations to expand our reach." },
    { id: "t4", name: "Marcus Williams", initials: "MW", title: "Volunteer Manager", bio: "Marcus recruits, trains, and supports our incredible network of volunteers." },
    { id: "t5", name: "Priya Patel", initials: "PP", title: "Mentorship Lead", bio: "Priya pairs youth with dedicated mentors and ensures every relationship is impactful." },
    { id: "t6", name: "James Okafor", initials: "JO", title: "Communications Director", bio: "James shares our story with the world, managing our communications and digital presence." },
  ],

  partners: [
    { id: "pr1", name: "Bright Futures Foundation" },
    { id: "pr2", name: "Community First Bank" },
    { id: "pr3", name: "Metro School District" },
    { id: "pr4", name: "Youth Action Network" },
    { id: "pr5", name: "TechBridge Labs" },
    { id: "pr6", name: "United Giving Alliance" },
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
    email: "info@inspireed.org",
    phone: "(555) 123-4567",
    address: "123 Education Lane, Suite 200, Innovation City",
    officeHours: "Monday – Friday, 9:00 AM – 5:00 PM",
  },

  stats: {
    youthImpacted: 500,
    mentorsVolunteers: 50,
    programsDelivered: 30,
    communityPartners: 15,
  },

  trends: [
    { month: "Apr", youth: 280, volunteers: 25, programs: 12 },
    { month: "May", youth: 310, volunteers: 28, programs: 14 },
    { month: "Jun", youth: 290, volunteers: 30, programs: 15 },
    { month: "Jul", youth: 350, volunteers: 32, programs: 18 },
    { month: "Aug", youth: 330, volunteers: 30, programs: 16 },
    { month: "Sep", youth: 380, volunteers: 35, programs: 20 },
    { month: "Oct", youth: 410, volunteers: 38, programs: 22 },
    { month: "Nov", youth: 430, volunteers: 40, programs: 24 },
    { month: "Dec", youth: 420, volunteers: 42, programs: 25 },
    { month: "Jan", youth: 460, volunteers: 45, programs: 27 },
    { month: "Feb", youth: 480, volunteers: 48, programs: 28 },
    { month: "Mar", youth: 500, volunteers: 50, programs: 30 },
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

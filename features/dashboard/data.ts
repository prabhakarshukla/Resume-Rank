import type {
  ApplicationPoint,
  AtsTrendPoint,
  CurrentUser,
  ResumeAnalysis,
  SkillProgressPoint,
  StatCard,
} from "./types";

export const currentUser: CurrentUser = {
  name: "Akshay Menon",
  firstName: "Akshay",
  email: "akshay.menon@gmail.com",
  role: "Senior Frontend Engineer",
  initials: "AM",
  plan: "Pro",
};

export const statCards: StatCard[] = [
  {
    id: "resumes",
    label: "Total Resumes",
    value: "8",
    helpText: "Across 3 target roles",
    deltaLabel: "+2 this month",
    trend: "up",
  },
  {
    id: "ats",
    label: "Average ATS Score",
    value: "82",
    helpText: "Out of 100 · last 30 days",
    deltaLabel: "+6 pts",
    trend: "up",
  },
  {
    id: "analyses",
    label: "Analyses Completed",
    value: "34",
    helpText: "12 job descriptions matched",
    deltaLabel: "+9 this month",
    trend: "up",
  },
  {
    id: "skills",
    label: "Missing Skills Found",
    value: "17",
    helpText: "5 resolved this week",
    deltaLabel: "-5 open",
    trend: "down",
  },
];

export const recentAnalyses: ResumeAnalysis[] = [
  {
    id: "an_01",
    resumeName: "Akshay_Menon_Frontend_2026.pdf",
    role: "Senior Frontend Engineer · Razorpay",
    uploadedAt: "2026-07-11T09:24:00Z",
    atsScore: 91,
    status: "completed",
  },
  {
    id: "an_02",
    resumeName: "Akshay_Menon_FullStack.pdf",
    role: "Full Stack Engineer · Atlassian",
    uploadedAt: "2026-07-09T14:02:00Z",
    atsScore: 84,
    status: "completed",
  },
  {
    id: "an_03",
    resumeName: "Akshay_Menon_Product_Eng.pdf",
    role: "Product Engineer · Notion",
    uploadedAt: "2026-07-08T18:47:00Z",
    atsScore: 76,
    status: "needs_review",
  },
  {
    id: "an_04",
    resumeName: "Akshay_Menon_UI_Specialist.pdf",
    role: "UI Engineer · Linear",
    uploadedAt: "2026-07-07T11:10:00Z",
    atsScore: 0,
    status: "processing",
  },
  {
    id: "an_05",
    resumeName: "Akshay_Menon_Platform.pdf",
    role: "Platform Engineer · Vercel",
    uploadedAt: "2026-07-05T08:31:00Z",
    atsScore: 68,
    status: "needs_review",
  },
];

export const strengths: string[] = [
  "Strong quantified impact — 9 of 12 bullet points include metrics",
  "Clear seniority signals with system ownership and mentorship",
  "Well-structured experience section optimized for ATS parsing",
];

export const weaknesses: string[] = [
  "Summary is generic and not tailored to the target role",
  "Missing a dedicated section for measurable leadership outcomes",
  "Two roles lack context on team size and scope",
];

export const missingSkills: { name: string; demand: "high" | "medium" }[] = [
  { name: "TypeScript", demand: "high" },
  { name: "GraphQL", demand: "high" },
  { name: "System Design", demand: "high" },
  { name: "CI/CD", demand: "medium" },
  { name: "Playwright", demand: "medium" },
];

export const recommendations: string[] = [
  "Rewrite your summary to mirror the Razorpay job description keywords",
  "Add a 'Selected Impact' block with 3 flagship, metric-driven wins",
  "Introduce GraphQL and system design experience near the top",
];

export const jobMatch = {
  role: "Senior Frontend Engineer",
  company: "Razorpay",
  percentage: 87,
  matchedKeywords: 42,
  totalKeywords: 48,
};

export const atsTrend: AtsTrendPoint[] = [
  { month: "Feb", score: 61 },
  { month: "Mar", score: 66 },
  { month: "Apr", score: 70 },
  { month: "May", score: 74 },
  { month: "Jun", score: 79 },
  { month: "Jul", score: 87 },
];

export const skillProgress: SkillProgressPoint[] = [
  { month: "Feb", matched: 22, missing: 26 },
  { month: "Mar", matched: 27, missing: 21 },
  { month: "Apr", matched: 31, missing: 17 },
  { month: "May", matched: 36, missing: 12 },
  { month: "Jun", matched: 40, missing: 8 },
  { month: "Jul", matched: 42, missing: 6 },
];

export const applications: ApplicationPoint[] = [
  { week: "W1", applications: 3, avgScore: 68 },
  { week: "W2", applications: 5, avgScore: 72 },
  { week: "W3", applications: 4, avgScore: 77 },
  { week: "W4", applications: 7, avgScore: 81 },
  { week: "W5", applications: 6, avgScore: 85 },
  { week: "W6", applications: 8, avgScore: 88 },
];

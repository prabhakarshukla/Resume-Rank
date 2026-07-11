export type AnalysisStatus = "completed" | "processing" | "needs_review";

export type ResumeAnalysis = {
  id: string;
  resumeName: string;
  role: string;
  uploadedAt: string;
  atsScore: number;
  status: AnalysisStatus;
};

export type StatCard = {
  id: string;
  label: string;
  value: string;
  helpText: string;
  deltaLabel: string;
  trend: "up" | "down" | "neutral";
};

export type AtsTrendPoint = {
  month: string;
  score: number;
};

export type SkillProgressPoint = {
  month: string;
  matched: number;
  missing: number;
};

export type ApplicationPoint = {
  week: string;
  applications: number;
  avgScore: number;
};

export type CurrentUser = {
  name: string;
  firstName: string;
  email: string;
  role: string;
  initials: string;
  plan: string;
};

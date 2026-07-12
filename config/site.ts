export const siteConfig = {
  name: "ResumeRank",
  tagline: "AI Resume Analysis",
  description:
    "AI-powered resume analysis, ATS scoring, and job-match insights.",
} as const;

export type SiteConfig = typeof siteConfig;

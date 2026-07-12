import type { Metadata } from 'next';
import { AnnouncementBar } from '@/features/landing/components/AnnouncementBar';
import { LandingNavbar } from '@/features/landing/components/LandingNavbar';
import { HeroSection } from '@/features/landing/components/HeroSection';
import { TrustIndicators } from '@/features/landing/components/TrustIndicators';
import { ProblemSection } from '@/features/landing/components/ProblemSection';
import { SolutionSection } from '@/features/landing/components/SolutionSection';
import { FeaturesGrid } from '@/features/landing/components/FeaturesGrid';
import { HowItWorksSection } from '@/features/landing/components/HowItWorksSection';
import { DashboardPreviewSection } from '@/features/landing/components/DashboardPreviewSection';
import { AIAnalysisPreview } from '@/features/landing/components/AIAnalysisPreview';
import { TestimonialsSection } from '@/features/landing/components/TestimonialsSection';
import { PricingSection } from '@/features/landing/components/PricingSection';
import { FAQSection } from '@/features/landing/components/FAQSection';
import { FinalCTASection } from '@/features/landing/components/FinalCTASection';
import { LandingFooter } from '@/features/landing/components/LandingFooter';

export const metadata: Metadata = {
  title: 'ResumeRank — AI Resume Analysis & ATS Scoring',
  description:
    'Get an instant ATS score for your resume. AI-powered suggestions to help you pass applicant tracking systems and land more interviews.',
  openGraph: {
    title: 'ResumeRank — AI Resume Analysis & ATS Scoring',
    description:
      'Get an instant ATS score for your resume. AI-powered suggestions to help you pass applicant tracking systems and land more interviews.',
    type: 'website',
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <LandingNavbar />

      <main className="flex flex-col">
        <HeroSection />
        <TrustIndicators />
        <ProblemSection />
        <SolutionSection />
        <FeaturesGrid />
        <HowItWorksSection />
        <DashboardPreviewSection />
        <AIAnalysisPreview />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <LandingFooter />
    </div>
  );
}

import type { Metadata } from "next";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardHero } from "@/features/dashboard/components/DashboardHero";
import { StatCards } from "@/features/dashboard/components/StatCards";
import { RecentAnalyses } from "@/features/dashboard/components/RecentAnalyses";
import { AiInsights } from "@/features/dashboard/components/AiInsights";
import { PerformanceCharts } from "@/features/dashboard/components/PerformanceCharts";
import { QuickActions } from "@/features/dashboard/components/QuickActions";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="animate-in-fade flex flex-col gap-8">
        <DashboardHero />
        <StatCards />

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-5">
          <div className="xl:col-span-3">
            <RecentAnalyses />
          </div>
          <div className="xl:col-span-2">
            <PerformanceCharts />
          </div>
        </div>

        <AiInsights />
        <QuickActions />
      </div>
    </DashboardLayout>
  );
}

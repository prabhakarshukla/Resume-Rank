"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartColumn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  atsTrend,
  skillProgress,
  applications,
} from "@/features/dashboard/data";
import { ChartTooltip } from "./ChartTooltip";

const axisProps = {
  tickLine: false,
  axisLine: false,
  tick: { fontSize: 12, fill: "var(--muted-foreground)" },
} as const;

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
      <span className="size-2 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}

export function PerformanceCharts() {
  return (
    <Card className="gap-0 p-0">
      <div className="flex flex-col gap-4 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="bg-muted text-muted-foreground flex size-8 items-center justify-center rounded-lg">
            <ChartColumn className="size-4" />
          </span>
          <div className="flex flex-col gap-0.5">
            <h2 className="font-heading text-base font-semibold">
              Resume performance
            </h2>
            <p className="text-muted-foreground text-sm">
              Track how your resumes trend over time.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <Tabs defaultValue="ats">
          <TabsList className="mb-6">
            <TabsTrigger value="ats">ATS trend</TabsTrigger>
            <TabsTrigger value="skills">Skill progress</TabsTrigger>
            <TabsTrigger value="apps">Apps vs score</TabsTrigger>
          </TabsList>

          <TabsContent value="ats">
            <div className="mb-3 flex items-center gap-4">
              <LegendDot color="var(--chart-1)" label="Average ATS score" />
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={atsTrend}
                  margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="atsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="var(--chart-1)"
                        stopOpacity={0.25}
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--chart-1)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    vertical={false}
                    stroke="var(--border)"
                    strokeDasharray="4 4"
                  />
                  <XAxis dataKey="month" {...axisProps} />
                  <YAxis domain={[40, 100]} {...axisProps} width={40} />
                  <Tooltip
                    cursor={{ stroke: "var(--border)" }}
                    content={
                      <ChartTooltip labelMap={{ score: "ATS score" }} />
                    }
                  />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="var(--chart-1)"
                    strokeWidth={2.5}
                    fill="url(#atsFill)"
                    dot={{ r: 3, fill: "var(--chart-1)", strokeWidth: 0 }}
                    activeDot={{ r: 5 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="mb-3 flex items-center gap-4">
              <LegendDot color="var(--chart-2)" label="Matched skills" />
              <LegendDot color="var(--chart-3)" label="Missing skills" />
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillProgress}
                  margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
                  barGap={4}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="var(--border)"
                    strokeDasharray="4 4"
                  />
                  <XAxis dataKey="month" {...axisProps} />
                  <YAxis {...axisProps} width={40} />
                  <Tooltip
                    cursor={{ fill: "var(--muted)", opacity: 0.5 }}
                    content={
                      <ChartTooltip
                        labelMap={{ matched: "Matched", missing: "Missing" }}
                      />
                    }
                  />
                  <Bar
                    dataKey="matched"
                    fill="var(--chart-2)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={28}
                  />
                  <Bar
                    dataKey="missing"
                    fill="var(--chart-3)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={28}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="apps">
            <div className="mb-3 flex items-center gap-4">
              <LegendDot color="var(--chart-4)" label="Applications" />
              <LegendDot color="var(--chart-1)" label="Avg ATS score" />
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={applications}
                  margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="var(--border)"
                    strokeDasharray="4 4"
                  />
                  <XAxis dataKey="week" {...axisProps} />
                  <YAxis {...axisProps} width={40} />
                  <Tooltip
                    cursor={{ fill: "var(--muted)", opacity: 0.5 }}
                    content={
                      <ChartTooltip
                        labelMap={{
                          applications: "Applications",
                          avgScore: "Avg score",
                        }}
                      />
                    }
                  />
                  <Bar
                    dataKey="applications"
                    fill="var(--chart-4)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={28}
                  />
                  <Line
                    type="monotone"
                    dataKey="avgScore"
                    stroke="var(--chart-1)"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: "var(--chart-1)", strokeWidth: 0 }}
                    activeDot={{ r: 5 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}

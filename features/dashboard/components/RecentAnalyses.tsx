import Link from "next/link";
import { FileText, Eye, Download, Trash2, Ellipsis, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/common/StatusBadge";
import { ScoreBadge } from "@/components/common/ScoreBadge";
import { formatRelativeDate } from "@/lib/helpers";
import { recentAnalyses } from "@/features/dashboard/data";

export function RecentAnalyses() {
  return (
    <Card className="gap-0 p-0">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex flex-col gap-0.5">
          <h2 className="font-heading text-base font-semibold">
            Recent resume analyses
          </h2>
          <p className="text-muted-foreground text-sm">
            Your latest resumes matched against job descriptions.
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/history" />}
          className="text-muted-foreground hidden gap-1 sm:inline-flex"
        >
          View all
          <ArrowRight className="size-3.5" />
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="text-muted-foreground border-b border-border text-left text-xs font-medium">
              <th scope="col" className="px-5 py-2.5 font-medium">
                Resume
              </th>
              <th scope="col" className="px-5 py-2.5 font-medium">
                Uploaded
              </th>
              <th scope="col" className="px-5 py-2.5 font-medium">
                ATS score
              </th>
              <th scope="col" className="px-5 py-2.5 font-medium">
                Status
              </th>
              <th scope="col" className="px-5 py-2.5 text-right font-medium">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {recentAnalyses.map((row) => (
              <tr
                key={row.id}
                className="border-b border-border transition-colors last:border-0 hover:bg-muted/40"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted text-muted-foreground flex size-9 shrink-0 items-center justify-center rounded-lg">
                      <FileText className="size-[18px]" />
                    </span>
                    <div className="flex min-w-0 flex-col">
                      <span className="text-foreground truncate font-medium">
                        {row.resumeName}
                      </span>
                      <span className="text-muted-foreground truncate text-xs">
                        {row.role}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-muted-foreground px-5 py-3.5 whitespace-nowrap">
                  {formatRelativeDate(row.uploadedAt)}
                </td>
                <td className="px-5 py-3.5">
                  {row.status === "processing" ? (
                    <span className="text-muted-foreground text-xs">
                      Analyzing…
                    </span>
                  ) : (
                    <ScoreBadge score={row.atsScore} />
                  )}
                </td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-5 py-3.5 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-muted-foreground"
                          aria-label={`Actions for ${row.resumeName}`}
                        />
                      }
                    >
                      <Ellipsis className="size-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem render={<Link href={`/analysis/${row.id}`} />}>
                        <Eye />
                        View analysis
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download />
                        Download report
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        <Trash2 />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ResumeListSkeleton() {
  return (
    <Card>
      <CardContent className="space-y-4 py-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-lg" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>

            <Skeleton className="h-9 w-28" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
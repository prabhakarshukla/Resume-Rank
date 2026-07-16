"use client";

import { useMemo, useState } from "react";
import { FileText } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ResumeActions } from "./resume-actions";
import { ResumeSearch } from "./resume-search";
import {
  ResumeSort,
  type ResumeSortOption,
} from "./resume-sort";

interface Resume {
  id: string;
  file_name: string;
  file_size: number;
  storage_path: string;
  created_at: string;
}

interface ResumeListProps {
  resumes: Resume[];
}

export function ResumeList({
  resumes,
}: ResumeListProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] =
    useState<ResumeSortOption>("newest");

  const filteredResumes = useMemo(() => {
    const items = resumes.filter((resume) =>
      resume.file_name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    switch (sort) {
      case "oldest":
        return [...items].sort(
          (a, b) =>
            new Date(a.created_at).getTime() -
            new Date(b.created_at).getTime()
        );

      case "name":
        return [...items].sort((a, b) =>
          a.file_name.localeCompare(b.file_name)
        );

      default:
        return [...items].sort(
          (a, b) =>
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
        );
    }
  }, [resumes, search, sort]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <ResumeSearch
          value={search}
          onChange={setSearch}
        />

        <ResumeSort
          value={sort}
          onChange={setSort}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Resumes</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {filteredResumes.length === 0 ? (
            <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
              No resumes found.
            </div>
          ) : (
            filteredResumes.map((resume) => (
              <div
                key={resume.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-3">
                  <FileText className="size-5 text-primary" />

                  <div>
                    <p className="font-medium">
                      {resume.file_name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {(resume.file_size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>

                <ResumeActions
                  id={resume.id}
                  fileName={resume.file_name}
                  storagePath={resume.storage_path}
                />
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
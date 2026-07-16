"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type ResumeSortOption =
  | "newest"
  | "oldest"
  | "name";

interface ResumeSortProps {
  value: ResumeSortOption;
  onChange: (value: ResumeSortOption) => void;
}

export function ResumeSort({
  value,
  onChange,
}: ResumeSortProps) {
  return (
    <Select
      value={value}
      onValueChange={(value) =>
        onChange(value as ResumeSortOption)
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="newest">
          Newest First
        </SelectItem>

        <SelectItem value="oldest">
          Oldest First
        </SelectItem>

        <SelectItem value="name">
          Name (A-Z)
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
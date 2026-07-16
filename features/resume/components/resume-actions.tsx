"use client";

import { useState, useTransition } from "react";
import {
  Download,
  Pencil,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";

import {
  deleteResume,
  getResumeDownloadLink,
} from "../service";
import { RenameResumeDialog } from "./rename-resume-dialog";

import { Button } from "@/components/ui/button";

interface ResumeActionsProps {
  id: string;
  fileName: string;
  storagePath: string;
}

export function ResumeActions({
  id,
  fileName,
}: ResumeActionsProps) {
  const [open, setOpen] = useState(false);

  const [isPending, startTransition] =
    useTransition();

  function handleDownload() {
    startTransition(async () => {
      try {
        const url =
          await getResumeDownloadLink(id);

        window.open(url, "_blank");
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "Failed to download resume."
        );
      }
    });
  }

  function handleDelete() {
    startTransition(async () => {
      try {
        await deleteResume(id);

        toast.success("Resume deleted.");

        window.location.reload();
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "Failed to delete resume."
        );
      }
    });
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-end gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDownload}
          disabled={isPending}
          aria-label="Download resume"
        >
          <Download className="size-4" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(true)}
          disabled={isPending}
          aria-label="Rename resume"
        >
          <Pencil className="size-4" />
        </Button>

        <Button
          size="icon"
          variant="destructive"
          disabled={isPending}
          onClick={handleDelete}
          aria-label="Delete resume"
        >
          <Trash2 className="size-4" />
        </Button>
      </div>

      <RenameResumeDialog
        open={open}
        onOpenChange={setOpen}
        resumeId={id}
        currentName={fileName}
      />
    </>
  );
}
"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { renameResume } from "../service";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RenameResumeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resumeId: string;
  currentName: string;
}

export function RenameResumeDialog({
  open,
  onOpenChange,
  resumeId,
  currentName,
}: RenameResumeDialogProps) {
  const [name, setName] = useState(currentName);
  const [isPending, startTransition] = useTransition();

  function handleSubmit() {
    startTransition(async () => {
      try {
        await renameResume(resumeId, name);

        toast.success("Resume renamed.");

        onOpenChange(false);

        window.location.reload();
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "Failed to rename resume."
        );
      }
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename Resume</DialogTitle>
        </DialogHeader>

        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={isPending}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
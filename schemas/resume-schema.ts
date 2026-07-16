import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ACCEPTED_FILE_TYPES = ["application/pdf"] as const;

export const resumeSchema = z.object({
  file: z
    .instanceof(File, {
      message: "Please select a resume.",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Resume must be smaller than 5 MB.",
    })
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type as (typeof ACCEPTED_FILE_TYPES)[number]),
      {
        message: "Only PDF resumes are allowed.",
      }
    ),
});

export type ResumeSchema = z.infer<typeof resumeSchema>;
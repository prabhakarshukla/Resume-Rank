import { createClient } from "@/server/supabase/server";

import { resumeSchema } from "@/schemas/resume-schema";
import { uploadResumeToStorage } from "@/server/storage/upload";

import { parseResume } from "./parser";
import type { ResumeUploadResponse } from "./types";

export async function uploadResume(
  file: File
): Promise<ResumeUploadResponse> {
  const validation = resumeSchema.safeParse({ file });

  if (!validation.success) {
    return {
      success: false,
      error: {
        message: validation.error.issues[0].message,
      },
    };
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      error: {
        message: "Unauthorized.",
      },
    };
  }

  const { data: existingResume, error: duplicateError } =
    await supabase
      .from("resumes")
      .select("id")
      .eq("user_id", user.id)
      .eq("file_name", file.name)
      .eq("file_size", file.size)
      .maybeSingle();

  if (duplicateError) {
    return {
      success: false,
      error: {
        message: "Failed to verify existing resumes.",
      },
    };
  }

  if (existingResume) {
    return {
      success: false,
      error: {
        message: "This resume has already been uploaded.",
      },
    };
  }

  try {
    const storagePath = await uploadResumeToStorage(
      user.id,
      file
    );

    const parsedContent = await parseResume(file);

    const { data, error } = await supabase
      .from("resumes")
      .insert({
        user_id: user.id,
        file_name: file.name,
        storage_path: storagePath,
        file_size: file.size,
        mime_type: file.type,
        parsed_text: parsedContent,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return {
      success: true,
      data: {
        id: data.id,
        fileName: data.file_name,
        storagePath: data.storage_path,
        createdAt: data.created_at,
      },
    };
  } catch (error) {
    let message = "Failed to upload resume.";

    if (error instanceof Error) {
      if (error.message.toLowerCase().includes("storage")) {
        message =
          "Storage service is temporarily unavailable.";
      } else if (
        error.message.toLowerCase().includes("duplicate")
      ) {
        message =
          "A resume with the same details already exists.";
      } else if (
        error.message.toLowerCase().includes("network")
      ) {
        message =
          "Network error. Please check your connection.";
      } else {
        message = error.message;
      }
    }

    return {
      success: false,
      error: {
        message,
      },
    };
  }
}
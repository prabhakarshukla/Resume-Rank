import { randomUUID } from "crypto";

import { createClient } from "@/server/supabase/server";

const BUCKET = "resumes";

export async function uploadResumeToStorage(
  userId: string,
  file: File
) {
  const supabase = await createClient();

  const extension = file.name.split(".").pop() ?? "pdf";

  const storagePath = `${userId}/${randomUUID()}.${extension}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(storagePath, file, {
      upsert: false,
      cacheControl: "3600",
      contentType: file.type,
    });

  if (error) throw error;

  return storagePath;
}

export async function getResumeDownloadUrl(
  storagePath: string
) {
  const supabase = await createClient();

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(storagePath, 60);

  if (error) throw error;

  return data.signedUrl;
}

export async function deleteResumeFromStorage(
  storagePath: string
) {
  const supabase = await createClient();

  const { error } = await supabase.storage
    .from(BUCKET)
    .remove([storagePath]);

  if (error) throw error;
}
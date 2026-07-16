import { createClient } from "@/server/supabase/server";
import { getResumeDownloadUrl } from "@/server/storage/upload";
import { deleteResumeFromStorage } from "@/server/storage/upload";

export async function getUserResumes() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized.");
  }

  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

export async function renameResume(
  resumeId: string,
  fileName: string
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized.");
  }

  const { data, error } = await supabase
    .from("resumes")
    .update({
      file_name: fileName,
    })
    .eq("id", resumeId)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteResume(
  resumeId: string
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized.");
  }

  const { data: resume, error: fetchError } = await supabase
    .from("resumes")
    .select("storage_path")
    .eq("id", resumeId)
    .eq("user_id", user.id)
    .single();

  if (fetchError) {
    throw fetchError;
  }

  await deleteResumeFromStorage(resume.storage_path);

  const { error } = await supabase
    .from("resumes")
    .delete()
    .eq("id", resumeId)
    .eq("user_id", user.id);

  if (error) {
    throw error;
  }
}
export async function getResumeDownloadLink(
  resumeId: string
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized.");
  }

  const { data, error } = await supabase
    .from("resumes")
    .select("storage_path")
    .eq("id", resumeId)
    .eq("user_id", user.id)
    .single();

  if (error) {
    throw error;
  }

  return await getResumeDownloadUrl(
    data.storage_path
  );
}
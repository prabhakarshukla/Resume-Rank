import { createClient } from "@/server/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log(user);
  console.log(error);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">
        ✅ ResumeRank connected to Supabase
      </h1>
    </main>
  );
}
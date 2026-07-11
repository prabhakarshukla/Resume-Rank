interface AnalysisPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AnalysisPage({
  params,
}: AnalysisPageProps) {
  const { id } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">
          Resume Analysis
        </h1>

        <p className="text-muted-foreground">
          Resume ID: {id}
        </p>
      </div>
    </main>
  );
}
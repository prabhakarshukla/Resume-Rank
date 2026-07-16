export async function parseResume(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();

  return Buffer.from(arrayBuffer).toString("base64");
}
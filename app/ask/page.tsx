import Link from "next/link";

export const metadata = { title: "Ask AI | The Ruler" };

export default function AskPage() {
  return (
    <main className="mx-auto max-w-screen-sm p-6 space-y-4">
      <h1 className="text-3xl font-bold">Ask AI</h1>
      <p>Q&A placeholder (RAG with citations coming later).</p>
      <Link className="underline" href="/bar-igre">← Back to Bar Games</Link>
    </main>
  );
}

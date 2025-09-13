import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-screen-md p-6 space-y-4">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <Link href="/" className="underline">← Back to home</Link>
    </main>
  );
}

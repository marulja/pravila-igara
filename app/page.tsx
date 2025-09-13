import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-center text-4xl font-extrabold tracking-widest mb-8">
          THE RULER
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/bar-igre"
            className="rounded-3xl border-4 border-black/70 dark:border-white/40 bg-white dark:bg-slate-800 p-4 aspect-[3/5] flex flex-col items-center justify-between shadow-[0_8px_0_#000] hover:-translate-y-0.5 hover:shadow-[0_12px_0_#000] active:translate-y-0 active:shadow-none transition"
          >
            <div className="text-center leading-tight font-extrabold text-2xl">
              RULE
              <br />
              BOOK
            </div>
            <div className="text-6xl">📖</div>
          </Link>

          <Link
            href="/ask"
            className="rounded-3xl border-4 border-black/70 dark:border-white/40 bg-white dark:bg-slate-800 p-4 aspect-[3/5] flex flex-col items-center justify-between shadow-[0_8px_0_#000] hover:-translate-y-0.5 hover:shadow-[0_12px_0_#000] active:translate-y-0 active:shadow-none transition"
          >
            <div className="text-center leading-tight font-extrabold text-2xl">
              ASK
              <br />
              AI
            </div>
            <div className="text-6xl">🤖</div>
          </Link>
        </div>
      </div>
    </main>
  );
}



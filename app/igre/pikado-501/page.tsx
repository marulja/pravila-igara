import React from "react";

export const metadata = {
  title: "Darts 501 – Rules | The Ruler",
  description: "Quick-start, Full and Pro/Tournament rules for Darts 501.",
};

export default function Darts501Page() {
  return (
    <main className="mx-auto max-w-screen-md p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Darts 501 — Rules</h1>
        <p className="text-sm text-gray-600">Category: Bar games · Players: 2+ · Difficulty: ★★☆</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">Quick-start (2 min)</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Goal: reduce from <b>501</b> to <b>0</b> exactly (standard: <b>double-out</b>).</li>
          <li>Turn: <b>3 darts</b>. Scores: single (×1), double (×2), triple (×3), bull 25/50.</li>
          <li>Subtract your turn score from your current total.</li>
          <li><b>Bust:</b> if you go below 0 or end on 1 (in DO), the whole turn is void and your score reverts.</li>
          <li>Checkout must be a <b>double</b> (or inner bull 50).</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Full rules</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><b>Start order:</b> closest to bull or by agreement; players alternate turns.</li>
          <li><b>Scoring validity:</b> a dart that stays in the board counts; bounce-outs do not.</li>
          <li><b>Oche:</b> no foot may cross the throw line; foot-fault invalidates that dart.</li>
          <li><b>Bust details:</b> any total &lt;0 or =1 (in double-out) voids the entire turn and restores the pre-turn score.</li>
          <li><b>Checkout:</b> last dart must land in a double; exceeding 0 does not count.</li>
          <li><b>Scorekeeping:</b> players or a scorer record after each turn; confirm frequently to avoid disputes.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Pro / Tournament rules (summary)</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><b>Match format:</b> legs and sets (e.g., best-of-5 legs).</li>
          <li><b>Variants:</b> standard <b>SI/DO</b> (single-in/double-out); sometimes <b>DI/DO</b> (double-in/double-out).</li>
          <li><b>Throw order:</b> rotates by leg or set per tournament rules.</li>
          <li><b>Administration:</b> official scorer; referee resolves disputes.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Common mistakes</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Bust and then using the wrong starting total next turn.</li>
          <li>Trying to finish without a double (invalid checkout).</li>
          <li>Foot over the oche.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Sources (to add)</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>WDF Rulebook (official darts rules).</li>
          <li>National federation tournament formats.</li>
          <li>Club guides on bust and scoring procedures.</li>
        </ul>
        <p className="text-sm text-gray-600">
          Note: This is a summary. For competitions, always verify with the organiser’s official rulebook.
        </p>
      </section>
    </main>
  );
}

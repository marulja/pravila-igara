import React from "react";

export const metadata = {
  title: "Pikado 501 – Pravila | Pravila Igara",
  description: "Quick-start, Full i Pro/turnirska pravila za Pikado 501.",
};

export default function Pikado501Page() {
  return (
    <main className="mx-auto max-w-screen-md p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Pikado 501 – Pravila</h1>
        <p className="text-sm text-gray-600">Kategorija: Bar igre · Igrači: 2+ · Težina: ★★☆</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">Quick-start (2 min)</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Cilj: doći do točno 0 (standard: double-out).</li>
          <li>Start: 501 bod, svatko baca 3 strelice po potezu.</li>
          <li>Oduzimaš osvojene bodove; “bust” vraća na početak poteza.</li>
          <li>Checkout: zatvaranje na 0 mora biti dvostrukim poljem.</li>
          <li>Greške: prelazak linije, krivi zbroj, zatvaranje bez double-out.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Full pravila</h2>
        <p>(Detaljno: linija bacanja, validacija pogotka, bust scenariji, vođenje rezultata…)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Pro / Turnirska pravila</h2>
        <ul className="list-disc ml-6">
          <li>Legovi i setovi (npr. best-of-5 legs).</li>
          <li>Varijante: double-in / double-out.</li>
          <li>Citati: WDF/turnirski pravilnici (dodati izvore).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Najčešće greške</h2>
        <ul className="list-disc ml-6">
          <li>Bust pa pogrešno računanje sljedećeg poteza.</li>
          <li>Nevažeći checkout (bez double-out).</li>
          <li>Stajanje preko linije bacanja.</li>
        </ul>
      </section>
    </main>
  );
}


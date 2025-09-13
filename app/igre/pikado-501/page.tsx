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
        <p className="text-sm text-gray-600">
          Kategorija: Bar igre · Igrači: 2+ · Težina: ★★☆
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">Quick-start (2 min)</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Cilj: spustiti 501 na točno 0 (standard: <b>double-out</b>).</li>
          <li>Svaki potez: <b>3 strelice</b>. Zbraja se singl (x1), double (x2), triple (x3), bull 25/50.</li>
          <li>Oduzimanje: trenutačni rezultat − osvojeni bodovi poteza.</li>
          <li><b>Bust</b>: pređeš 0 ili ostaneš na 1 → cijeli potez se poništava, vraća se rezultat s početka poteza.</li>
          <li>Checkout: zadnji pogodak mora biti dvostruko polje (ili bull-double 50).</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Full pravila</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><b>Početak:</b> tko započinje odlučuje bacanje najbliže bullu ili dogovor; igrači se izmjenjuju potez po potez.</li>
          <li><b>Vrijednosti polja:</b> singl = nominalna vrijednost; dvostruko = x2; trostruko = x3; bull 25 (vanjski) / 50 (središnji).</li>
          <li><b>Validacija:</b> strelica vrijedi ako ostane u ploči ili je sudac jasno utvrdio pogodak; dodir mrežice/odbijanje ne vrijedi.</li>
          <li><b>Linija bacanja (oche):</b> stopalo ne smije prijeći liniju; prekršaj poništava pogodak.</li>
          <li><b>Bust detaljno:</b> svako stanje &lt;0 ili =1 kod double-out poništava <i>cijeli potez</i>; rezultat se vraća na vrijednost prije tri strelice.</li>
          <li><b>Checkout:</b> završava se dvostrukim poljem; pogodak koji pređe 0 ne vrijedi.</li>
          <li><b>Rezultat:</b> vode ga igrači ili zapisničar; preporučeno je verificirati nakon svakog poteza.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Pro / Turnirska pravila (sažetak)</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><b>Format meča:</b> legs i setovi (npr. best-of-5 legs; set dobiva prvi do x legova).</li>
          <li><b>Varijante:</b> standard <b>SI/DO</b> (single-in/double-out); ponekad <b>DI/DO</b> (double-in/double-out).</li>
          <li><b>Redoslijed početka:</b> može se rotirati po legovima ili po setovima; odlučuje pravilo turnira.</li>
          <li><b>Foot-fault:</b> prelazak linije = pogodak nevažeći; ponovnog bacanja nema.</li>
          <li><b>Administracija:</b> zapisničar vodi službene rezultate; spor rješava sudac.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Najčešće greške</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Bust pa krivo postavljen rezultat za sljedeći potez.</li>
          <li>Checkout bez double-out (računanje do 0 singlom).</li>
          <li>Prelazak linije bacanja (foot-fault).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Citati izvora (dodaj linkove kasnije)</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Svjetska federacija pikada – službeni pravilnik (WDF Rulebook).</li>
          <li>Primjeri turnirskih formata – nacionalne federacije / ligaški pravilnici.</li>
          <li>Smjernice za zapis rezultata i “bust” situacije – edukativni priručnici klubova.</li>
        </ul>
        <p className="text-sm text-gray-600">
          Napomena: Ova aplikacija daje sažetak; za natjecanja obavezno provjeriti službene pravilnike organizatora.
        </p>
      </section>
    </main>
  );
}

import Link from "next/link";

export const metadata = { title: "Bar Games — Rules | The Ruler" };

export default function BarGames() {
  const items = [
    { href: "/igre/pikado-501", title: "Darts 501" },
    { href: "/igre/biljar-8-ball", title: "Eight-ball Pool" },
    { href: "/igre/stolni-nogomet", title: "Foosball (ITSF)" },
  ];
  return (
    <main className="mx-auto max-w-screen-md p-6 space-y-6">
      <h1 className="text-3xl font-bold">Bar Games</h1>
      <ul className="list-disc ml-6 space-y-2">
        {items.map(i => (
          <li key={i.href}>
            <Link href={i.href} className="underline">{i.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

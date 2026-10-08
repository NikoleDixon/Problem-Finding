import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
  note?: string;
}

export function Section({ id, kicker, title, children, note }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-20 px-5 py-14 sm:px-8">
      <p className="font-display text-sm font-bold tracking-[0.2em] text-teal">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      <div className="mt-8 flex flex-col gap-6">{children}</div>
      {note && <p className="mt-4 text-sm text-slate">{note}</p>}
    </section>
  );
}

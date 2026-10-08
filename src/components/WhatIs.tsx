import { Section } from "./Section";
import { CheckCircle, Magnifier } from "./icons";

export function WhatIs() {
  return (
    <Section id="what" kicker="01 · WHAT IS IT?" title="Finding the problem before anyone solves it.">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2 border-2 border-ink bg-white p-6">
          <div className="flex items-center gap-3">
            <CheckCircle size={40} />
            <h3 className="font-display text-xl font-bold">Problem solving</h3>
          </div>
          <p>Someone hands you the problem. Your job is to get to the answer.</p>
        </div>
        <div className="flex flex-col gap-2 border-2 border-ink bg-amber p-6">
          <div className="flex items-center gap-3">
            <Magnifier size={40} />
            <h3 className="font-display text-xl font-bold">Problem finding</h3>
          </div>
          <p>Nobody hands you anything. You notice, define, and invent the problem yourself.</p>
        </div>
      </div>
      <blockquote className="border-l-[6px] border-teal py-1 pl-6 text-2xl italic leading-snug">
        “The formulation of a problem is often more essential than its solution.”
        <footer className="mt-2 text-sm not-italic text-slate">
          Einstein, quoted in Getzels &amp; Csikszentmihalyi (1975, p. 91)
        </footer>
      </blockquote>
    </Section>
  );
}

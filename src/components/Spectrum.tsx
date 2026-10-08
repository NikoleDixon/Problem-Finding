import { spectrum } from "../data";
import { Section } from "./Section";
import { Book, Bulb, Magnifier } from "./icons";

const icons = {
  presented: <Book size={44} className="text-slate" />,
  given: <Magnifier size={44} className="text-teal" />,
  discovered: <Bulb size={44} className="text-amber" />,
};

export function Spectrum() {
  return (
    <Section
      id="spectrum"
      kicker="02 · A SPECTRUM OF PROBLEMS"
      title="The less you are given, the more imagination you need."
      note="Based on Table 4.1 in Getzels & Csikszentmihalyi (1975, pp. 101–103). Runco (2023) describes the same continuum, from presented problems to ones you must discover."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {spectrum.map((s) => (
          <div key={s.key} className={`flex flex-col gap-2 border-t-[10px] bg-white p-6 ${s.color}`}>
            <div className="flex items-center gap-3">
              {icons[s.key]}
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
            </div>
            <p className="text-base">{s.text}</p>
            <p className="mt-2 font-display text-2xl font-bold">{s.faculty}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

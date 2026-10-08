import { bars, stats } from "../data";
import { Section } from "./Section";
import { Pencil } from "./icons";

export function Evidence() {
  return (
    <Section
      id="evidence"
      kicker="04 · THE EVIDENCE"
      title="Creative thinkers wrote stories that did not just copy the stimulus."
    >
      <div className="flex flex-col gap-6 bg-white p-6 sm:p-8">
        {bars.map((group) => (
          <figure key={group.heading} className="flex flex-col gap-3">
            <figcaption className="font-display text-lg font-bold">{group.heading}</figcaption>
            {group.rows.map((r) => (
              <div key={r.label} className="flex items-center gap-4">
                <span className="w-28 flex-none text-sm sm:w-32">{r.label}</span>
                <div
                  className="h-8 flex-1 bg-line"
                  role="img"
                  aria-label={`${r.label}: ${r.value} percent`}
                >
                  <div
                    className={`h-8 ${r.highlight ? "bg-teal" : "bg-mist"}`}
                    style={{ width: `${r.value}%` }}
                  />
                </div>
                <span className="w-14 flex-none font-display text-xl font-bold">{r.value}%</span>
              </div>
            ))}
          </figure>
        ))}
        <p className="text-sm text-slate">
          Getzels &amp; Csikszentmihalyi (1975). Both groups achieved at similar levels.
        </p>
      </div>

      <div className="flex flex-col gap-5 bg-ink p-6 text-white sm:p-8">
        <h3 className="flex items-center gap-3 font-display text-xl font-bold text-amber">
          <Pencil size={32} /> The art student study
        </h3>
        <p>
          31 fine art students arranged and drew a still life from 30 objects. Observers tracked how
          much they explored and how unusual their choices were.
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="border-t-[3px] border-amber pt-3">
              <p className="font-display text-5xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm text-line">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-mist">Getzels &amp; Csikszentmihalyi (1975, pp. 105–114)</p>
      </div>
    </Section>
  );
}

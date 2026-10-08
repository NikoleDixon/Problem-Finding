import { caveats, good } from "../data";
import { Section } from "./Section";
import { CheckCircle, Compass, Warning } from "./icons";

interface ColumnProps {
  title: string;
  items: { head: string; text: string }[];
  tone: "good" | "bad";
}

function Column({ title, items, tone }: ColumnProps) {
  const good = tone === "good";
  return (
    <div
      className={`flex flex-col gap-3 border-t-[10px] bg-white p-6 ${good ? "border-teal" : "border-rose"}`}
    >
      <h3 className={`flex items-center gap-3 font-display text-2xl font-bold ${good ? "text-teal" : "text-rose"}`}>
        {good ? <CheckCircle size={36} /> : <Warning size={36} />}
        {title}
      </h3>
      {items.map((i) => (
        <p key={i.head} className="text-base">
          <b>{i.head}</b> {i.text}
        </p>
      ))}
    </div>
  );
}

export function Verdict() {
  return (
    <Section id="verdict" kicker="05 · GOOD OR BAD?" title="Mostly good, with real caveats.">
      <div className="grid gap-6 sm:grid-cols-2">
        <Column title="Why it is good" items={good} tone="good" />
        <Column title="The caveats" items={caveats} tone="bad" />
      </div>
      <div className="border-2 border-ink bg-amber p-8">
        <p className="flex items-center gap-3 font-display text-sm font-bold tracking-[0.2em]">
          <Compass size={40} /> THE VERDICT
        </p>
        <p className="mt-3 font-display text-2xl font-bold leading-snug sm:text-3xl">
          Problem finding is good because it is where creativity begins. It still needs
          problem-solving skill and supportive education to turn discovery into progress.
        </p>
      </div>
    </Section>
  );
}

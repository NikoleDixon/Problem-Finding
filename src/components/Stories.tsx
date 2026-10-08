import { Section } from "./Section";
import { Plane, Snowflake } from "./icons";

export function Stories() {
  return (
    <Section
      id="stories"
      kicker="03 · SEE IT IN ACTION"
      title="Same picture. Two very different stories."
      note="Stories and drawing: Getzels & Csikszentmihalyi (1975, pp. 98–100)."
    >
      <p>Students were shown a photo of a man on an airplane and asked to write a story.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <article className="flex flex-col gap-3 border-2 border-mist bg-white p-6 text-slate">
          <div className="flex items-center gap-3">
            <Plane size={48} className="text-slate" />
            <h3 className="font-display text-lg font-bold">THE HIGH-IQ STUDENT</h3>
          </div>
          <p className="text-ink">
            Wrote about a happy businessman flying home to his family. The story follows the picture.
          </p>
        </article>
        <article className="flex flex-col gap-3 bg-ink p-6 text-white">
          <div className="flex items-center gap-3">
            <Plane size={48} off className="text-amber" />
            <h3 className="font-display text-lg font-bold text-amber">THE DIVERGENT THINKER</h3>
          </div>
          <p>
            Wrote about a man returning from Reno after divorcing a wife whose cold cream made her
            head “skid across the pillow.” He is now inventing skid-proof face cream. The student
            invented the problem.
          </p>
        </article>
      </div>
      <div className="flex items-center gap-5 border-2 border-teal bg-white p-6">
        <Snowflake size={56} className="flex-none text-teal" />
        <p>
          <b>Another one:</b><br />
          asked to draw “Playing Tag,” one student drew<br />
          <i>“Playing Tag in a School Yard—During a Blizzard.”</i> Same title, a new problem.
        </p>
      </div>
    </Section>
  );
}

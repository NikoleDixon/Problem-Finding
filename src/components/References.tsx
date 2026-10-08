import { references } from "../data";

export function References() {
  return (
    <footer id="references" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-sm font-bold tracking-[0.2em] text-teal">REFERENCES</h2>
        <ul className="mt-5 flex flex-col gap-3 text-sm">
          {references.map((r) => (
            <li key={r.italic} className="pl-7 -indent-7">
              {r.text}
              <i>{r.italic}</i>
              {r.after}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-slate">
          AI use disclosure: I used Claude (Anthropic) to read and summarize the assigned readings,
          then checked the quotes and numbers against the originals.
        </p>
      </div>
    </footer>
  );
}

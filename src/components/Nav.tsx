const links = [
  { href: "#what", label: "What" },
  { href: "#spectrum", label: "Spectrum" },
  { href: "#stories", label: "Stories" },
  { href: "#evidence", label: "Evidence" },
  { href: "#verdict", label: "Verdict" },
  { href: "#references", label: "References" },
];

export function Nav() {
  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-10 border-b border-line bg-paper/95 backdrop-blur"
    >
      <ul className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-3 py-2 sm:px-6">
        {links.map((l) => (
          <li key={l.href} className="flex-none">
            <a
              href={l.href}
              className="inline-flex min-h-11 items-center rounded-full px-4 font-display text-sm font-bold hover:bg-amber"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

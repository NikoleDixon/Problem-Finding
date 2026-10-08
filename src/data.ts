export const student = {
  name: "Nikole Dixon",
  date: "October 7, 2026",
  className: "DEV 300 Fall 2026",
};

export const spectrum = [
  {
    key: "presented",
    title: "Presented",
    text: "Problem, method and solution are already known to someone else.",
    faculty: "Memory",
    color: "border-mist",
  },
  {
    key: "given",
    title: "Given, solve it yourself",
    text: "The problem is handed over, but you have to reason your way to the solution.",
    faculty: "Reasoning",
    color: "border-teal",
  },
  {
    key: "discovered",
    title: "Discovered",
    text: "Nothing is given. You must find that a problem exists at all.",
    faculty: "Imagination",
    color: "border-amber",
  },
] as const;

export const bars = [
  {
    heading: "Stories that were “stimulus-free”",
    rows: [
      { label: "High divergent", value: 75, highlight: true },
      { label: "High IQ", value: 39, highlight: false },
    ],
  },
  {
    heading: "Drawings that were “stimulus-free”",
    rows: [
      { label: "High divergent", value: 50, highlight: true },
      { label: "High IQ", value: 14, highlight: false },
    ],
  },
];

export const stats = [
  { value: ".54", text: "correlation between problem finding and drawing originality" },
  { value: "7 yrs", text: "later, the researchers followed up on the same students" },
  { value: ".41", text: "correlation between problem finding and career success" },
];

export const good = [
  {
    head: "It makes work original.",
    text: "Problem finders produced more original drawings (Getzels & Csikszentmihalyi, 1975).",
  },
  {
    head: "It never runs out.",
    text: "Every solution creates new problems, so engineers must keep finding them (Cropley, 2016).",
  },
  {
    head: "It is distinctly human.",
    text: "Computers can solve problems but must be given them (Runco, 2023).",
  },
  {
    head: "It builds progress.",
    text: "Society needs creative effort to meet its largest challenges (Osborn, 1963).",
  },
];

export const caveats = [
  {
    head: "Finding is not solving.",
    text: "People who only identify problems are probably less likely to reach eminence (Runco, 2023).",
  },
  {
    head: "It can be uncomfortable.",
    text: "A vague sense that something is wrong comes before a clear problem (Runco, 2023).",
  },
  {
    head: "Schools skip it.",
    text: "Engineering programs start at idea evaluation, not problem recognition (Cropley, 2016).",
  },
  {
    head: "The evidence is narrow.",
    text: "The main study used 31 art students, and the authors say it needs testing in other fields (Getzels & Csikszentmihalyi, 1975).",
  },
];

export const references: { text: string; italic: string; after: string }[] = [
  {
    text: "Cropley, D. H. (2016). Nurturing creativity in the engineering classroom. In R. A. Beghetto & J. C. Kaufman (Eds.), ",
    italic: "Nurturing creativity in the classroom",
    after: " (2nd ed., pp. 212–226). Cambridge University Press.",
  },
  {
    text: "Getzels, J. W., & Csikszentmihalyi, M. (1975). From problem solving to problem finding. In I. A. Taylor & J. W. Getzels (Eds.), ",
    italic: "Perspectives in creativity",
    after: " (pp. 90–116). Aldine.",
  },
  {
    text: "Osborn, A. F. (1963). ",
    italic: "Applied imagination: Principles and procedures of creative problem-solving",
    after: " (3rd rev. ed.). Charles Scribner's Sons.",
  },
  {
    text: "Runco, M. A. (2023). ",
    italic: "Creativity: Research, development, and practice",
    after: " (3rd ed.). Academic Press.",
  },
];

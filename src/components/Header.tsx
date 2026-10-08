import { student } from "../data";
import { SearchBulb } from "./icons";

export function Header() {
  return (
    <header className="bg-ink text-white">
      <div className="mx-auto max-w-5xl px-5 pb-12 pt-14 sm:px-8">
        <p className="font-display text-sm font-medium tracking-[0.2em] text-amber">
          ASSIGNMENT 01 ·   What is problem finding? Is it good or bad?

        </p>
        <div className="mt-5 flex items-center justify-between gap-6">
          <h1 className="font-display text-5xl font-bold leading-none tracking-tight sm:text-7xl">
            Problem Finding
          </h1>
          <div className="hidden h-28 w-28 flex-none items-center justify-center rounded-full bg-amber text-ink sm:flex">
            <SearchBulb size={64} />
          </div>
        </div>

        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-slate pt-5 text-sm text-mist">
          <div>Name: {student.name}</div>
          <div>Date: {student.date}</div>
          <div>Class: {student.className}</div>
        </dl>
      </div>
    </header>
  );
}

"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 py-4 bg-background/80 backdrop-blur-sm">
      <span className="text-2xl font-bold text-indigo-600">K.</span>
      <div className="flex items-center gap-6">
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm text-indigo-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-600 transition-colors cursor-pointer font-semibold"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-sm text-indigo-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-600 transition-colors cursor-pointer font-semibold"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="text-sm text-indigo-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-600 transition-colors cursor-pointer font-semibold"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("cv")}
          className="text-sm px-4 py-1 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-zinc-300 transition-colors cursor-pointer font-semibold"
        >
          CV
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}


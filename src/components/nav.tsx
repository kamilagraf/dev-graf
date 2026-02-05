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
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 py-4 max-w-7xl mx-auto px-8">
        <span className="text-2xl font-bold text-teal-600">K.</span>
        <div className="flex items-center gap-6">
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm text-zinc-500 dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-500 transition-colors cursor-pointer font-semibold"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-sm text-zinc-500 dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-500 transition-colors cursor-pointer font-semibold"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="text-sm text-zinc-500 dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-500 transition-colors cursor-pointer font-semibold"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-sm text-zinc-500 dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-500 transition-colors cursor-pointer font-semibold"
        >
          Contact
        </button>
        <button
          onClick={() => scrollToSection("cv")}
          className="text-sm px-4 py-1 rounded-md border border-teal-600 text-teal-600 hover:bg-teal-800 hover:border-teal-800 hover:text-zinc-100 transition-colors cursor-pointer font-semibold"
        >
          CV
        </button>
        <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}


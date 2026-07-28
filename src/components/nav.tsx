"use client";

import { Briefcase, Mail, Menu, Sparkles, Hammer, User, X } from "lucide-react";
import { useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePanelDrag } from "@/hooks/use-panel-drag";
import { useScrollLock } from "@/hooks/use-scroll-lock";

const NAV_LINKS = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "tools", label: "Tools", icon: Hammer },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMobileOpen(false);
  const { dragProps, style: panelDragStyle } = usePanelDrag(panelRef, closeMenu);

  useScrollLock(mobileOpen);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    closeMenu();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-sm md:sticky md:bg-background/80">
        <div className="flex items-center justify-between gap-4 py-4 max-w-7xl mx-auto px-6 md:px-8">
          <span className="text-2xl font-bold text-teal-600">GRAF.</span>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-sm text-zinc-500 dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-500 transition-colors cursor-pointer font-semibold"
              >
                {label}
              </button>
            ))}
            <a
              href="/cv-light.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1 rounded-md border border-teal-600 text-teal-600 hover:bg-teal-800 hover:border-teal-800 hover:text-zinc-100 transition-colors cursor-pointer font-semibold dark:hidden"
            >
              CV
            </a>
            <a
              href="/cv-dark.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm px-4 py-1 rounded-md border border-teal-600 text-teal-600 hover:bg-teal-800 hover:border-teal-800 hover:text-zinc-100 transition-colors cursor-pointer font-semibold dark:inline-block"
            >
              CV
            </a>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden" aria-modal aria-label="Menu">
          <button
            type="button"
            className="absolute inset-0 bg-zinc-800/60 dark:bg-zinc-950/70 transition-opacity"
            onClick={closeMenu}
            aria-label="Close menu"
          />
          <div className="absolute top-0 left-0 right-0 w-full max-w-[100vw] rounded-b-xl bg-background/95 backdrop-blur-sm flex flex-col animate-in fade-in slide-in-from-top-4 duration-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 shrink-0">
              <span className="text-xl font-bold text-teal-600">K.</span>
              <button
                type="button"
                onClick={closeMenu}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div
              ref={panelRef}
              className="flex flex-col touch-none overflow-hidden"
              style={panelDragStyle}
              {...dragProps}
            >
              <div className="min-h-0 flex-1" aria-hidden />
              <div className="mt-auto flex flex-col shrink-0">
                <div className="flex flex-col gap-4 px-8">
                  {NAV_LINKS.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => handleNavClick(id)}
                      className="flex items-center gap-3 text-left py-3 px-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-lg transition-colors shrink-0"
                    >
                      <Icon className="w-5 h-5 shrink-0 text-teal-600 dark:text-teal-400" />
                      {label}
                    </button>
                  ))}
                  <a
                    href="/cv-light.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="w-full py-3 px-4 text-sm font-semibold text-center text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-colors border border-teal-600/50 shrink-0 dark:hidden"
                  >
                    CV
                  </a>
                  <a
                    href="/cv-dark.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="hidden w-full py-3 px-4 text-sm font-semibold text-center text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-colors border border-teal-600/50 shrink-0 dark:block"
                  >
                    CV
                  </a>
                </div>
                <div className="flex justify-center pb-5 pt-3" aria-hidden>
                  <div className="h-1 w-12 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

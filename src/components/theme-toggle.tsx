"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="size-12 flex items-center justify-center rounded-md text-zinc-500"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="size-12 flex cursor-pointer items-center justify-center rounded-md text-zinc-500 transition-colors hover:text-zinc-700 dark:text-white dark:hover:text-zinc-200"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="size-5 transition-transform duration-300" />
      ) : (
        <Sun className="size-5 transition-transform duration-300" />
      )}
    </button>
  );
}

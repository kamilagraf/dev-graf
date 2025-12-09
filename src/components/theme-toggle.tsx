"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button
        className="p-2 bg-background transition-colors cursor-pointer group"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 transition-colors group-hover:text-indigo-600" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-background transition-colors cursor-pointer group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-colors group-hover:text-indigo-600" />
      ) : (
        <Moon className="h-5 w-5 transition-colors group-hover:text-indigo-600" />
      )}
    </button>
  );
}


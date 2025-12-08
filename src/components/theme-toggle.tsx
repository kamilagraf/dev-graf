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
      <div className="fixed top-4 right-4">
        <button
          className="p-2 rounded-md border border-border bg-background hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          <Sun className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md border border-border bg-background hover:bg-accent transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}


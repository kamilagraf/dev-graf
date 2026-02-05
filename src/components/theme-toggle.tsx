"use client";

import * as React from "react";
import { Classic } from "@theme-toggles/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (toggled: boolean) => {
    setTheme(toggled ? "dark" : "light");
  };

  if (!mounted) {
    return <div className="size-12" aria-label="Toggle theme" />;
  }

  return (
    <Classic
      duration={750}
      toggled={resolvedTheme === "dark"}
      onToggle={handleToggle}
      forceMotion
      className="theme-toggle size-12 text-[1.75rem] text-zinc-500 dark:text-white hover:text-zinc-500 dark:hover:text-white [--theme-toggle__classic--duration:750ms]"
      aria-label="Toggle theme"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...({} as any)}
    />
  );
}

"use client";

import { Paintbrush } from "lucide-react";
import { useFluidEffect } from "@/components/fluid-provider";

export function FluidToggle() {
  const { enabled, toggle, mounted } = useFluidEffect();

  if (!mounted) {
    return (
      <div
        className="size-12 flex items-center justify-center rounded-md text-zinc-500"
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="size-12 flex cursor-pointer items-center justify-center rounded-md text-zinc-500 transition-colors hover:text-zinc-700 dark:text-white dark:hover:text-zinc-200"
      aria-label={enabled ? "Disable colorful effect" : "Enable colorful effect"}
      aria-pressed={enabled}
      title={enabled ? "Disable colorful effect" : "Enable colorful effect"}
    >
      <Paintbrush
        className={`size-5 transition-opacity duration-300 ${
          enabled ? "opacity-100 text-teal-500" : "opacity-40"
        }`}
      />
    </button>
  );
}

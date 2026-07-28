"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Particles } from "@/components/ui/particles";
import { FluidBackground } from "@/components/ui/fluid-background";
import { FluidProvider } from "@/components/fluid-provider";

export function ParticlesWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setTimeout(() => {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, 100);
  }, [resolvedTheme]);

  return (
    <FluidProvider>
      <div className="relative min-h-screen w-full">
        <FluidBackground />
        <Particles
          className="pointer-events-none absolute inset-0 z-0"
          quantity={120}
          ease={80}
          size={0.4}
          color={color}
          refresh
        />
        <div className="relative z-10 flex min-h-full flex-col pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_textarea]:pointer-events-auto [&_select]:pointer-events-auto [&_label]:pointer-events-auto">
          {children}
        </div>
      </div>
    </FluidProvider>
  );
}

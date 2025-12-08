"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Particles } from "@/components/ui/particles";

export function ParticlesWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setTimeout(() => {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, 100);
  }, [resolvedTheme]);

  return (
    <div className="relative min-h-screen w-full">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}


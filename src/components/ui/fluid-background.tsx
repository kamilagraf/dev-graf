"use client";

import { useEffect, useRef } from "react";
import type WebGLFluidEnhanced from "webgl-fluid-enhanced";
import { useFluidEffect } from "@/components/fluid-provider";

const DESKTOP_POINTER_QUERY = "(any-hover: hover) and (any-pointer: fine)";

export function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { enabled } = useFluidEffect();

  useEffect(() => {
    if (!enabled) return;

    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (!window.matchMedia(DESKTOP_POINTER_QUERY).matches) return;

    let cancelled = false;
    let fluid: WebGLFluidEnhanced | null = null;

    (async () => {
      const { default: Fluid } = await import("webgl-fluid-enhanced");
      if (cancelled || !containerRef.current) return;

      const instance = new Fluid(containerRef.current);
      instance.setConfig({
        simResolution: 128,
        dyeResolution: 1440,
        densityDissipation: 0.5,
        velocityDissipation: 3,
        pressure: 0.1,
        curl: 3,
        splatRadius: 0.2,
        splatForce: 6000,
        shading: true,
        colorful: true,
        colorUpdateSpeed: 10,
        hover: true,
        transparent: true,
        bloom: false,
        sunrays: false,
        brightness: 1,
      });
      instance.start();
      if (cancelled) {
        instance.stop();
        return;
      }
      fluid = instance;
    })();

    return () => {
      cancelled = true;
      fluid?.stop();
      // Clear leftover canvas nodes so a re-enable starts clean
      container.replaceChildren();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-0 h-dvh w-screen" aria-hidden>
      <div
        ref={containerRef}
        className="h-full w-full [&_canvas]:!absolute [&_canvas]:!inset-0 [&_canvas]:!h-full [&_canvas]:!w-full"
      />
    </div>
  );
}

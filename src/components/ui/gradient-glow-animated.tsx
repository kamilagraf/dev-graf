"use client";

const defaultGlowStyle: React.CSSProperties = {
  borderRadius: "42% 58% 60% 40% / 55% 45% 55% 45%",
  background:
    "radial-gradient(ellipse 80% 70% at 30% 40%, rgba(20, 184, 166, 0.5), rgba(13, 148, 136, 0.2) 50%, transparent 70%)",
  filter: "blur(40px)",
  animation: "glow-drift 18s cubic-bezier(0.45, 0, 0.55, 1) infinite",
};

type AnimatedTealGlowProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function AnimatedTealGlow({ className = "", style = {} }: AnimatedTealGlowProps) {
  return (
    <div
        className={`pointer-events-none select-none -z-10 ${className}`}
        style={{ ...defaultGlowStyle, ...style }}
      />
  );
}

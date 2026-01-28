export function GradientGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Light theme glow */}
      <div 
        className="w-full max-w-2xl h-[450px] rounded-[50%] blur-3xl opacity-60 dark:hidden"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(126, 34, 206, 0.25) 0%, rgba(147, 51, 234, 0.18) 20%, rgba(139, 92, 246, 0.12) 35%, rgba(147, 51, 234, 0.08) 50%, rgba(139, 92, 246, 0.04) 65%, transparent 80%)'
        }}
      ></div>
      {/* Dark theme glow */}
      <div 
        className="hidden dark:block w-full max-w-2xl h-[450px] rounded-[50%] blur-3xl opacity-75"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(126, 34, 206, 0.4) 0%, rgba(147, 51, 234, 0.3) 20%, rgba(139, 92, 246, 0.2) 35%, rgba(147, 51, 234, 0.15) 50%, rgba(139, 92, 246, 0.08) 65%, transparent 80%)'
        }}
      ></div>
    </div>
  );
}

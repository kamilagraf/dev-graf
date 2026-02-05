export function GradientGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Light theme */}
      <div 
        className="w-full max-w-2xl h-[450px] rounded-[50%] blur-3xl opacity-60 dark:hidden"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 50%,' +
            ' rgba(45, 212, 191, 0.2) 0%,' +     // teal-400
            ' rgba(20, 184, 166, 0.14) 15%,' +  // teal-500
            ' rgba(10, 132, 162, 0.12) 32%,' +  // teal + #00509D mix
            ' rgba(0, 80, 157, 0.1) 48%,' +     // #00509D
            ' rgba(0, 63, 136, 0.08) 65%,' +    // #003F88
            ' rgba(0, 41, 107, 0.06) 82%,' +     // #00296B
            ' transparent 95%)'
        }}
      ></div>
      {/* Dark theme */}
      <div 
        className="hidden dark:block w-full max-w-2xl h-[450px] rounded-[50%] blur-3xl opacity-75"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 50%,' +
            ' rgba(45, 212, 191, 0.32) 0%,' +   // teal-400
            ' rgba(20, 184, 166, 0.24) 15%,' +  // teal-500
            ' rgba(10, 132, 162, 0.2) 32%,' +   // teal + #00509D mix
            ' rgba(0, 80, 157, 0.16) 48%,' +    // #00509D
            ' rgba(0, 63, 136, 0.12) 65%,' +     // #003F88
            ' rgba(0, 41, 107, 0.09) 82%,' +     // #00296B
            ' transparent 95%)'
        }}
      ></div>
    </div>
  );
}

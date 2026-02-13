"use client";

const experiences = [
  {
    title: "Software Engineer",
    company: "Curiosum",
    period: "2022 - 2025",
    description: "description..",
  },
  {
    title: "Freelance Developer",
    company: "",
    period: "2020 - Present",
    description: [
      "Launched React SWM Icon Pack package on npm.",
      "Published SWM Icon Pack Figma Plugin on Figma Community.",
      "Built SWM Icon Browser website to browse SWM icons.",
    ],
  },
];

export function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-4xl font-bold dark:text-white text-zinc-700 mb-4">Experience</h2>
          <div className="h-1 w-20 bg-teal-600"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5">
            <div className="h-full bg-gradient-to-b from-teal-600/20 via-teal-500/40 to-teal-600/20 dark:from-teal-600/30 dark:via-teal-500/50 dark:to-teal-600/30"></div>
          </div>
          
          <div className="absolute left-4 top-0 bottom-0 w-1 blur-sm opacity-30">
            <div className="h-full bg-gradient-to-b from-teal-600 via-teal-500 to-teal-600"></div>
          </div>

          <div className="flex flex-col gap-8 pl-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div
                  className="absolute left-0 top-5 z-10 w-4 flex items-center justify-center -translate-x-[calc(2.95rem+50%)]"
                >
                  <div className="absolute w-6 h-6 rounded-full bg-teal-600/30 dark:bg-teal-500/40 blur-md animate-pulse"></div>
                  <div className="absolute w-5 h-5 rounded-full bg-teal-600/20 dark:bg-teal-500/30"></div>
                  <div className="relative w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 border-2 border-zinc-50 dark:border-zinc-900 shadow-lg shadow-teal-600/50 dark:shadow-teal-500/50"></div>
                </div>

                <div className="flex-1 relative">
                  <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 border border-zinc-300/50 dark:border-zinc-900 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/20 hover:border-zinc-400/70 dark:hover:border-zinc-600 transition-colors duration-300 group cursor-pointer">
                    <div className="absolute top-4 right-4 text-sm font-medium text-zinc-400 dark:text-zinc-400">
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-bold text-zinc-800 dark:text-white group-hover:text-zinc-950 dark:group-hover:text-white mb-1 pr-24 transition-colors">
                      {exp.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 mb-3 text-base font-normal text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">
                      {exp.company && <span className="text-teal-600 dark:text-teal-400">{exp.company}</span>}
                    </div>

                    {Array.isArray(exp.description) ? (
                      <ul className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 leading-relaxed space-y-1 list-disc list-inside transition-colors">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 leading-relaxed transition-colors">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


"use client";

import { SiCursor, SiFigma, SiWebflow, SiFramer, SiGit, SiGithub, SiNotion} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { AnimatedTealGlow } from "@/components/ui/gradient-glow-animated";

const tools = [
  { name: "VSCode", icon: VscVscodeInsiders, color: "text-teal-600" },
  { name: "Cursor", icon: SiCursor, color: "text-zinc-900 dark:text-white" },
  { name: "Figma", icon: SiFigma, color: "", fill: "url(#figma-g)" },
  { name: "Webflow", icon: SiWebflow, color: "text-[#005AFF]" },
  { name: "Framer", icon: SiFramer, color: "text-zinc-900 dark:text-white" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-zinc-900 dark:text-white" },
  { name: "Notion", icon: SiNotion, color: "text-zinc-900 dark:text-white" }
];

export function Tools() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <svg width="0" height="0" aria-hidden className="absolute">
        <defs>
          <linearGradient id="figma-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F24E1E" />
            <stop offset="50%" stopColor="#A259FF" />
            <stop offset="100%" stopColor="#0ACF83" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col gap-12">
        <div className="group w-fit">
          <h2 className="text-3xl font-medium dark:text-teal-400 text-zinc-700 mb-4 uppercase">03 / Tools</h2>
          <div className="h-1 w-20 origin-left scale-x-0 bg-teal-600 transition-transform duration-300 group-hover:scale-x-100"></div>
        </div>

        <div className="relative overflow-hidden lg:overflow-visible">
          <AnimatedTealGlow className="absolute top-0 -right-48 w-96 h-96 opacity-30 dark:opacity-25" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10">
            {tools.map((tool) => {
              return (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 border border-zinc-300/50 dark:border-zinc-900 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/20 hover:border-zinc-400/70 dark:hover:border-zinc-600 transition-colors duration-300 cursor-pointer group"
                >
                  <tool.icon
                    className={`mb-3 size-12 ${tool.color} transition-transform duration-300 group-hover:scale-110`}
                    {...("fill" in tool ? { fill: tool.fill } : {})}
                  />
                  <span className="text-base font-medium dark:text-white text-zinc-800">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

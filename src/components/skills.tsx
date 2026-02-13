"use client";

import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiElixir, 
  SiPhoenixframework, 
  SiPostgresql, 
  SiGit, 
  SiDocker 
} from "react-icons/si";
import { AnimatedTealGlow } from "@/components/ui/gradient-glow-animated";

const skills = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Typescript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Elixir", icon: SiElixir, color: "text-[#4B275F]" },
  { name: "Phoenix", icon: SiPhoenixframework, color: "text-[#FD4F00]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
];

export function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-4xl font-bold dark:text-white text-zinc-700 mb-4">Tech stack</h2>
          <div className="h-1 w-20 bg-teal-600"></div>
        </div>

        <div className="relative overflow-hidden lg:overflow-visible">
          <AnimatedTealGlow className="absolute top-0 -right-48 w-96 h-96 opacity-30 dark:opacity-25" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10">
            {skills.map((skill) => {
              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 border border-zinc-300/50 dark:border-zinc-900 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/20 hover:border-zinc-400/70 dark:hover:border-zinc-600 transition-colors duration-300 cursor-pointer group"
                >
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-base font-bold dark:text-white text-zinc-800">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


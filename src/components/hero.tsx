"use client";

import { Github, Linkedin, Mail, Code, Rocket, Shield, Users } from "lucide-react";
import { GradientGlow } from "@/components/gradient-glow";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col pb-16">
      <div className="relative flex flex-col items-center justify-center h-screen px-8 text-center">
        <GradientGlow />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8">
            <span className="px-4 py-1.5 rounded-full bg-purple-600/20 text-purple-400 text-sm font-medium border border-purple-600/30">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 dark:text-white text-zinc-700">
            Hey, I&apos;m <span className="text-purple-600">Kamila</span>!
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-zinc-700">
            Fullstack Developer
          </h2>

          <p className="text-lg md:text-xl dark:text-zinc-400 text-zinc-700 max-w-2xl mb-10 leading-relaxed">
          Code. Deploy. Repeat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-800 transition-colors cursor-pointer"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("cv")}
              className="px-6 py-3 rounded-md border border-purple-600 dark:border-zinc-700 text-purple-600 dark:text-white font-semibold hover:bg-purple-800 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer"
            >
              View CV
            </button>
          </div>

          <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-purple-600 dark:hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-purple-600 dark:hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-purple-600 dark:hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-5xl font-bold dark:text-white text-zinc-700 mb-4">About me</h2>
          <div className="h-1 w-20 bg-purple-600"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-8 dark:text-zinc-400 text-zinc-700 leading-relaxed">
              <p>
              I&apos;m a fullstack developer with a passion for building robust and scalable web applications. My journey in software development has equipped me with a diverse skill set spanning both frontend and backend technologies. 
              </p>
              <p>
              When I&apos;m not coding, I&apos;m constantly learning new technologies and staying up-to-date with the latest industry trends to deliver cutting-edge solutions.              </p>
            </div>
          </div>

          <div className="rounded-2xl p-8 flex-1 mt-16 shadow-[0_0_50px_rgba(147,51,234,0.15)] dark:shadow-[0_0_50px_rgba(147,51,234,0.15)]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group/item border border-zinc-300/50 dark:border-zinc-700/20 hover:border-purple-500/40 dark:hover:border-purple-600/30">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-600/20 flex items-center justify-center group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-600/30 transition-all duration-300 group-hover/item:scale-110">
                  <Code className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover/item:text-purple-700 dark:group-hover/item:text-purple-300 transition-colors" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white group-hover/item:text-purple-600 dark:group-hover/item:text-purple-300 transition-colors">Clean Code</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Writing maintainable and scalable solutions</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group/item border border-zinc-300/50 dark:border-zinc-700/20 hover:border-purple-500/40 dark:hover:border-purple-600/30">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-600/20 flex items-center justify-center group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-600/30 transition-all duration-300 group-hover/item:scale-110">
                  <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover/item:text-purple-700 dark:group-hover/item:text-purple-300 transition-colors" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white group-hover/item:text-purple-600 dark:group-hover/item:text-purple-300 transition-colors">Fast Performance</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Optimized applications for best user experience</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group/item border border-zinc-300/50 dark:border-zinc-700/20 hover:border-purple-500/40 dark:hover:border-purple-600/30">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-600/20 flex items-center justify-center group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-600/30 transition-all duration-300 group-hover/item:scale-110">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover/item:text-purple-700 dark:group-hover/item:text-purple-300 transition-colors" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white group-hover/item:text-purple-600 dark:group-hover/item:text-purple-300 transition-colors">Secure Systems</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Building with security best practices in mind</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group/item border border-zinc-300/50 dark:border-zinc-700/20 hover:border-purple-500/40 dark:hover:border-purple-600/30">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-600/20 flex items-center justify-center group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-600/30 transition-all duration-300 group-hover/item:scale-110">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover/item:text-purple-700 dark:group-hover/item:text-purple-300 transition-colors" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white group-hover/item:text-purple-600 dark:group-hover/item:text-purple-300 transition-colors">Team Player</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Collaborative approach to problem solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


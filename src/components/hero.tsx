"use client";

import { Github, Linkedin, Mail, Code, Rocket, Shield, Users } from "lucide-react";
import { GradientGlow } from "@/components/ui/gradient-glow";

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
            <span className="px-4 py-1.5 rounded-full bg-transparent dark:bg-transparent text-zinc-400 dark:text-zinc-300 text-sm font-medium border border-zinc-300 dark:border-zinc-800">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 dark:text-white text-zinc-700">
            Hey, I&apos;m <span className="text-teal-600">Kamila</span>!
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-zinc-700">
            Fullstack Developer
          </h2>

          <p className="text-lg md:text-xl dark:text-zinc-100 text-zinc-700 max-w-2xl mb-10 leading-relaxed">
          Code. Deploy. Repeat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative cursor-pointer overflow-hidden rounded-xl p-[2px] transition-all duration-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:-translate-y-0.5"
            >
              <span
                className="absolute -inset-[2px] z-0 rounded-xl bg-[conic-gradient(from_0deg,#0f766e,#0d9488,#0f766e)] opacity-100 group-hover:animate-[gradient-border-spin_3s_linear_infinite]"
                aria-hidden
              />
              <span className="relative z-10 flex items-center gap-2 rounded-[10px] bg-teal-600 dark:bg-background px-6 py-3 text-white dark:text-teal-400 font-semibold transition-all duration-300 group-hover:bg-white group-hover:text-teal-600 dark:group-hover:bg-background dark:group-hover:text-teal-400">
                Get In Touch
              </span>
            </button>
            <button
              onClick={() => scrollToSection("cv")}
              className="px-6 py-3 rounded-md border border-teal-600 dark:border-zinc-700 text-teal-600 dark:text-white font-semibold hover:bg-teal-800 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer"
            >
              View CV
            </button>
          </div>

          <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-teal-600 dark:hover:border-teal-600 hover:text-teal-600 dark:hover:text-teal-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-teal-600 dark:hover:border-teal-600 hover:text-teal-600 dark:hover:text-teal-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-teal-600 dark:hover:border-teal-600 hover:text-teal-600 dark:hover:text-teal-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-4xl font-bold dark:text-white text-zinc-700 mb-4">About me</h2>
          <div className="h-1 w-20 bg-teal-600"></div>
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

          <div className="rounded-2xl p-8 flex-1 mt-16 shadow-[-10px_0_30px_rgba(20,184,166,0.1),10px_0_30px_rgba(0,41,107,0.1)] dark:shadow-[-10px_0_30px_rgba(20,184,166,0.16),10px_0_30px_rgba(0,41,107,0.16)]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/20 border border-zinc-300/50 dark:border-zinc-900 hover:border-zinc-400/70 dark:hover:border-zinc-600 transition-colors duration-300 cursor-pointer group/item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-600/20 flex items-center justify-center group-hover/item:bg-teal-200 dark:group-hover/item:bg-teal-600/30 transition-all duration-300 group-hover/item:scale-110">
                  <Code className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover/item:text-teal-700 dark:group-hover/item:text-teal-300 transition-colors" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white group-hover/item:text-teal-600 dark:group-hover/item:text-teal-300 transition-colors">Clean Code</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Writing maintainable and scalable solutions</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/20 border border-zinc-300/50 dark:border-zinc-900 hover:border-zinc-400/70 dark:hover:border-zinc-600 transition-colors duration-300 cursor-pointer group/item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-600/20 flex items-center justify-center group-hover/item:bg-teal-200 dark:group-hover/item:bg-teal-600/30 transition-all duration-300 group-hover/item:scale-110">
                  <Rocket className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover/item:text-teal-700 dark:group-hover/item:text-teal-300 transition-colors" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white group-hover/item:text-teal-600 dark:group-hover/item:text-teal-300 transition-colors">Fast Performance</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Optimized applications for best user experience</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/20 border border-zinc-300/50 dark:border-zinc-900 hover:border-zinc-400/70 dark:hover:border-zinc-600 transition-colors duration-300 cursor-pointer group/item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-600/20 flex items-center justify-center group-hover/item:bg-teal-200 dark:group-hover/item:bg-teal-600/30 transition-all duration-300 group-hover/item:scale-110">
                  <Shield className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover/item:text-teal-700 dark:group-hover/item:text-teal-300 transition-colors" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white group-hover/item:text-teal-600 dark:group-hover/item:text-teal-300 transition-colors">Secure Systems</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Building with security best practices in mind</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/20 backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-900/30 border border-zinc-300/50 dark:border-zinc-900 hover:border-zinc-400/70 dark:hover:border-zinc-600 transition-colors duration-300 cursor-pointer group/item">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-600/20 flex items-center justify-center group-hover/item:bg-teal-200 dark:group-hover/item:bg-teal-600/30 transition-all duration-300 group-hover/item:scale-110">
                  <Users className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover/item:text-teal-700 dark:group-hover/item:text-teal-300 transition-colors" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-white group-hover/item:text-teal-600 dark:group-hover/item:text-teal-300 transition-colors">Team Player</h3>
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


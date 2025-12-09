"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
      <div className="mb-8">
        <span className="px-4 py-1.5 rounded-full bg-indigo-600/20 text-indigo-400 text-sm font-medium border border-indigo-600/30">
          Available for opportunities
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 dark:text-white text-zinc-700">
        Hey, I&apos;m <span className="text-indigo-600">Kamila</span>!
      </h1>

      {/* Subheading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-zinc-700">
        Fullstack Developer
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl dark:text-zinc-300 text-zinc-700 max-w-2xl mb-10 leading-relaxed">
      Code. Create. Deploy. Repeat.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Get In Touch
        </button>
        <button
          onClick={() => scrollToSection("cv")}
          className="px-6 py-3 rounded-md border border-indigo-600 dark:border-white text-indigo-600 dark:text-white font-semibold hover:bg-indigo-600 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer"
        >
          View CV
        </button>
      </div>

      {/* Social Links */}
      <div className="flex gap-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-indigo-600 hover:text-indigo-600 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-indigo-600 hover:text-indigo-600 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-indigo-600 hover:text-indigo-600 transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="mailto:contact@example.com"
          className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-white hover:border-indigo-600 hover:text-indigo-600 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}


import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { href: "https://github.com/kamilagraf", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/kamilagraf/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:kam.graf0@gmail.com", icon: Mail, label: "Email" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800/80 bg-transparent dark:bg-zinc-950/80 mt-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {year} Graf. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

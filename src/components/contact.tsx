"use client";

import { Send, Mail } from "lucide-react";
import { useState } from "react";

const EMAIL = "contact@example.com";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col gap-16">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4 dark:text-white text-zinc-700">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </p>

          {/* Direct email */}
          <div className="mt-10 inline-flex items-center gap-3 text-purple-600 dark:text-purple-400">
            <Mail className="w-5 h-5 shrink-0" />
            <span className="text-base font-semibold">{EMAIL}</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 border border-zinc-300/50 dark:border-zinc-900 text-zinc-800 dark:text-zinc-300 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600/50 transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 border border-zinc-300/50 dark:border-zinc-900 text-zinc-800 dark:text-zinc-300 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600/50 transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 border border-zinc-300/50 dark:border-zinc-900 text-zinc-800 dark:text-zinc-300 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600/50 transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="group relative cursor-pointer overflow-hidden rounded-xl p-[2px] transition-all duration-300 hover:shadow-[0_0_25px_rgba(30,58,138,0.4)] hover:-translate-y-0.5"
                >
                  <span
                    className="absolute -inset-[2px] z-0 rounded-xl bg-[conic-gradient(from_0deg,#1e3a8a,#581c87,#1e3a8a)] opacity-100 group-hover:animate-[gradient-border-spin_3s_linear_infinite]"
                    aria-hidden
                  />
                  <span className="relative z-10 flex items-center gap-2 rounded-[10px] bg-background px-6 py-3 text-foreground font-semibold transition-all duration-300">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

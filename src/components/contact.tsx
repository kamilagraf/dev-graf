"use client";

import { Send, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedTealGlow } from "@/components/ui/gradient-glow-animated";

const EMAIL = "kam.graf0@gmail.com";
const SUCCESS_DISPLAY_MS = 5000;

const INITIAL_FORM_DATA = { name: "", email: "", message: "" };

export function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-dismiss success message
  useEffect(() => {
    if (status === "success") {
      timerRef.current = setTimeout(() => setStatus("idle"), SUCCESS_DISPLAY_MS);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error?.message || "Something went wrong.");
      }

      setStatus("success");
      setFormData(INITIAL_FORM_DATA);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-8 relative overflow-visible">
      <AnimatedTealGlow className="absolute top-[-10%] left-[12%] w-[min(80vw,420px)] h-[min(70vw,380px)] opacity-45 dark:opacity-25" />

      <div className="flex flex-col gap-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4 dark:text-white text-zinc-700">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 text-teal-600 dark:text-teal-400">
            <Mail className="w-5 h-5 shrink-0" />
            <span className="text-base font-semibold">{EMAIL}</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 border border-zinc-300/50 dark:border-zinc-900 text-zinc-800 dark:text-zinc-300 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-600/50 focus:border-teal-600/50 transition-colors"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 border border-zinc-300/50 dark:border-zinc-900 text-zinc-800 dark:text-zinc-300 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-600/50 focus:border-teal-600/50 transition-colors"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/10 border border-zinc-300/50 dark:border-zinc-900 text-zinc-800 dark:text-zinc-300 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-600/50 focus:border-teal-600/50 transition-colors resize-none"
              required
            />

            <div className="flex items-center justify-end gap-4">
              {status === "error" && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}
              {status === "success" && (
                <p className="text-sm text-teal-500 animate-fade-in">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative cursor-pointer overflow-hidden rounded-xl p-[2px] transition-all duration-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none"
              >
                <span
                  className="absolute -inset-[2px] z-0 rounded-xl bg-[conic-gradient(from_0deg,#0f766e,#0d9488,#0f766e)] opacity-100 group-hover:animate-[gradient-border-spin_3s_linear_infinite]"
                  aria-hidden
                />
                <span className="relative z-10 flex items-center gap-2 rounded-[10px] bg-background px-6 py-3 text-teal-600 dark:text-teal-400 font-semibold transition-all duration-300">
                  <Send className="w-5 h-5" />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

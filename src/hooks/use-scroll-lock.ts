"use client";

import { useEffect, useRef } from "react";

export function useScrollLock(locked: boolean) {
  const scrollY = useRef(0);

  useEffect(() => {
    if (!locked) return;

    scrollY.current = window.scrollY;
    document.documentElement.style.setProperty("--scroll-lock-top", `-${scrollY.current}px`);
    document.documentElement.classList.add("scroll-locked");

    return () => {
      document.documentElement.classList.remove("scroll-locked");
      window.scrollTo(0, scrollY.current);
    };
  }, [locked]);
}

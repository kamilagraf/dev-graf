"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";

const STORAGE_KEY = "fluid-effect-enabled";
const CHANGE_EVENT = "fluid-effect-change";

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) !== "false";
}

function getServerSnapshot() {
  return true;
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

type FluidContextValue = {
  enabled: boolean;
  toggle: () => void;
  mounted: boolean;
};

const FluidContext = createContext<FluidContextValue | null>(null);

export function FluidProvider({ children }: { children: React.ReactNode }) {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, String(!getSnapshot()));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return (
    <FluidContext.Provider value={{ enabled, toggle, mounted: true }}>
      {children}
    </FluidContext.Provider>
  );
}

export function useFluidEffect() {
  const ctx = useContext(FluidContext);
  if (!ctx) {
    throw new Error("useFluidEffect must be used within FluidProvider");
  }
  return ctx;
}

"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "@/content";
import type { Locale } from "@/content/types";

interface DictionaryContextValue {
  locale: Locale;
  dictionary: Dictionary;
}

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export function DictionaryProvider({
  locale,
  dictionary,
  children,
}: DictionaryContextValue & { children: ReactNode }) {
  return (
    <DictionaryContext.Provider value={{ locale, dictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): DictionaryContextValue {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary debe usarse dentro de DictionaryProvider");
  }
  return context;
}

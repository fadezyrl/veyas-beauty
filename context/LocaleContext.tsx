"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type JSX,
} from "react";
import { getDictionary, type Dictionary, type Locale } from "@/lib/dictionary";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
};

export const LocaleProvider = ({
  children,
  initialLocale = "EN",
}: LocaleProviderProps): JSX.Element => {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const dictionary = getDictionary(locale);
  const dir = locale === "UR" ? "rtl" : "ltr";

  return (
    <LocaleContext.Provider value={{ locale, dictionary, setLocale, dir }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};

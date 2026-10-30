"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
  type JSX,
} from "react";
import { getDictionary, type Dictionary, type Locale } from "@/lib/dictionary";

const LOCALE_STORAGE_KEY = "veyas-locale";
const LOCALE_EVENT = "veyas:locale";

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

const isLocale = (value: string | null): value is Locale => {
  return value === "EN" || value === "NL";
};

const subscribeLocale = (onChange: () => void): (() => void) => {
  window.addEventListener("storage", onChange);
  window.addEventListener(LOCALE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(LOCALE_EVENT, onChange);
  };
};

const readStoredLocale = (fallback: Locale): Locale => {
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(stored) ? stored : fallback;
};

export const LocaleProvider = ({
  children,
  initialLocale = "EN",
}: LocaleProviderProps): JSX.Element => {
  const getSnapshot = useCallback(
    () => readStoredLocale(initialLocale),
    [initialLocale],
  );
  const getServerSnapshot = useCallback(() => initialLocale, [initialLocale]);
  const locale = useSyncExternalStore(
    subscribeLocale,
    getSnapshot,
    getServerSnapshot,
  );
  const dictionary = getDictionary(locale);
  const dir = "ltr";

  const setLocale = (next: Locale): void => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    window.dispatchEvent(new Event(LOCALE_EVENT));
  };

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

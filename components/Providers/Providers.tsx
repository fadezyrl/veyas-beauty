"use client";

import { useEffect, type JSX, type ReactNode } from "react";
import { LocaleProvider, useLocale } from "@/context/LocaleContext";

type ProvidersProps = {
  children: ReactNode;
};

const DocumentLocale = ({ children }: ProvidersProps): JSX.Element => {
  const { dir, locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "UR" ? "ur" : "en";
    document.documentElement.dir = dir;
  }, [dir, locale]);

  return <>{children}</>;
};

export const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return (
    <LocaleProvider initialLocale="EN">
      <DocumentLocale>{children}</DocumentLocale>
    </LocaleProvider>
  );
};

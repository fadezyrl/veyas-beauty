"use client";

import type { JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import "./academy.desktop.css";
import "./academy.mobile.css";

export const Academy = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { academy } = dictionary;

  return (
    <section className="acad" id="academy">
      <div>
        <p className="lbl">{academy.label}</p>
        <h3>
          {academy.titleBefore}
          <em>{academy.titleEm}</em>
        </h3>
        <p>{academy.body}</p>
      </div>
      <a
        className="btn"
        href={SITE.academyUrl}
        aria-label={academy.ctaAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        {academy.cta}
      </a>
    </section>
  );
};

"use client";

import type { JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import "./footer.desktop.css";
import "./footer.mobile.css";

export const Footer = (): JSX.Element => {
  const { dictionary } = useLocale();

  return (
    <footer className="site-footer">
      <div className="site-footer__wm" aria-hidden="true">
        {SITE.brand}
      </div>
      <div className="site-footer__row">
        <div className="site-footer__col">
          <span className="lbl">{dictionary.footer.navigate}</span>
          <a href="#services">{dictionary.nav.services}</a>
          <a href="#portfolio">{dictionary.nav.portfolio}</a>
          <a href="#about">{dictionary.nav.about}</a>
          <a href="#contact">{dictionary.nav.contact}</a>
          <a href="#academy">{dictionary.nav.academy}</a>
        </div>
        <div className="site-footer__col">
          <span className="lbl">{dictionary.footer.contact}</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>{SITE.phone}</a>
          <span>{SITE.city}</span>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE.instagramHandle}
          </a>
        </div>
        <a className="btn inv" href="#book">
          {dictionary.footer.book}
        </a>
        <p className="site-footer__copy">{dictionary.footer.copyright}</p>
      </div>
    </footer>
  );
};

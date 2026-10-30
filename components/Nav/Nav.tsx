"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/lib/dictionary";
import "./nav.desktop.css";
import "./nav.mobile.css";

const MOBILE_MAX = 640;

export const Nav = (): JSX.Element => {
  const { dictionary, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 40);
    };

    const onResize = (): void => {
      const mobile = window.innerWidth <= MOBILE_MAX;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    onScroll();
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const node = linksRef.current;
    if (!node || !isMobile) {
      return;
    }

    if (menuOpen) {
      node.removeAttribute("inert");
      node.setAttribute("aria-hidden", "false");
      return;
    }

    node.setAttribute("inert", "");
    node.setAttribute("aria-hidden", "true");
  }, [menuOpen, isMobile]);

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const toggleMenu = (): void => {
    if (window.innerWidth > MOBILE_MAX) {
      return;
    }
    setMenuOpen((open) => !open);
  };

  const onLocaleChange = (next: Locale): void => {
    setLocale(next);
  };

  return (
    <nav
      className={`site-nav${scrolled ? " is-scrolled" : ""}`}
      aria-label={dictionary.nav.primaryAria}
    >
      <a
        href="#top"
        className="site-nav__logo"
        aria-label={dictionary.nav.homeAria}
        onClick={closeMenu}
      >
        {SITE.brand}
        <small>{SITE.brandSub}</small>
      </a>

      <div className="site-nav__actions">
        <div
          className="site-nav__lang"
          role="group"
          aria-label={dictionary.nav.langSwitchAria}
        >
          <button
            type="button"
            className={locale === "EN" ? "is-active" : ""}
            aria-pressed={locale === "EN"}
            onClick={() => onLocaleChange("EN")}
          >
            {dictionary.nav.langEn}
          </button>
          <button
            type="button"
            className={locale === "UR" ? "is-active" : ""}
            aria-pressed={locale === "UR"}
            onClick={() => onLocaleChange("UR")}
          >
            {dictionary.nav.langUr}
          </button>
        </div>

        <button
          type="button"
          className="site-nav__burger"
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
          onClick={toggleMenu}
        >
          {menuOpen ? dictionary.nav.close : dictionary.nav.menu}
        </button>
      </div>

      <div
        id="site-nav-links"
        ref={linksRef}
        className={`site-nav__links${menuOpen ? " is-open" : ""}`}
      >
        <a href="#services" onClick={closeMenu}>
          {dictionary.nav.services}
        </a>
        <a href="#portfolio" onClick={closeMenu}>
          {dictionary.nav.portfolio}
        </a>
        <a href="#about" onClick={closeMenu}>
          {dictionary.nav.about}
        </a>
        <a href="#contact" onClick={closeMenu}>
          {dictionary.nav.contact}
        </a>
        <a
          href="#academy"
          className="site-nav__academy"
          onClick={closeMenu}
        >
          {dictionary.nav.academy}
        </a>
        <a href="#book" className="btn" onClick={closeMenu}>
          {dictionary.nav.book}
        </a>
      </div>
    </nav>
  );
};

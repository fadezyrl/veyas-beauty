"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/lib/dictionary";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import "./nav.desktop.css";
import "./nav.mobile.css";

const MOBILE_MAX = 640;

const LOCALES: Locale[] = ["EN", "NL"];

export const Nav = (): JSX.Element => {
  const { dictionary, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = (): void => {
      const currentY = window.scrollY;
      const previousY = lastScrollY.current;
      const delta = currentY - previousY;

      setScrolled(currentY > 40);

      if (currentY <= 40) {
        setNavHidden(false);
      } else if (delta > 6) {
        setNavHidden(true);
        setLangOpen(false);
      } else if (delta < -6) {
        setNavHidden(false);
      }

      lastScrollY.current = currentY;
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
        setLangOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!langOpen) {
      return;
    }

    const onPointerDown = (event: MouseEvent | TouchEvent): void => {
      const node = langRef.current;
      if (!node) {
        return;
      }
      const target = event.target;
      if (target instanceof Node && !node.contains(target)) {
        setLangOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [langOpen]);

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
    setLangOpen(false);
  };

  const toggleMenu = (): void => {
    if (window.innerWidth > MOBILE_MAX) {
      return;
    }
    setMenuOpen((open) => !open);
  };

  const localeLabel = (code: Locale): string => {
    return code === "NL" ? dictionary.nav.langNl : dictionary.nav.langEn;
  };

  const onLocaleChange = (next: Locale): void => {
    setLocale(next);
    setLangOpen(false);
  };

  return (
    <nav
      className={`site-nav${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}${navHidden && !menuOpen ? " is-hidden" : ""}`}
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
          className={`site-nav__lang${langOpen ? " is-open" : ""}`}
          ref={langRef}
        >
          <button
            type="button"
            className="site-nav__lang-toggle"
            aria-label={dictionary.nav.langSwitchAria}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
            aria-controls="site-nav-lang-menu"
            onClick={() => setLangOpen((open) => !open)}
          >
            <span>{localeLabel(locale)}</span>
            <span className="site-nav__lang-caret" aria-hidden="true" />
          </button>
          <ul
            id="site-nav-lang-menu"
            className="site-nav__lang-menu"
            role="listbox"
            aria-label={dictionary.nav.langSwitchAria}
            hidden={!langOpen}
          >
            {LOCALES.map((code) => (
              <li key={code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === code}
                  className={locale === code ? "is-active" : ""}
                  onClick={() => onLocaleChange(code)}
                >
                  {localeLabel(code)}
                </button>
              </li>
            ))}
          </ul>
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
        <a
          href={buildWhatsAppUrl(dictionary.booking.generalMessage)}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {dictionary.nav.book}
        </a>
      </div>
    </nav>
  );
};

"use client";

import { useEffect, useState, type JSX } from "react";
import { PORTFOLIO_MEDIA } from "@/data/media";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { resolvePath } from "@/lib/resolve-path";
import { Reveal } from "@/components/Reveal/Reveal";
import { MediaFrame } from "@/components/MediaFrame/MediaFrame";
import "./portfolio.desktop.css";
import "./portfolio.mobile.css";

const MOBILE_MAX = 640;

export const Portfolio = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { portfolio } = dictionary;
  const dictRecord = dictionary as unknown as Record<string, unknown>;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);
    const sync = (): void => {
      setIsMobile(media.matches);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <section className="port" id="portfolio">
      <header className="port__header">
        <div>
          <p className="lbl">{portfolio.label}</p>
          <Reveal as="h2">
            {portfolio.titleBefore}
            <em>{portfolio.titleEm}</em>
          </Reveal>
        </div>
        <a
          className="btn"
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {portfolio.instagram}
        </a>
      </header>

      <div className="port__mos">
        {PORTFOLIO_MEDIA.map((item) => {
          const label = resolvePath(dictRecord, item.labelKey);
          return (
            <MediaFrame
              key={item.id}
              className={isMobile ? `port__tile ${item.className}` : item.className}
              src={item.src}
              alt={label}
              type="image"
              label={isMobile ? undefined : label}
            />
          );
        })}
      </div>
    </section>
  );
};

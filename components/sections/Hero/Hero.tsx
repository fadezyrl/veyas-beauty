"use client";

import type { JSX } from "react";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { MediaFrame } from "@/components/MediaFrame/MediaFrame";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import "./hero.desktop.css";
import "./hero.mobile.css";

export const Hero = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { hero, booking } = dictionary;
  const whatsappUrl = buildWhatsAppUrl(booking.generalMessage);

  return (
    <section className="hero">
      <Reveal as="h1" delayMs={100}>
        {hero.line1}
        <br />
        {hero.line2Before}
        <em>{hero.line2Em}</em>
        {hero.line2After}
      </Reveal>
      <MediaFrame
        className="hero__img"
        src={MEDIA.hero.src}
        alt={hero.imageLabel}
        type={MEDIA.hero.type}
        priority
      />
      <Reveal className="hero__sub">
        <p>{hero.sub}</p>
        <a
          className="btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {hero.cta}
        </a>
      </Reveal>
      <span className="lbl hero__side">{hero.location}</span>
    </section>
  );
};

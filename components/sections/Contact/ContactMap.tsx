"use client";

import type { JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";

const buildOsmEmbedUrl = (): string => {
  const { west, south, east, north } = SITE.map.bbox;
  const bbox = [west, south, east, north].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik`;
};

export const ContactMap = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { contact } = dictionary;
  const embedUrl = buildOsmEmbedUrl();

  return (
    <div className="contact__map">
      <div className="contact__map-frame">
        <iframe
          className="contact__map-iframe"
          src={embedUrl}
          title={`${contact.mapLabel} — ${contact.mapCity}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="contact__map-veil" aria-hidden="true" />
        <div className="contact__map-pin" aria-hidden="true">
          <span className="contact__map-pin-label">{SITE.brand}</span>
          <span className="contact__map-pin-mark" />
        </div>
      </div>
      <a
        className="contact__map-link"
        href={SITE.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${contact.openMaps}: ${contact.mapCity}`}
      >
        <span className="lbl">{contact.mapCity}</span>
        <span className="contact__map-link-cta">{contact.openMaps}</span>
      </a>
    </div>
  );
};

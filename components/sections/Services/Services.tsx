"use client";

import type { JSX } from "react";
import { SERVICES } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { resolvePath } from "@/lib/resolve-path";
import { buildWhatsAppUrl, fillServiceMessage } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal/Reveal";
import "./services.desktop.css";
import "./services.mobile.css";

export const Services = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { services, booking } = dictionary;
  const dictRecord = dictionary as unknown as Record<string, unknown>;

  return (
    <section className="svc" id="services">
      <header className="svc__header">
        <div>
          <p className="lbl">{services.label}</p>
          <Reveal as="h2">
            {services.titleBefore}
            <em>{services.titleEm}</em>
          </Reveal>
        </div>
        <p className="lbl">{services.pricesNote}</p>
      </header>

      <div>
        {SERVICES.map((service, index) => {
          const name = resolvePath(dictRecord, service.nameKey);
          const whatsappUrl = buildWhatsAppUrl(
            fillServiceMessage(booking.serviceMessage, name),
          );

          return (
            <Reveal key={service.id} className="svc__row">
              <span className="lbl svc__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{name}</h3>
              <p>{resolvePath(dictRecord, service.descriptionKey)}</p>
              <span className="lbl svc__duration">{service.duration}</span>
              <span className="svc__price">{service.price}</span>
              <a
                className="svc__book"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {services.book}
              </a>
            </Reveal>
          );
        })}
      </div>

      <p className="svc__note">{services.note}</p>
    </section>
  );
};

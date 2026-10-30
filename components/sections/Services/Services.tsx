"use client";

import type { JSX, MouseEvent } from "react";
import { SERVICES } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { resolvePath } from "@/lib/resolve-path";
import { openBookingWithService } from "@/lib/booking-deeplink";
import { Reveal } from "@/components/Reveal/Reveal";
import "./services.desktop.css";
import "./services.mobile.css";

export const Services = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { services } = dictionary;
  const dictRecord = dictionary as unknown as Record<string, unknown>;

  const onBookClick = (
    event: MouseEvent<HTMLAnchorElement>,
    serviceId: string,
  ): void => {
    event.preventDefault();
    openBookingWithService(serviceId);
  };

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
        {SERVICES.map((service, index) => (
          <Reveal key={service.id} className="svc__row">
            <span className="lbl svc__num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{resolvePath(dictRecord, service.nameKey)}</h3>
            <p>{resolvePath(dictRecord, service.descriptionKey)}</p>
            <span className="lbl svc__duration">{service.duration}</span>
            <span className="svc__price">{service.price}</span>
            <a
              className="svc__book"
              href={`/?service=${service.id}#book`}
              onClick={(event) => onBookClick(event, service.id)}
            >
              {services.book}
            </a>
          </Reveal>
        ))}
      </div>

      <p className="svc__note">{services.note}</p>
    </section>
  );
};

"use client";

import type { JSX } from "react";
import { SERVICES } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { resolvePath } from "@/lib/resolve-path";
import { buildWhatsAppUrl, fillServiceMessage } from "@/lib/whatsapp";
import "./booking.desktop.css";
import "./booking.mobile.css";

export const Booking = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { booking } = dictionary;
  const dictRecord = dictionary as unknown as Record<string, unknown>;
  const generalUrl = buildWhatsAppUrl(booking.generalMessage);

  return (
    <section className="book" id="book">
      <div className="book__intro">
        <p className="lbl">{booking.label}</p>
        <h2>
          {booking.titleBefore}
          <em>{booking.titleEm}</em>
        </h2>
        <p>{booking.body}</p>
      </div>

      <div className="book__panel-card">
        <a
          className="btn book__cta"
          href={generalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {booking.cta}
        </a>

        <p className="lbl book__pick">{booking.pickService}</p>
        <ul className="book__services">
          {SERVICES.map((service) => {
            const name = resolvePath(dictRecord, service.nameKey);
            const href = buildWhatsAppUrl(
              fillServiceMessage(booking.serviceMessage, name),
            );
            return (
              <li key={service.id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{name}</span>
                  <span className="lbl">{service.duration}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="book__note">{booking.note}</p>
      </div>
    </section>
  );
};

"use client";

import type { JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { ContactMap } from "./ContactMap";
import "./contact.desktop.css";
import "./contact.mobile.css";

export const Contact = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { contact } = dictionary;

  return (
    <section className="contact" id="contact">
      <div className="contact__info">
        <p className="lbl">{contact.label}</p>
        <Reveal as="h2">
          {contact.titleBefore}
          <em>{contact.titleEm}</em>
        </Reveal>
        <dl className="contact__dl">
          <dt>{contact.location}</dt>
          <dd>{SITE.address}</dd>
          <dt>{contact.hours}</dt>
          <dd>{SITE.hours}</dd>
          <dt>{contact.contact}</dt>
          <dd>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            {" · "}
            <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>{SITE.phone}</a>
          </dd>
          <dt>{contact.instagram}</dt>
          <dd>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.instagramHandle}
            </a>
          </dd>
        </dl>
        <a className="btn" href="#book">
          {contact.book}
        </a>
      </div>
      <ContactMap />
    </section>
  );
};

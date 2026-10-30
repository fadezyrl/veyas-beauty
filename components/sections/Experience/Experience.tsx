"use client";

import type { JSX } from "react";
import { EXPERIENCE_STEPS } from "@/data/site";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { resolvePath } from "@/lib/resolve-path";
import { Reveal } from "@/components/Reveal/Reveal";
import { MediaFrame } from "@/components/MediaFrame/MediaFrame";
import "./experience.desktop.css";
import "./experience.mobile.css";

export const Experience = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { experience } = dictionary;
  const dictRecord = dictionary as unknown as Record<string, unknown>;

  return (
    <section className="dark exp">
      <p className="lbl">{experience.label}</p>
      <Reveal as="h2">
        {experience.titleBefore}
        <em>{experience.titleEm}</em>
      </Reveal>
      <MediaFrame
        className="exp__ph"
        src={MEDIA.experience.src}
        alt={experience.imageLabel}
        type={MEDIA.experience.type}
      />
      <ol className="exp__list">
        {EXPERIENCE_STEPS.map((step) => (
          <Reveal key={step.id} as="li">
            <b>{step.id}</b>
            {resolvePath(dictRecord, step.labelKey)}
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

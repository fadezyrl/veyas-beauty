"use client";

import type { JSX } from "react";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { MediaFrame } from "@/components/MediaFrame/MediaFrame";
import "./intro.desktop.css";
import "./intro.mobile.css";

export const Intro = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { intro } = dictionary;

  return (
    <section className="intro">
      <Reveal className="lbl intro__years">{intro.years}</Reveal>
      <Reveal as="p" className="intro__big">
        {intro.bigBefore}
        <em>{intro.bigEm}</em>
        {intro.bigAfter}
      </Reveal>
      <Reveal as="p" className="intro__small">
        {intro.small}
      </Reveal>
      <MediaFrame
        className="intro__tiny"
        src={MEDIA.intro.src}
        alt={intro.imageLabel}
        type={MEDIA.intro.type}
      />
    </section>
  );
};

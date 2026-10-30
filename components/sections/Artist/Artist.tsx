"use client";

import type { JSX } from "react";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { MediaFrame } from "@/components/MediaFrame/MediaFrame";
import "./artist.desktop.css";
import "./artist.mobile.css";

export const Artist = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { artist } = dictionary;

  return (
    <section className="artist" id="about">
      <MediaFrame
        className="artist__portrait"
        src={MEDIA.artist.src}
        alt={artist.imageLabel}
        type={MEDIA.artist.type}
      />
      <div className="artist__txt">
        <p className="lbl">{artist.label}</p>
        <Reveal as="h2">
          {artist.titleBefore}
          <em>{artist.titleEm}</em>
        </Reveal>
        <Reveal as="p">{artist.p1}</Reveal>
        <Reveal as="p">{artist.p2}</Reveal>
        <p className="artist__sig">{artist.signature}</p>
      </div>
    </section>
  );
};

"use client";

import Image from "next/image";
import type { JSX } from "react";
import { Reveal } from "@/components/Reveal/Reveal";
import "./media-frame.css";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  type?: "image" | "video";
  priority?: boolean;
  reveal?: boolean;
  label?: string;
};

export const MediaFrame = ({
  src,
  alt,
  className = "",
  type,
  priority = false,
  reveal = true,
  label,
}: MediaFrameProps): JSX.Element => {
  const mediaType = type ?? (src.endsWith(".mp4") ? "video" : "image");
  const frameClass = `ph media-frame ${className}`.trim();

  const content = (
    <>
      {mediaType === "video" ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 90vw, 45vw"
          priority={priority}
        />
      )}
      {label ? <span className="media-frame__label">{label}</span> : null}
    </>
  );

  if (!reveal) {
    return <div className={frameClass}>{content}</div>;
  }

  return <Reveal className={frameClass}>{content}</Reveal>;
};

"use client";

import Image from "next/image";
import type { JSX } from "react";
import { Reveal } from "@/components/Reveal/Reveal";
import "./media-frame.css";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  type?: "image";
  priority?: boolean;
  reveal?: boolean;
  label?: string;
};

export const MediaFrame = ({
  src,
  alt,
  className = "",
  priority = false,
  reveal = true,
  label,
}: MediaFrameProps): JSX.Element => {
  const frameClass = `ph media-frame ${className}`.trim();

  const content = (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 48vw, 45vw"
        priority={priority}
      />
      {label ? <span className="media-frame__label">{label}</span> : null}
    </>
  );

  if (!reveal) {
    return <div className={frameClass}>{content}</div>;
  }

  return <Reveal className={frameClass}>{content}</Reveal>;
};

export type MediaAsset = {
  src: string;
  altKey: string;
  type: "image" | "video";
};

export const MEDIA = {
  hero: {
    src: "/assets/french-tip-nails.jpg",
    altKey: "hero.imageLabel",
    type: "image",
  },
  intro: {
    src: "/assets/powderbrows.jpg",
    altKey: "intro.imageLabel",
    type: "image",
  },
  artist: {
    src: "/assets/lashes.mp4",
    altKey: "artist.imageLabel",
    type: "video",
  },
  experience: {
    src: "/assets/powderbrows.mp4",
    altKey: "experience.imageLabel",
    type: "video",
  },
} as const satisfies Record<string, MediaAsset>;

export const PORTFOLIO_MEDIA = [
  {
    id: "m1",
    className: "m1",
    labelKey: "portfolio.items.french",
    src: "/assets/turquoise-french-nails.jpg",
    type: "image" as const,
  },
  {
    id: "m2",
    className: "m2",
    labelKey: "portfolio.items.powderBrows",
    src: "/assets/powderbrows.jpg",
    type: "image" as const,
  },
  {
    id: "m3",
    className: "m3",
    labelKey: "portfolio.items.lashes",
    src: "/assets/lashes.mp4",
    type: "video" as const,
  },
  {
    id: "m4",
    className: "m4",
    labelKey: "portfolio.items.powderProcess",
    src: "/assets/powder.mp4",
    type: "video" as const,
  },
  {
    id: "m5",
    className: "m5",
    labelKey: "portfolio.items.freshLashes",
    src: "/assets/fresh-lashes.mp4",
    type: "video" as const,
  },
  {
    id: "m6",
    className: "m6",
    labelKey: "portfolio.items.nailArt",
    src: "/assets/cherry-nails.mp4",
    type: "video" as const,
  },
] as const;

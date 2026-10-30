export type MediaAsset = {
  src: string;
  altKey: string;
  type: "image" | "video";
};

export type PortfolioMediaItem = {
  id: string;
  className: string;
  labelKey: string;
  src: string;
  type: "image" | "video";
  /** Mobile gallery uses photographs only (desktop unchanged). */
  mobileSrc: string;
  mobileLabelKey?: string;
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

export const PORTFOLIO_MEDIA: readonly PortfolioMediaItem[] = [
  {
    id: "m1",
    className: "m1",
    labelKey: "portfolio.items.french",
    src: "/assets/turquoise-french-nails.jpg",
    type: "image",
    mobileSrc: "/assets/turquoise-french-nails.jpg",
  },
  {
    id: "m2",
    className: "m2",
    labelKey: "portfolio.items.powderBrows",
    src: "/assets/powderbrows.jpg",
    type: "image",
    mobileSrc: "/assets/powderbrows.jpg",
  },
  {
    id: "m3",
    className: "m3",
    labelKey: "portfolio.items.lashes",
    src: "/assets/lashes.mp4",
    type: "video",
    mobileSrc: "/assets/french-tip-nails.jpg",
    mobileLabelKey: "portfolio.items.frenchTip",
  },
  {
    id: "m4",
    className: "m4",
    labelKey: "portfolio.items.powderProcess",
    src: "/assets/powder.mp4",
    type: "video",
    mobileSrc: "/assets/classic-french-nails.jpg",
    mobileLabelKey: "portfolio.items.classicFrench",
  },
  {
    id: "m5",
    className: "m5",
    labelKey: "portfolio.items.freshLashes",
    src: "/assets/fresh-lashes.mp4",
    type: "video",
    mobileSrc: "/assets/floral-nail-art.jpg",
    mobileLabelKey: "portfolio.items.floral",
  },
  {
    id: "m6",
    className: "m6",
    labelKey: "portfolio.items.nailArt",
    src: "/assets/cherry-nails.mp4",
    type: "video",
    mobileSrc: "/assets/burgundy-nails.jpg",
    mobileLabelKey: "portfolio.items.burgundy",
  },
] as const;

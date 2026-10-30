export type MediaAsset = {
  src: string;
  altKey: string;
  type: "image";
};

export type PortfolioMediaItem = {
  id: string;
  className: string;
  labelKey: string;
  src: string;
  type: "image";
};

/**
 * Section images — never reused in portfolio / work.
 * Hero, Intro, Artist, Experience each get a unique photo.
 */
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
    src: "/assets/mobile-images/powder-brows-portrait.jpg",
    altKey: "artist.imageLabel",
    type: "image",
  },
  experience: {
    src: "/assets/mobile-images/volume-lashes-mirror.jpg",
    altKey: "experience.imageLabel",
    type: "image",
  },
} as const satisfies Record<string, MediaAsset>;

/**
 * Work / portfolio only — images not used in other sections.
 * Same set for mobile and desktop (no videos).
 */
export const PORTFOLIO_MEDIA: readonly PortfolioMediaItem[] = [
  {
    id: "m1",
    className: "m1",
    labelKey: "portfolio.items.french",
    src: "/assets/turquoise-french-nails.jpg",
    type: "image",
  },
  {
    id: "m2",
    className: "m2",
    labelKey: "portfolio.items.burgundy",
    src: "/assets/burgundy-nails.jpg",
    type: "image",
  },
  {
    id: "m3",
    className: "m3",
    labelKey: "portfolio.items.floral",
    src: "/assets/floral-nail-art.jpg",
    type: "image",
  },
  {
    id: "m4",
    className: "m4",
    labelKey: "portfolio.items.classicFrench",
    src: "/assets/classic-french-nails.jpg",
    type: "image",
  },
  {
    id: "m5",
    className: "m5",
    labelKey: "portfolio.items.nudeFrench",
    src: "/assets/mobile-images/nude-french-nails.jpg",
    type: "image",
  },
  {
    id: "m6",
    className: "m6",
    labelKey: "portfolio.items.lashExtensionsEyes",
    src: "/assets/mobile-images/lash-extensions-eyes.jpg",
    type: "image",
  },
  {
    id: "m7",
    className: "m7",
    labelKey: "portfolio.items.lashLiftBefore",
    src: "/assets/mobile-images/lash-lift-before.jpg",
    type: "image",
  },
  {
    id: "m8",
    className: "m8",
    labelKey: "portfolio.items.lashLiftAfter",
    src: "/assets/mobile-images/lash-lift-after.jpg",
    type: "image",
  },
  {
    id: "m9",
    className: "m9",
    labelKey: "portfolio.items.powderBrowsHealed",
    src: "/assets/mobile-images/powder-brows-healed.jpg",
    type: "image",
  },
  {
    id: "m10",
    className: "m10",
    labelKey: "portfolio.items.volumeLashesDetail",
    src: "/assets/mobile-images/volume-lashes-detail.jpg",
    type: "image",
  },
] as const;

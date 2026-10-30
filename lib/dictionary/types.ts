export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    homeAria: string;
    menu: string;
    close: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    academy: string;
    book: string;
  };
  hero: {
    line1: string;
    line2Before: string;
    line2Em: string;
    line2After: string;
    sub: string;
    cta: string;
    imageLabel: string;
    location: string;
  };
  intro: {
    years: string;
    bigBefore: string;
    bigEm: string;
    bigAfter: string;
    small: string;
    imageLabel: string;
  };
  services: {
    label: string;
    titleBefore: string;
    titleEm: string;
    pricesNote: string;
    note: string;
    book: string;
    items: {
      classicManicure: { name: string; description: string };
      gelPolish: { name: string; description: string };
      extensions: { name: string; description: string };
      nailArt: { name: string; description: string };
      infill: { name: string; description: string };
      removal: { name: string; description: string };
    };
  };
  portfolio: {
    label: string;
    titleBefore: string;
    titleEm: string;
    instagram: string;
    items: {
      french: string;
      nude: string;
      gel: string;
      detailed: string;
      creative: string;
      everyday: string;
    };
  };
  artist: {
    label: string;
    titleBefore: string;
    titleEm: string;
    p1: string;
    p2: string;
    signature: string;
    imageLabel: string;
  };
  experience: {
    label: string;
    titleBefore: string;
    titleEm: string;
    imageLabel: string;
    steps: {
      attention: string;
      precision: string;
      artistry: string;
      space: string;
      preferences: string;
    };
  };
  academy: {
    label: string;
    titleBefore: string;
    titleEm: string;
    body: string;
    cta: string;
    ctaAria: string;
  };
  booking: {
    label: string;
    titleBefore: string;
    titleEm: string;
    body: string;
    steps: {
      service: string;
      date: string;
      time: string;
      details: string;
      review: string;
    };
    dateLabel: string;
    dateNote: string;
    name: string;
    contact: string;
    notes: string;
    send: string;
    continue: string;
    back: string;
    copied: string;
    copyFallback: string;
    times: {
      morning: string;
      afternoon: string;
      evening: string;
    };
  };
  contact: {
    label: string;
    titleBefore: string;
    titleEm: string;
    location: string;
    hours: string;
    contact: string;
    instagram: string;
    mapLabel: string;
    mapNote: string;
    book: string;
  };
  footer: {
    navigate: string;
    contact: string;
    book: string;
    copyright: string;
  };
};

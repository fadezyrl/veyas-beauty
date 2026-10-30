export const SITE = {
  brand: "VEYAS",
  brandSub: "BEAUTY",
  location: "Antwerp · Belgium",
  city: "Antwerp, Belgium",
  address: "[Street address], Antwerp, Belgium",
  hours: "[Opening hours — by appointment]",
  email: "[email]",
  phone: "[phone]",
  instagramHandle: "@[handle]",
  instagramUrl: "https://www.instagram.com/",
  instagramDmUrl: "https://ig.me/m/",
  academyUrl: "#",
} as const;

export const PORTFOLIO_ITEMS = [
  { id: "m1", className: "m1", labelKey: "portfolio.items.french" },
  { id: "m2", className: "m2", labelKey: "portfolio.items.nude" },
  { id: "m3", className: "m3", labelKey: "portfolio.items.gel" },
  { id: "m4", className: "m4", labelKey: "portfolio.items.detailed" },
  { id: "m5", className: "m5", labelKey: "portfolio.items.creative" },
  { id: "m6", className: "m6", labelKey: "portfolio.items.everyday" },
] as const;

export const EXPERIENCE_STEPS = [
  { id: "01", labelKey: "experience.steps.attention" },
  { id: "02", labelKey: "experience.steps.precision" },
  { id: "03", labelKey: "experience.steps.artistry" },
  { id: "04", labelKey: "experience.steps.space" },
  { id: "05", labelKey: "experience.steps.preferences" },
] as const;

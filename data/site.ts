export const SITE = {
  brand: "VEYAS",
  brandSub: "NAIL TECH & BEAUTY CREATOR",
  location: "Antwerp · Belgium",
  city: "Antwerp, Belgium",
  address: "Antwerp, Belgium",
  hours: "Tue–Sat · 10:00–18:00 · By appointment",
  email: "hello@veyasbeauty.com",
  phone: "+32 470 00 00 00",
  instagramHandle: "@veyasbeauty",
  instagramUrl: "https://www.instagram.com/veyasbeauty/",
  academyUrl: "https://www.instagram.com/veyas.academy/",
  developerUrl: "https://www.fadezyrl.com/",
  developerName: "fadezy",
  map: {
    lat: 51.2194,
    lng: 4.4025,
    /** South-West / North-East bbox for OpenStreetMap embed */
    bbox: {
      west: 4.372,
      south: 51.204,
      east: 4.433,
      north: 51.235,
    },
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=51.2194%2C4.4025",
} as const;

export { PORTFOLIO_MEDIA as PORTFOLIO_ITEMS } from "./media";

export const EXPERIENCE_STEPS = [
  { id: "01", labelKey: "experience.steps.attention" },
  { id: "02", labelKey: "experience.steps.precision" },
  { id: "03", labelKey: "experience.steps.artistry" },
  { id: "04", labelKey: "experience.steps.space" },
  { id: "05", labelKey: "experience.steps.preferences" },
] as const;

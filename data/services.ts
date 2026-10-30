export type Service = {
  id: string;
  nameKey: string;
  descriptionKey: string;
  duration: string;
  price: string;
};

export const SERVICES: Service[] = [
  {
    id: "classic-manicure",
    nameKey: "services.items.classicManicure.name",
    descriptionKey: "services.items.classicManicure.description",
    duration: "45 min",
    price: "€ —",
  },
  {
    id: "gel-polish",
    nameKey: "services.items.gelPolish.name",
    descriptionKey: "services.items.gelPolish.description",
    duration: "60 min",
    price: "€ —",
  },
  {
    id: "extensions",
    nameKey: "services.items.extensions.name",
    descriptionKey: "services.items.extensions.description",
    duration: "120 min",
    price: "€ —",
  },
  {
    id: "nail-art",
    nameKey: "services.items.nailArt.name",
    descriptionKey: "services.items.nailArt.description",
    duration: "+30 min",
    price: "€ —",
  },
  {
    id: "infill",
    nameKey: "services.items.infill.name",
    descriptionKey: "services.items.infill.description",
    duration: "90 min",
    price: "€ —",
  },
  {
    id: "removal",
    nameKey: "services.items.removal.name",
    descriptionKey: "services.items.removal.description",
    duration: "30 min",
    price: "€ —",
  },
];

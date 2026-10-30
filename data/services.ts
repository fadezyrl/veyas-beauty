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
    price: "€35",
  },
  {
    id: "gel-polish",
    nameKey: "services.items.gelPolish.name",
    descriptionKey: "services.items.gelPolish.description",
    duration: "60 min",
    price: "€45",
  },
  {
    id: "extensions",
    nameKey: "services.items.extensions.name",
    descriptionKey: "services.items.extensions.description",
    duration: "120 min",
    price: "€75",
  },
  {
    id: "nail-art",
    nameKey: "services.items.nailArt.name",
    descriptionKey: "services.items.nailArt.description",
    duration: "+30 min",
    price: "from €15",
  },
  {
    id: "infill",
    nameKey: "services.items.infill.name",
    descriptionKey: "services.items.infill.description",
    duration: "90 min",
    price: "€55",
  },
  {
    id: "removal",
    nameKey: "services.items.removal.name",
    descriptionKey: "services.items.removal.description",
    duration: "30 min",
    price: "€25",
  },
  {
    id: "lash-extensions",
    nameKey: "services.items.lashExtensions.name",
    descriptionKey: "services.items.lashExtensions.description",
    duration: "120 min",
    price: "€75",
  },
  {
    id: "lash-refill",
    nameKey: "services.items.lashRefill.name",
    descriptionKey: "services.items.lashRefill.description",
    duration: "60 min",
    price: "€45",
  },
  {
    id: "powder-brows",
    nameKey: "services.items.powderBrows.name",
    descriptionKey: "services.items.powderBrows.description",
    duration: "150 min",
    price: "€250",
  },
];

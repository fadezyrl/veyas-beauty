import { SITE } from "@/data/site";

export const getWhatsAppDigits = (): string => {
  return SITE.phone.replace(/\D/g, "");
};

export const buildWhatsAppUrl = (message: string): string => {
  const phone = getWhatsAppDigits();
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const fillServiceMessage = (
  template: string,
  serviceName: string,
): string => {
  return template.replaceAll("{service}", serviceName);
};

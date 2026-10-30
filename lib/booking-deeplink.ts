export const BOOK_SERVICE_EVENT = "veyas:book-service";

export type BookServiceDetail = {
  serviceId: string;
};

export const getServiceIdFromLocation = (): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("service");
  if (fromQuery) {
    return fromQuery;
  }

  const hash = window.location.hash;
  const queryIndex = hash.indexOf("?");
  if (queryIndex === -1) {
    return null;
  }

  const hashParams = new URLSearchParams(hash.slice(queryIndex + 1));
  return hashParams.get("service");
};

export const openBookingWithService = (serviceId: string): void => {
  const url = new URL(window.location.href);
  url.searchParams.set("service", serviceId);
  url.hash = "book";
  window.history.pushState({}, "", url);

  window.dispatchEvent(
    new CustomEvent<BookServiceDetail>(BOOK_SERVICE_EVENT, {
      detail: { serviceId },
    }),
  );

  const scrollToBooking = (): void => {
    const target = document.getElementById("book");
    if (!target) {
      return;
    }

    const navOffset = 88;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  window.requestAnimationFrame(scrollToBooking);
  window.setTimeout(scrollToBooking, 50);
};

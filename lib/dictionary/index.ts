import { en } from "./en";
import { nl } from "./nl";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale };

export const dictionaries: Record<Locale, Dictionary> = {
  EN: en,
  NL: nl,
};

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale];
};

type PathValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? PathValue<T[K], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;

export const t = <P extends string>(
  dictionary: Dictionary,
  path: P
): PathValue<Dictionary, P> | string => {
  const parts = path.split(".");
  let current: unknown = dictionary;

  for (const part of parts) {
    if (
      current === null ||
      current === undefined ||
      typeof current !== "object" ||
      !(part in current)
    ) {
      return path;
    }
    current = (current as Record<string, unknown>)[part];
  }

  return typeof current === "string" ? current : path;
};

export const resolvePath = (
  source: Record<string, unknown>,
  path: string
): string => {
  const parts = path.split(".");
  let current: unknown = source;

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

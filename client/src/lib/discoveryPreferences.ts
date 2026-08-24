export type CardDensity = "comfortable" | "compact";

export function resolveCardDensity(value: string | null): CardDensity {
  return value === "compact" ? "compact" : "comfortable";
}

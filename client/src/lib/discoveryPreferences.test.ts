import { describe, expect, it } from "vitest";
import { resolveCardDensity } from "./discoveryPreferences";

describe("resolveCardDensity", () => {
  it("restores the compact setting only when the stored value is valid", () => {
    expect(resolveCardDensity("compact")).toBe("compact");
    expect(resolveCardDensity("comfortable")).toBe("comfortable");
  });

  it("falls back to the readable comfortable density for missing or invalid values", () => {
    expect(resolveCardDensity(null)).toBe("comfortable");
    expect(resolveCardDensity("dense")).toBe("comfortable");
  });
});

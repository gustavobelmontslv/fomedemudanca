import { describe, expect, it } from "vitest";
import { ctaDestination } from "@/content/landing";

describe("Purchase destinations", () => {
  it("sends ordinary purchase CTAs to the offer card", () => {
    expect(ctaDestination()).toBe("#oferta");
  });
  it("sends only the offer-card CTA to checkout", () => {
    expect(ctaDestination(true)).toBe("https://pay.wiapy.com/aDzlIjNqwJNF");
  });
});
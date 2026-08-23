import { describe, expect, it } from "vitest";
import { REWARD_POINTS_PER_REFERRAL_CLICK, rewardSummary, totalReferralClicks } from "./rewards";

describe("EventPulse reward calculations", () => {
  it("uses successful referral clicks when an aggregate click count is available", () => {
    expect(totalReferralClicks({ room: { clicks: 3, trend: { "2026-08-23": { clicks: 1 } } } })).toBe(3);
  });

  it("falls back to daily click data and combines it with mock attendance rewards", () => {
    const summary = rewardSummary({ workshop: { trend: { "2026-08-21": { clicks: 2 }, "2026-08-22": { clicks: 1 } } } });
    expect(summary.referralClicks).toBe(3);
    expect(summary.referralPoints).toBe(3 * REWARD_POINTS_PER_REFERRAL_CLICK);
    expect(summary.attendancePoints).toBeGreaterThan(0);
    expect(summary.total).toBe(summary.attendancePoints + summary.referralPoints);
  });
});

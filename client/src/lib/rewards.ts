export type ReferralRewardSource = {
  clicks?: number;
  trend?: Record<string, { clicks: number }>;
};

export type RewardActivity = {
  id: string;
  label: string;
  date: string;
  points: number;
  detail: string;
};

export const ATTENDANCE_REWARDS: RewardActivity[] = [
  { id: "past-listening-room", label: "The Listening Room", date: "18 Oct 2025", points: 120, detail: "Past-event attendance · mock reward" },
  { id: "past-open-studio", label: "Open Studio Night", date: "04 Sep 2025", points: 90, detail: "Past-event attendance · mock reward" },
];

export const REWARD_POINTS_PER_REFERRAL_CLICK = 25;

export function totalReferralClicks(sources: Record<string, ReferralRewardSource>) {
  return Object.values(sources).reduce((total, source) => {
    if (typeof source.clicks === "number") return total + source.clicks;
    return total + Object.values(source.trend ?? {}).reduce((sum, day) => sum + (day.clicks || 0), 0);
  }, 0);
}

export function rewardSummary(sources: Record<string, ReferralRewardSource>, attendance = ATTENDANCE_REWARDS) {
  const attendancePoints = attendance.reduce((total, activity) => total + activity.points, 0);
  const referralClicks = totalReferralClicks(sources);
  const referralPoints = referralClicks * REWARD_POINTS_PER_REFERRAL_CLICK;
  return {
    attendancePoints,
    referralClicks,
    referralPoints,
    total: attendancePoints + referralPoints,
  };
}

export const ACTIVE_LOCAL_USER_KEY = "eventpulse-active-local-user-v1";

export const getLocalUserId = () => {
  if (typeof window === "undefined") return "guest";
  return localStorage.getItem(ACTIVE_LOCAL_USER_KEY)?.trim().toLowerCase() || "guest";
};

export const scopedKey = (base: string) => `${base}:${getLocalUserId()}`;

export const setLocalUserId = (email: string) => {
  localStorage.setItem(ACTIVE_LOCAL_USER_KEY, email.trim().toLowerCase());
  window.dispatchEvent(new Event("eventpulse:local-user-changed"));
};

export const clearLocalUserId = () => {
  localStorage.removeItem(ACTIVE_LOCAL_USER_KEY);
  window.dispatchEvent(new Event("eventpulse:local-user-changed"));
};

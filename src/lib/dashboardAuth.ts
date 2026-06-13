const AUTH_KEY = "inspired-dashboard-token";

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(AUTH_KEY);
}

export function setAuthToken(token: string): void {
  sessionStorage.setItem(AUTH_KEY, token);
}

export function clearAuthToken(): void {
  sessionStorage.removeItem(AUTH_KEY);
}

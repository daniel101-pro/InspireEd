import { createHmac, timingSafeEqual } from "crypto";

const TOKEN_SALT = "inspired-dashboard-session";

export function createSessionToken(password: string): string {
  return createHmac("sha256", password).update(TOKEN_SALT).digest("hex");
}

export function verifySessionToken(token: string, password: string): boolean {
  const expected = createSessionToken(password);
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function getDashboardPassword(): string | undefined {
  return process.env.DASHBOARD_PASSWORD;
}

export function isAuthorized(authHeader: string | null): boolean {
  const password = getDashboardPassword();
  if (!password) return false;
  if (!authHeader?.startsWith("Bearer ")) return false;
  return verifySessionToken(authHeader.slice(7), password);
}

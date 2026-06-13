import { NextResponse } from "next/server";
import { createSessionToken, getDashboardPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const password = getDashboardPassword();
  if (!password) {
    return NextResponse.json(
      { error: "Dashboard password is not configured on the server." },
      { status: 503 }
    );
  }

  try {
    const { password: submitted } = (await request.json()) as { password?: string };
    if (!submitted || submitted !== password) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    return NextResponse.json({ token: createSessionToken(password) });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import { readContent, writeContent } from "@/lib/contentStore";
import type { DashboardData } from "@/types/dashboard";

export async function GET() {
  const data = await readContent();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  if (!isAuthorized(request.headers.get("authorization"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = (await request.json()) as DashboardData;
    await writeContent(data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid content payload" }, { status: 400 });
  }
}

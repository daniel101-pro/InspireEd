import { NextResponse } from "next/server";
import { submitMentorshipApplication } from "@/lib/submissions";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      type?: "mentor" | "mentee";
      interests?: string;
    };

    if (body.type !== "mentor" && body.type !== "mentee") {
      return NextResponse.json({ error: "Invalid application type" }, { status: 400 });
    }

    await submitMentorshipApplication({
      name: body.name ?? "",
      email: body.email ?? "",
      type: body.type,
      interests: body.interests ?? "",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Submission failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

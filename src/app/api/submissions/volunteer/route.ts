import { NextResponse } from "next/server";
import { submitVolunteerApplication } from "@/lib/submissions";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      fullName?: string;
      email?: string;
      phone?: string;
      roleInterest?: string;
      whyVolunteer?: string;
      availability?: string[];
    };

    await submitVolunteerApplication({
      fullName: body.fullName ?? "",
      email: body.email ?? "",
      phone: body.phone ?? "",
      roleInterest: body.roleInterest ?? "",
      whyVolunteer: body.whyVolunteer ?? "",
      availability: Array.isArray(body.availability) ? body.availability : [],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Submission failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

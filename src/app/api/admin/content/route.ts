import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-session";
import { getSiteContent, saveSiteContent } from "@/lib/content";

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Wymagane logowanie." }, { status: 401 });
  }
  return NextResponse.json(getSiteContent());
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Wymagane logowanie." }, { status: 401 });
  }
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Brak danych." }, { status: 400 });
  return NextResponse.json(saveSiteContent(body));
}

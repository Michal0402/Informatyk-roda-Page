import { NextResponse } from "next/server";
import { adminConfigured, createSessionToken, passwordMatches, sessionCookie } from "@/lib/admin-session";

export async function POST(request: Request) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: "Hasło panelu nie jest ustawione." }, { status: 503 });
  }
  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  if (!body || !passwordMatches(body.password ?? "")) {
    return NextResponse.json({ error: "Nieprawidłowe hasło." }, { status: 401 });
  }
  const cookie = sessionCookie(createSessionToken());
  const response = NextResponse.json({ ok: true });
  response.cookies.set(cookie.name, cookie.value, cookie.options);
  return response;
}

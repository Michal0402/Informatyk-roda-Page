import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "admin_session";

function password() {
  return process.env.ADMIN_PASSWORD ?? "";
}

export function adminConfigured() {
  return password().length >= 8;
}

export function passwordMatches(input: string) {
  const expected = password();
  if (!adminConfigured()) return false;
  const given = Buffer.from(input);
  const wanted = Buffer.from(expected);
  if (given.length !== wanted.length) return false;
  return timingSafeEqual(given, wanted);
}

function sign(payload: string) {
  return createHmac("sha256", password()).update(payload).digest("hex");
}

export function createSessionToken() {
  const payload = `v1.${Date.now() + 1000 * 60 * 60 * 12}`;
  return `${payload}.${sign(payload)}`;
}

export function sessionTokenValid(token: string | undefined) {
  if (!token || !adminConfigured()) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = sign(payload);
  const given = Buffer.from(parts[2]);
  const wanted = Buffer.from(expected);
  if (given.length !== wanted.length || !timingSafeEqual(given, wanted)) return false;
  return Number(parts[1]) > Date.now();
}

export async function isAdmin() {
  const jar = await cookies();
  return sessionTokenValid(jar.get(COOKIE)?.value);
}

export function sessionCookie(token: string) {
  return {
    name: COOKIE,
    value: token,
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    },
  };
}

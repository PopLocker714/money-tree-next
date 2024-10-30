import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string) {
  const { payload } = await jwtVerify<{ email: string; expires: Date }>(input, key, {
    algorithms: ["HS256"],
  });

  return payload;
}

export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) {
    return null;
  }

  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  if (!session) {
    return;
  }

  const parsed = await decrypt(session);
  const expires = new Date(Date.now() + 10 * 1000);
  parsed.expires = expires;
  const res = NextResponse.next();
  // const res = NextResponse.redirect(new URL(redirectUrl, request.url));

  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires,
  });

  return res;
}

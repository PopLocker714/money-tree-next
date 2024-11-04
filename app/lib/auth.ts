import "server-only";

import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import getExpAuthTime from "../utils/getExpAuthTime";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export async function encrypt(payload: JWTPayload, exp: Date) {
  return await new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime(exp)
    .sign(key);
}

export async function decrypt(input: string) {
  try {
    const { payload } = await jwtVerify<{ email: string; expires: Date }>(input, key, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
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

  if (!parsed) {
    request.cookies.clear();
    return;
  }

  const expires = getExpAuthTime();

  parsed.expires = expires;
  const res = NextResponse.next();

  res.cookies.set({
    name: "session",
    value: await encrypt(parsed, expires),
    httpOnly: true,
    expires,
  });

  return res;
}

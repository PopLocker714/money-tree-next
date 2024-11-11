import { NextRequest, NextResponse } from "next/server";
import { decrypt, updateSession } from "../../lib/auth/auth";

export default async function dashboardMiddleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const payload = await decrypt(session);
    if (payload === null) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (payload.email === process.env.ADMIN_EMAIL) {
      return await updateSession(request);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

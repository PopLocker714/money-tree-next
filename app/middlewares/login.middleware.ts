import { NextRequest, NextResponse } from "next/server";

export default function loginMiddleware(request: NextRequest) {
  console.log(request.cookies.get("session")?.value);

  if (request.cookies.get("session")?.value) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

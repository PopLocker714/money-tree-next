import { NextResponse, type NextRequest } from "next/server";
import dashboardMiddleware from "./app/middlewares/dashboardMiddleware";
import loginMiddleware from "./app/middlewares/login.middleware";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/dashboard")) {
    return await dashboardMiddleware(request);

  }

  if (pathname.startsWith("/login")) {
    return loginMiddleware(request);
  }

  return NextResponse.next();
}

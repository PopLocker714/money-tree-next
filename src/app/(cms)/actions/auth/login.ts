"use server";
import { encrypt } from "@/src/lib/auth/auth";
import db from "@/src/lib/db/db";
import { $Users } from "@/src/lib/db/schema";
import { verifyPassword } from "@/src/lib/auth/password";
import getExpAuthTime from "@/src/lib/utils";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(_: { error: string }, fromData: FormData) {
  const email = fromData.get("email");
  const password = fromData.get("password");

  if (!email || !password) {
    return {
      error: "Please fill all fields",
    };
  }

  if (typeof email !== "string" || typeof password !== "string") {
    return {
      error: "Please fill all fields",
    };
  }

  const userData = await db.query.$Users.findFirst({
    where: eq($Users.email, email),
  });

  if (!userData) {
    return {
      error: "Incorrect password or email",
    };
  }

  if (!verifyPassword(password, userData.password_hash, userData.salt)) {
    return {
      error: "Incorrect password or email",
    };
  }

  const expires = getExpAuthTime();

  const session = await encrypt({ email: userData.email, expires }, expires);

  (await cookies()).set("session", session, {
    httpOnly: true,
    expires,
  });

  redirect("/dashboard");
}

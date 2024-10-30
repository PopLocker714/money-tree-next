"use server";
import { cookies } from "next/headers";
import db from "./lib/db/db";
import { users } from "./lib/db/schema";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { verifyPassword } from "./utils/password";
import { encrypt } from "./lib/auth";

export async function login(fromData: FormData) {
  const email = fromData.get("email");
  const password = fromData.get("password");

  if (!email || !password) {
    return;
  }

  if (typeof email !== "string" || typeof password !== "string") {
    return;
  }

  const userData = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!userData) {
    return;
  }

  if (!verifyPassword(password, userData.password_hash, userData.salt)) {
    return;
  }

  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ email: userData.email, expires });

  (await cookies()).set("session", session, {
    httpOnly: true,
    expires,
  });

  redirect("/dashboard");
}

export async function logout() {
  (await cookies()).set("session", "", {
    expires: new Date(0),
  });

  redirect("/login");
}

export const sendRecall = async (fromData: FormData) => {
  const name = fromData.get("name");
  const phone = fromData.get("phone");

  if (!name || !phone) {
    return;
  }

  if (typeof name !== "string" || typeof phone !== "string") {
    return;
  }

  fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN || ""}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: process.env.BOT_CHAT_ID,
      text: `
  Запрос на обратный звонок!
Имя: ${name}
Телефон: ${phone}
        `,
      parse_mode: "HTML",
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  redirect("/");
};

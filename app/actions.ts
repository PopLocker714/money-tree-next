"use server";
import { cookies } from "next/headers";
import db from "./lib/db/db";
import { $Users } from "./lib/db/schema";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { verifyPassword } from "./utils/password";
import { encrypt } from "./lib/auth";
import getExpAuthTime from "./utils/getExpAuthTime";

export async function login(previousState: { error: string }, fromData: FormData) {
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

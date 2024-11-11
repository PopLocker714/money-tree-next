"use server"

import { redirect } from "next/navigation";

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

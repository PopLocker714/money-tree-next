"use server";

import sendTgMessage from "@/src/lib/tg/sendTgMessage";
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

  const text = `
  Запрос на обратный звонок!
Имя: ${name}
Телефон: ${phone}
        `;

  sendTgMessage(text);
  redirect("/");
};

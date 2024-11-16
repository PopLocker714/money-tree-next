import { smtp } from "./smtp";

const sendMail = async ({ subject, to, text }: { to: string; subject: string; text: string }) => {
  try {
    // Определение данных письма
    await smtp.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject: subject || "Новое сообщение",
      text: text || "Нет текста",
      html: `${text || "Нет текста"}`,
    });

    console.log("Письмо успешно отправлено");
    return { message: "Письмо успешно отправлено" };
  } catch (error) {
    console.error("Ошибка при отправке письма:", error);
    return { message: "Ошибка при отправке письма" };
  }
};

export default sendMail;

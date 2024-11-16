import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const data: SMTPTransport.Options = {
  host: process.env.SMTP_HOST || "",
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    // credentials: {
    // user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASSWORD || "",
    // },
  },
};

console.log(JSON.stringify(data, null, 2));

export const smtp = nodemailer.createTransport(data);

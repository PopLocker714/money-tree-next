import nodemailer from "nodemailer";

export const smtp = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    credentials: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
     user: process.env.SMTP_USER,
     pass: process.env.SMTP_PASS,
  },
});

import { conf } from "@/src/config/conf";
import sendMail from "@/src/lib/mail/sendMail";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import AdminOrderPayment from "@/src/lib/mail/templates/AdminOrderPayment";
import sendTgMessage from "@/src/lib/tg/sendTgMessage";

export interface WebhookBody {
  TerminalKey: string;
  OrderId: string;
  Success: boolean;
  Status: "AUTHORIZED" | "CONFIRMED";
  PaymentId: number;
  ErrorCode: string;
  Amount: number;
  CardId: number;
  Pan: string;
  ExpDate: string;
  Token: string;
}

export async function POST(request: NextRequest) {
  const data: WebhookBody = await request.json();
  const config = conf();

  const htmlAdminPaymentEmail = await render(
    AdminOrderPayment({
      amount: data.Amount,
      orderId: data.OrderId,
      paymentId: data.PaymentId,
      pan: data.Pan,
    }),
    {
      pretty: true,
    }
  );

  if (data.Success && data.Status === "CONFIRMED") {
    sendTgMessage(`
<b>Оплаченный заказ на сайте ${config.title}</b>
<b>Сумма:</b> <code>${data.Amount / 100}</code> руб.
<b>Карта:</b> <code>${data.Pan}</code>
<b>Номер оплаты:</b> <code>${data.PaymentId}</code>
#${data.OrderId} #payment
    `);

    sendMail({
      to: process.env.SMTP_TO || "",
      subject: `Оплаченный заказ на сайте ${config.title} #${data.OrderId}`,
      text: htmlAdminPaymentEmail,
    });
  }

  return new Response(undefined, { status: 200, statusText: "OK" });
}

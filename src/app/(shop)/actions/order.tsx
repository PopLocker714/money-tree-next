"use server";
import { z } from "zod";
import { IReturnProductAction } from "../../(cms)/actions/product/types";
import sendTgMessage from "@/src/lib/tg/sendTgMessage";
import sendMail from "@/src/lib/mail/sendMail";
import { ICartItem } from "@/src/components/app/CardContext";
import db from "@/src/lib/db/db";
import { $Products } from "@/src/lib/db/schema";
import { inArray } from "drizzle-orm";
import { render } from "@react-email/components";
import AdminOrder from "@/src/lib/mail/templates/AdminOrder";
import UserOrder from "@/src/lib/mail/templates/UserOrder";
import { costDelivery } from "@/src/lib/data";
import { tkassa } from "@/src/lib/cassa/tkassa";
import { generateRandomString } from "@/src/lib/utils";
import { conf } from "@/src/config/conf";

const orderSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string(),
  address: z.string(),
  products: z.string(),
  comment: z.string().optional(),
  delivery: z.string(),
});

export const order = async (
  _: IReturnProductAction,
  fromData: FormData
): Promise<IReturnProductAction> => {
  const validatedFields = orderSchema.safeParse({
    firstName: fromData.get("firstName"),
    lastName: fromData.get("lastName"),
    phone: fromData.get("phone"),
    email: fromData.get("email"),
    address: fromData.get("address"),
    products: fromData.get("products"),
    comment: fromData.get("comment"),
    delivery: fromData.get("delivery"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      data: {},
      ok: false,
    };
  }

  const productsCart: Record<string, ICartItem> = JSON.parse(
    validatedFields.data.products
  );

  const keys = Object.keys(productsCart);
  const keys2 = keys.map((id) => Number(id));

  const products = await db.query.$Products.findMany({
    where: inArray($Products.id, keys2),
  });

  let total = 0;

  const deliveryData = costDelivery.get(Number(validatedFields.data.delivery));

  const data = {
    products: products.map((product) => {
      const priceTotal =
        (product.price - (product.discount || 0)) *
        productsCart[product.id].quantity;
      total += priceTotal;
      return {
        id: product.id,
        title: product.title,
        sku: product.sku,
        quantity: productsCart[product.id].quantity,
        priceTotal,
        preview: product.previewImage,
      };
    }),
  };

  total += deliveryData?.cost || 0;

  const config = conf();

  const orderId = generateRandomString(16);

  const textTg = `
<b>Новый заказ на сайте ${config.title}</b> &#128276;

Имя: ${validatedFields.data.firstName}
Фамилия: ${validatedFields.data.lastName}
Телефон: <code>${validatedFields.data.phone}</code>
Email: ${validatedFields.data.email}
Адрес доставки: <code>${validatedFields.data.address}</code>
${validatedFields.data.comment && `Примечание: ${validatedFields.data.comment}`}
Вариант доставки: ${deliveryData?.title}

<b>Товары:</b>
${data.products
  .map((product) => {
    return `
<b>${product.title}</b>
Артикул: <code>${product.sku}</code>,
Количество: ${product.quantity}шт,
Цена: ${new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(product.priceTotal)}
`;
  })
  .join("")}
Доставка: ${new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(deliveryData?.cost || 0)}
<b>Итого:</b> ${new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(total)}
#${orderId}
  `;

  const htmlAdmin = await render(
    <AdminOrder
      deliveryVariant={Number(validatedFields.data.delivery)}
      user={validatedFields.data}
      orderId={orderId}
      products={data.products}
      total={total}
    />,
    {
      pretty: true,
    }
  );

  const result = await tkassa.init({
    Amount: total * 100,
    OrderId: orderId.toString(),
    NotificationURL: process.env.TK_NOTIFICATION_URL,
  });

  if (result.Success) {
    const htmlUserEmail = await render(
      <UserOrder
        deliveryVariant={Number(validatedFields.data.delivery)}
        orderId={orderId}
        products={data.products}
        total={total}
        paymentUrl={result.PaymentURL}
      />,
      {
        pretty: true,
      }
    );

    sendTgMessage(textTg);

    sendMail({
      to: validatedFields.data.email,
      subject: `Ваш заказ на сайте ${config.title} #${orderId}`,
      text: htmlUserEmail,
    });

    sendMail({
      to: process.env.SMTP_TO || "",
      subject: `Новый заказ ${config.title} #${orderId}`,
      text: htmlAdmin,
    });
  }

  return {
    error: null,
    data: result,
    ok: true,
  };
};

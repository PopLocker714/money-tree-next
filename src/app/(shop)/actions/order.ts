"use server";
import { z } from "zod";
import { IReturnProductAction } from "../../(cms)/actions/product/types";
import sendTgMessage from "@/src/lib/tg/sendTgMessage";
import sendMail from "@/src/lib/mail/sendMail";
import { ICartItem } from "@/src/components/app/CardContext";
import db from "@/src/lib/db/db";
import { $Products } from "@/src/lib/db/schema";
import { inArray } from "drizzle-orm";

const orderSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string(),
  address: z.string(),
  products: z.string(),
  comment: z.string().optional(),
});

export const order = async (_: IReturnProductAction, fromData: FormData): Promise<IReturnProductAction> => {
  const validatedFields = orderSchema.safeParse({
    firstName: fromData.get("firstName"),
    lastName: fromData.get("lastName"),
    phone: fromData.get("phone"),
    email: fromData.get("email"),
    address: fromData.get("address"),
    products: fromData.get("products"),
    comment: fromData.get("comment"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      data: {},
      ok: false,
    };
  }

  const productsCart: Record<string, ICartItem> = JSON.parse(validatedFields.data.products);

  const keys = Object.keys(productsCart);
  const keys2 = keys.map((id) => Number(id));

  const products = await db.query.$Products.findMany({
    where: inArray($Products.id, keys2),
  });

  let total = 0;

  products.forEach((product) => {
    total += (product.price - (product.discount || 0)) * productsCart[product.id].quantity;
  });

  const data = {
    products: products.map((product) => {
      return {
        title: product.title,
        sku: product.sku,
        quantity: productsCart[product.id].quantity,
        priceTotal: (product.price - (product.discount || 0)) * productsCart[product.id].quantity,
      };
    }),
  };

  const orderId = Math.floor(Math.random() * 1000000);

  const text = `
<b>Новый заказ</b> &#128276;

Имя: ${validatedFields.data.firstName}
Фамилия: ${validatedFields.data.lastName}
Телефон: <code>${validatedFields.data.phone}</code>
Email: ${validatedFields.data.email}
Адрес доставки: <code>${validatedFields.data.address}</code>
${validatedFields.data.comment && `Примечание: ${validatedFields.data.comment}`}

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
    }).format(product.priceTotal)}
`;
  })
  .join("")}
<b>Итого:</b> ${new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(total)}
#${orderId}
  `;

  sendTgMessage(text);

  sendMail({
    to: validatedFields.data.email,
    subject: "Заказ Денежное дерево",
    text,
  });

  return {
    error: null,
    data: { orderId },
    ok: true,
  };
};

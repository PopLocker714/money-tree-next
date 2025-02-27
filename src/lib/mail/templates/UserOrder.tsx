import {
  Button,
  Column,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";
import { costDelivery } from "@/src/lib/data";
import TailwindWrapper from "./TailwindWrapper";
import MailHead from "./MailHead";

interface IUserOrderProps {
  products: {
    sku: string;
    preview: string | null;
    id: number;
    priceTotal: number;
    quantity: number;
    title: string;
  }[];
  total: number;
  orderId: string;
  deliveryVariant: number;
}

export default function UserOrder({
  products,
  total,
  orderId,
  deliveryVariant,
}: IUserOrderProps) {
  const totalFormatted = total.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });

  const host = process.env.HOST || "localhost";
  const port = process.env.PORT || 3000;

  const delivery = costDelivery.get(deliveryVariant);

  return (
    <TailwindWrapper>
      <Html>
        <MailHead />
        <Section className="py-[16px] text-center">
          <Heading
            as="h1"
            className="mb-0 text-[30px] font-semibold leading-[36px]"
          >
            Ваш заказ на сайте Денежное Дерево #{orderId}
          </Heading>
          <Heading
            as="h2"
            className="mb-0 text-[30px] font-semibold leading-[36px]"
          >
            Корзина заказа
          </Heading>
          <Section className="my-[16px] rounded-[8px] border border-solid border-gray-200 p-[16px] pt-0">
            <table className="mb-[16px]" width="100%">
              <tr>
                <th className="border-0 border-b border-solid border-gray-200 py-[8px]">
                  &nbsp;
                </th>
                <th
                  align="left"
                  className="border-0 border-b border-solid border-gray-200 py-[8px] text-gray-500"
                  colSpan={6}
                >
                  <Text className="font-semibold">Товар</Text>
                </th>
                <th
                  align="center"
                  className="border-0 border-b border-solid border-gray-200 py-[8px] text-gray-500"
                >
                  <Text className="font-semibold">Артикул</Text>
                </th>
                <th
                  align="center"
                  className="border-0 border-b border-solid border-gray-200 py-[8px] text-gray-500"
                >
                  <Text className="font-semibold">Количество</Text>
                </th>
                <th
                  align="center"
                  className="border-0 border-b border-solid border-gray-200 py-[8px] text-gray-500"
                >
                  <Text className="font-semibold">Цена</Text>
                </th>
              </tr>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td className="border-0 border-b border-solid border-gray-200 py-[8px]">
                      <Img
                        alt={product.title}
                        className="rounded-[8px] object-cover"
                        height={110}
                        src={product.preview || ""}
                      />
                    </td>
                    <td
                      align="left"
                      className="border-0 border-b border-solid border-gray-200 py-[8px]"
                      colSpan={6}
                    >
                      <Text>{product.title}</Text>
                    </td>
                    <td
                      align="center"
                      className="border-0 border-b border-solid border-gray-200 py-[8px]"
                    >
                      <Text>{product.sku}</Text>
                    </td>
                    <td
                      align="center"
                      className="border-0 border-b border-solid border-gray-200 py-[8px]"
                    >
                      <Text>{product.quantity}</Text>
                    </td>
                    <td
                      align="center"
                      className="border-0 border-b border-solid border-gray-200 py-[8px]"
                    >
                      <Text>
                        {product.priceTotal.toLocaleString("ru-RU", {
                          style: "currency",
                          currency: "RUB",
                          maximumFractionDigits: 0,
                        })}
                      </Text>
                    </td>
                  </tr>
                );
              })}
            </table>
            <Row>
              <Column align="center">
                <Text className="mb-3 text-gray-500">
                  Доставка:{" "}
                  {delivery?.cost?.toLocaleString("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                    maximumFractionDigits: 0,
                  })}
                </Text>
                <Text className="mb-[16px] text-gray-500">
                  Итого: <span className="font-semibold">{totalFormatted}</span>
                </Text>
                <Text className="mb-[16px] text-gray-500">
                  Про условия оплаты читайте{" "}
                  <Link
                    className="text-indigo-600"
                    href={
                      host === "localhost"
                        ? `http://${host}:${port}/payment`
                        : `https://${host}/payment`
                    }
                  >
                    здесь
                  </Link>
                </Text>
                <Text className="mb-[16px] text-gray-500">
                  Про условия доставки читайте{" "}
                  <Link
                    className="text-indigo-600"
                    href={
                      host === "localhost"
                        ? `http://${host}:${port}/order`
                        : `https://${host}/order`
                    }
                  >
                    здесь
                  </Link>
                </Text>
                <Button
                  className="box-border w-full rounded-[8px] bg-indigo-600 px-[12px] py-[12px] text-center font-semibold text-white"
                  href={
                    host === "localhost"
                      ? `http://${host}:${port}`
                      : `https://${host}`
                  }
                >
                  На главную
                </Button>
              </Column>
            </Row>
          </Section>
        </Section>
      </Html>
    </TailwindWrapper>
  );
}

import { Button, Heading, Html, Section, Text } from "@react-email/components";
import React from "react";
import TailwindWrapper from "./TailwindWrapper";
import MailHead from "./MailHead";
import { conf } from "@/src/config/conf";

interface IAdminOrderPaymentProps {
  amount: number;
  orderId: string;
  paymentId: number;
  pan: string;
}

export default function AdminOrderPayment({
  orderId,
  amount,
  paymentId,
  pan,
}: IAdminOrderPaymentProps) {
  const host = process.env.HOST || "localhost";
  const port = process.env.PORT || 3000;

  const config = conf();

  return (
    <TailwindWrapper>
      <Html>
        <MailHead />
        <Section className="py-[16px] text-center">
          <Heading
            as="h1"
            className="mb-0 text-[30px] font-semibold leading-[36px]"
          >
            Новый оплаченный заказ ${config.title} #{orderId}
          </Heading>
          <Section>
            <Text className="my-[16px] text-2xl text-gray-600">
              Номер заказа: {orderId}
            </Text>
            <Text className="my-[16px] text-2xl text-gray-600">
              Сумма:{" "}
              {(amount / 100).toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 0,
              })}
            </Text>
            <Text className="my-[16px] text-2xl text-gray-600">
              Номер карты: {pan}
            </Text>
            <Text className="my-[16px] text-2xl text-gray-600">
              Номер платежа: {paymentId}
            </Text>
          </Section>
          <Button
            className="box-border w-full rounded-[8px] bg-indigo-600 px-[12px] py-[12px] text-center font-semibold text-white"
            href={
              host === "localhost"
                ? `http://${host}:${port}/dashboard`
                : `https://${host}/dashboard`
            }
          >
            В админку
          </Button>
        </Section>
      </Html>
    </TailwindWrapper>
  );
}

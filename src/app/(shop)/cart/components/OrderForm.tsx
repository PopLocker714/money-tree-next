"use client";
import Input from "@/src/components/app/ui/components/input/Input";
import { useActionState, useEffect } from "react";
import { IReturnProductAction } from "@/src/app/(cms)/actions/product/types";
import Textarea from "@/src/components/app/ui/components/input/Textarea";
import { useCart } from "@/src/components/app/CardContext";
import { order } from "../../actions/order";
import { costDelivery } from "@/src/lib/data";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function OrderForm() {
  const {
    cart,
    setCart,
    total,
    setTotal,
    prevDeliveryCost,
    setPrevDeliveryCost,
    setDeliveryCost,
  } = useCart();
  const [state, action, pending] = useActionState(order, {
    data: {},
    ok: true,
    error: null,
  } as IReturnProductAction);
  const isEmpty = Object.keys(cart).length === 0;
  const orderId = state.data?.orderId;
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cost = costDelivery.get(Number(e.target.value))?.cost || 0;
    setDeliveryCost(cost);
    setTotal(total + cost - prevDeliveryCost);
    setPrevDeliveryCost(cost);
  };

  useEffect(() => {
    if (state.data?.Success) {
      setCart({});
      router.push(state.data.PaymentURL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data?.Success]);

  if (state.data.Success) {
    // router.push(state.data.PaymentURL);

    return (
      <div>
        {/* <p className="text-green-600">
          Ваш заказ успешно оформлен. Номер вашего заказа: <span className="font-bold">{orderId}</span> сохраните его для уточнения статуса
        </p> */}
        <h2 className="text-2xl font-medium">Запрос на оплату создан!</h2>

        <Link
          className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
          href={state.data.PaymentURL}
        >
          Оплатить
        </Link>
      </div>
    );
  }
  if (state.data?.ErrorCode) {
    return (
      <div>
        <h2>Похоже произошла непредвиденная ошибка</h2>
        <p>ERROR CODE: {state.data?.ErrorCode}</p>
        <p>ERROR MESSAGE: {state.data?.Message}</p>
      </div>
    );
    // }
  }

  return (
    !isEmpty && (
      <form className="flex flex-col" action={action}>
        <div className="flex">
          <div className="flex flex-col max-w-[400px] flex-1">
            <input
              type="hidden"
              name="products"
              value={localStorage.getItem("cart") || ""}
            />
            <Input
              label="Имя"
              type="text"
              name="firstName"
              id="firstName"
              required
            />
            <Input
              label="Фамилия"
              type="text"
              name="lastName"
              id="lastName"
              required
            />
            <Input
              label="Телефон"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Телефон"
              required
            />
            <Input
              label="Электронная почта"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <Input
              label="Адрес"
              type="text"
              name="address"
              id="address"
              placeholder="Москва, ул. Пушкина, д. 1"
              required
            />
            <Textarea
              label="Комментарий"
              name="comment"
              id="comment"
              placeholder="Примечание к заказу"
            />
          </div>
          <div className="flex flex-col flex-1 pl-4">
            <h2 className="h2 mb-4">Доставка</h2>
            {Array.from(costDelivery).map(([key, item]) => (
              <Input
                defaultChecked={key === 1}
                key={key}
                onChange={onChange}
                value={key}
                id={`delivery-${key}`}
                name="delivery"
                label={item.title}
                type="radio"
              />
            ))}
          </div>
        </div>

        <div>
          <Input
            required
            label='Нажимая "Оформить", вы соглашаетесь с политикой конфиденциальности'
            type="checkbox"
            name="privacy"
            id="privacy"
          />
        </div>
        <button
          disabled={pending}
          className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
          type="submit"
        >
          Оформить
        </button>
      </form>
    )
  );
}

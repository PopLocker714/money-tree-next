"use client";
import Input from "@/src/components/app/ui/components/input/Input";
import { order } from "../../actions/order";
import { useActionState } from "react";
import { IReturnProductAction } from "@/src/app/(cms)/actions/product/types";
import Textarea from "@/src/components/app/ui/components/input/Textarea";
import { useCart } from "@/src/components/app/CardContext";

export default function OrderForm() {
  const { cart, setCart} = useCart();
  const [state, action, pending] = useActionState(order, { data: {}, ok: true, error: null } as IReturnProductAction);
  const isEmpty = Object.keys(cart).length === 0;
  const orderId = state.data?.orderId;

  if (orderId) {
    setCart({});
    return (
      <div>
        <p className="text-green-600">
          Ваш заказ успешно оформлен. Номер вашего заказа: <span className="font-bold">{orderId}</span>сохраните его для уточнения статуса
        </p>
      </div>
    );
  }

  return (
    !isEmpty && (
      <form className="flex flex-col max-w-[400px]" action={action}>
        <input type="hidden" name="products" value={localStorage.getItem("cart") || ""} />
        <Input label="Имя" type="text" name="firstName" id="firstName" required />
        <Input label="Фамилия" type="text" name="lastName" id="lastName" required />
        <Input label="Телефон" type="tel" name="phone" id="phone" placeholder="Телефон" required />
        <Input label="Электронная почта" type="email" name="email" id="email" placeholder="Email" required />
        <Input label="Адрес" type="text" name="address" id="address" placeholder="Москва, ул. Пушкина, д. 1" required />
        <Textarea label="Комментарий" name="comment" id="comment" placeholder="Примечание к заказу" />
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

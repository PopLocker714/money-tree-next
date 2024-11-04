"use client";
import { useActionState } from "react";
import { login } from "../actions";
import Input from "../ui/components/input/Input";

export default function Login() {
  const [state, formActon, pending] = useActionState(login, { error: "" });

  return (
    <>
      <section className="container my-9">
        <form className="flex flex-col max-w-[400px]" action={formActon}>
          {/* <label htmlFor="email">Адрес электронной почты</label> */}
          <Input showRequired={false} label="Адрес электронной почты" type="email" name="email" id="email" placeholder="Email" required />
          {/* <label htmlFor="password">Пароль</label> */}
          <Input showRequired={false} label="Пароль" type="password" name="password" id="password" placeholder="Password" required />
          <p>{state.error}</p>
          <button
            disabled={pending}
            className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
            type="submit"
          >
            Войти
          </button>
        </form>
      </section>
    </>
  );
}

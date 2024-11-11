"use client";
import { useActionState } from "react";
import { login } from "../actions/auth/login";

export default function Login() {
  const [state, formActon, pending] = useActionState(login, { error: "" });

  return (
    <section className="h-screen flex justify-center items-center">
      <form className="flex flex-col max-w-[400px] w-full" action={formActon}>
        <div className="form-floating mb-3">
          <input required name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Адрес электронной почты</label>
        </div>
        <div className="form-floating mb-3">
          <input required name="password" type="password" className="form-control" id="floatingPassword" placeholder="Пароль" />
          <label htmlFor="floatingPassword">Пароль</label>
        </div>
        <p>{state.error}</p>
        <button disabled={pending} className="btn btn-primary" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

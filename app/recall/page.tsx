import { Metadata } from "next";
import { sendRecall } from "../actions";

export const metadata: Metadata = {
  title: "Обратный звонок",
  description: "",
};

export default function Recall() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-medium mb-7">Оставьте заявку и мы перезвоним</h1>

      <form className="flex flex-col max-w-[400px]" action={sendRecall}>
        <label className="mb-2" htmlFor="name">
          Ваше имя
        </label>
        <input
          className="bg-gray-100 rounded-2xl py-4 px-6 text-base border-none mb-4 hover:bg-gray-200 focus:bg-gray-200"
          id="name"
          name="name"
          type="text"
          placeholder="Андрей"
        />
        <label className="mb-2" htmlFor="phone">
          Ваш телефон
        </label>
        <input
          className="bg-gray-100 rounded-2xl py-4 px-6 text-base border-none mb-4 hover:bg-gray-200 focus:bg-gray-200"
          id="phone"
          name="phone"
          type="text"
          placeholder="Ваш телефон"
        />
        <div>
          <input type="checkbox" id="privacy" name="privacy" value="privacy" />
          <label className="ml-1 text-sm" htmlFor="privacy">
            Нажимая &quot;Отправить&quot;, вы соглашаетесь с политикой конфиденциальности
          </label>
        </div>
        <button className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white hover:bg-orange-500" type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
}

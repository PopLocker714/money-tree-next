import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты",
};

export default async function Contacts() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-medium mb-7">Контакты</h1>

      <h2 className="text-2xl font-medium mb-3">Санкт-Петербург</h2>
      <p className="mb-4">6й верхнйи переулок, 12Б, Санкт-Петербург</p>
      <h2 className="text-2xl font-medium mb-3">Москва</h2>
      <p className="mb-4">16я парковая, 4а</p>
      <h2 className="text-2xl font-medium mb-3">Воронеж</h2>
      <p className="mb-4">ул.генерала Перховича. 31Б</p>
      <h2 className="text-2xl font-medium mb-3">Нижний Новгород</h2>
      <p className="mb-4">ул.Ларина, 25 корп 10</p>
      <h2 className="text-2xl font-medium mb-3">Краснодар</h2>
      <p className="mb-4">ул.Уральская, 214А</p>
      <h2 className="text-2xl font-medium mb-3">Самара</h2>
      <p className="mb-4">Фрунзе, 94</p>
      <h2 className="text-2xl font-medium mb-3">Казань</h2>
      <p className="mb-4">ул.Аделя Кутуя, 150а</p>
      <h2 className="text-2xl font-medium mb-3">Екатеринбург</h2>
      <p className="mb-4">ул.Крылова 4д</p>
      <h2 className="text-2xl font-medium mb-3">Саратов</h2>
      <p className="mb-4">усть-Курдюмское шоссе, 27/1</p>
    </section>
  );
}

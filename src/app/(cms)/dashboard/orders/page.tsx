import { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Orders Dashboard",
  description: "",
};

export default async function Orders() {
  await connection();
  return (
    <div className="my-6">
      <h1 className="h3 mb-4">Заказы</h1>
      Здесь пока пусто
    </div>
  );
}

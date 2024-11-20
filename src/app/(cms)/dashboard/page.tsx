import db from "@/src/lib/db/db";
import { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default async function Dashboard() {
  await connection();
  const productsLength = (await db.query.$Products.findMany()).length;
  return (
    <div className="my-6">
      <h1 className="h3 mb-4">Главная</h1>
      <div className="row">
        <div className="col-6 col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Количество товаров</h5>
              <p className="card-text">{productsLength}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

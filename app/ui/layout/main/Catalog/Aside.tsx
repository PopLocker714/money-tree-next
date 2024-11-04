import React from "react";
import { getCategory } from "../../../../dashboard/actions";
import AsideCategories from "./AsideCategories";

export default async function Aside() {
  const categories = await getCategory();

  return (
    <aside className="py-4">
      <AsideCategories items={categories} />
    </aside>
  );
}

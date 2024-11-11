import React from "react";
import AsideCategories from "./AsideCategories";
import { getCategory } from "@/src/app/(shop)/actions/getCategoryTree";

export default async function Aside() {
  const categories = await getCategory();

  return (
    <aside className="py-4">
      <AsideCategories items={categories} />
    </aside>
  );
}

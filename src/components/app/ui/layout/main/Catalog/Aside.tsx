import React from "react";
import AsideCategories from "./AsideCategories";
import { getCategoryTree } from "@/src/app/(shop)/actions/getCategoryTree";

export default async function Aside() {
  const categories = await getCategoryTree();

  return (
    <aside className="py-4">
      <AsideCategories items={categories} />
    </aside>
  );
}

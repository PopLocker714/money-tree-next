import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import React from "react";
import CategoryMenuItem from "./CategoryMenuItem";

function CategoryMenu({ categories }: { categories: TCategoryNode[] }) {
  return (
    <ul className="grid grid-cols-4 w-full min-w-[700px] min-h-11 p-4">
      {categories.map((category) => {
        return (
          <CategoryMenuItem
            key={category.id}
            category={category}
            isRoot={true}
          />
        );
      })}
    </ul>
  );
}

export default CategoryMenu;

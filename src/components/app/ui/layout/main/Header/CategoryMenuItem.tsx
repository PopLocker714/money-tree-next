import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import Link from "next/link";
import React from "react";
import { getTreeCategoriesId } from "../Catalog/getTreeCategoriesId";
import clsx from "clsx";
import { NavigationMenuLink } from "@/src/components/ui/navigation-menu";

function CategoryMenuItem({
  category,
  isRoot,
}: {
  category: TCategoryNode;
  isRoot: boolean;
}) {
  return (
    <li
      className={clsx([
        !isRoot ? "pl-4 border-l border-gray-300" : "ml-2",
        // "border rounded-xl transition-colors",
        // isActive && "bg-gray-100 font-medium",
      ])}
    >
      <Link
        href={`/catalog?${new URLSearchParams({
          category: JSON.stringify(getTreeCategoriesId(category)),
        })}`}
        className=""
        legacyBehavior
        passHref
      >
        <NavigationMenuLink>{category.name}</NavigationMenuLink>
      </Link>
      {category.children && category.children.length > 0 && (
        <ul className="ml-4">
          {category.children.map((child) => (
            <CategoryMenuItem key={child.id} category={child} isRoot={false} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default CategoryMenuItem;

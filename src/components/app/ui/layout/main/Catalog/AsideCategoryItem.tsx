"use client";
import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { getTreeCategoriesId } from "./getTreeCategoriesId";

export default function AsideCategoryItem({
  category,
  isRoot,
}: {
  category: TCategoryNode;
  isRoot?: boolean;
}) {
  const searchParams = useSearchParams();
  const categoryData = searchParams.get("category");
  const activeCategories = categoryData ? JSON.parse(categoryData) : [];

  const isActive = activeCategories.includes(category.id);

  return (
    <li
      className={clsx([
        !isRoot ? "pl-4 border-l border-gray-300" : "ml-2",
        "border rounded-xl transition-colors",
        isActive && "bg-gray-100 font-medium",
      ])}
    >
      <Link
        href={`/catalog?${new URLSearchParams({
          category: JSON.stringify(getTreeCategoriesId(category)),
        })}`}
        className="py-2 px-3"
      >
        {category.name}
      </Link>
      {category.children && category.children.length > 0 && (
        <ul className="ml-4">
          {category.children.map((child) => (
            <AsideCategoryItem key={child.id} category={child} isRoot={false} />
          ))}
        </ul>
      )}
    </li>
  );
}

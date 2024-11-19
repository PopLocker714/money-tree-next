import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import Link from "next/link";
import React from "react";

export function getTreeCategoriesId(category: TCategoryNode): number[] {
  const ids = [category.id]; // Добавляем текущую категорию
  if (category.children && category.children.length > 0) {
    for (const child of category.children) {
      ids.push(...getTreeCategoriesId(child)); // Рекурсивно добавляем вложенные категории
    }
  }
  return ids;
}

export default function AsideCategoryItem({ category, isRoot }: { category: TCategoryNode; isRoot?: boolean }) {
  return (
    <li className={!isRoot ? "pl-4 border-l border-gray-300" : "pb-1"}>
      <Link href={`/catalog?${new URLSearchParams({ category: JSON.stringify(getTreeCategoriesId(category)) })}`} className="link">
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

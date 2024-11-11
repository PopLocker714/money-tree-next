import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import Link from "next/link";
import React from "react";

export default function AsideCategoryItem({ category, isRoot }: { category: TCategoryNode; isRoot?: boolean }) {
  return (
    <li className={!isRoot ? "pl-4 border-l border-gray-300" : "pb-1"}>
      <Link href={`/catalog?category=${category.name}`} className="link">
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

    // <li>
    //   <Link href={`/catalog?category=${item.id}`}>{item.name}</Link>
    // </li>
  );
}

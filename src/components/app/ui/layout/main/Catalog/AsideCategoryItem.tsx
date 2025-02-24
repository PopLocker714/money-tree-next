"use client";
import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { getTreeCategoriesId } from "./getTreeCategoriesId";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";
import { cn } from "@/src/lib/utils";

export default function AsideCategoryItem({
  category,
  isRoot,
  rootIsActive,
}: {
  category: TCategoryNode;
  isRoot?: boolean;
  rootIsActive?: boolean;
}) {
  const searchParams = useSearchParams();
  const categoryData = searchParams.get("category");
  const activeCategories: number[] = categoryData
    ? JSON.parse(categoryData)
    : [];

  const isActive = activeCategories.includes(category.id);

  return (
    <HoverCard openDelay={300} closeDelay={100}>
      <HoverCardTrigger
        className={cn(
          "p-1",
          isRoot
            ? "mr-2 mb-2 border border-gray-300 rounded-2xl"
            : "border-b-[1px]",
          isRoot && isActive && "border-orange-600",
          rootIsActive || (isActive && "text-orange-600")
        )}
        asChild
      >
        <Link
          href={`/catalog?${new URLSearchParams({
            category: JSON.stringify(getTreeCategoriesId(category)),
          })}`}
          className="py-1 px-3 text-sm"
        >
          {category.name}
        </Link>
      </HoverCardTrigger>
      {category.children && category.children.length > 0 && (
        <HoverCardContent className="p-0">
          <div className="flex flex-col">
            {category.children.map((child) => (
              <AsideCategoryItem
                key={child.id}
                category={child}
                isRoot={false}
                rootIsActive={isActive}
              />
            ))}
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
}

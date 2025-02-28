import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { getTreeCategoriesId } from "../Catalog/getTreeCategoriesId";
import { NavigationMenuLink } from "@/src/components/ui/navigation-menu";

function CategoryMenu({ categories }: { categories: TCategoryNode[] }) {
  const [activeCategories, setActiveCategories] = useState<TCategoryNode[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (category: TCategoryNode, level: number) => {
    setActiveCategories((prev) => {
      const newActiveCategories = [...prev];
      newActiveCategories[level] = category;
      return newActiveCategories;
    });
  };

  const handleMouseLeave = () => {
    // Задержка перед сбросом activeCategories
    setTimeout(() => {
      if (
        menuRef.current &&
        !menuRef.current.contains(document.activeElement)
      ) {
        setActiveCategories([]);
      }
    }, 100); // Задержка в 100 миллисекунд
  };

  return (
    <div className="flex p-4" ref={menuRef} onMouseLeave={handleMouseLeave}>
      <ul className="">
        {categories.map((category) => (
          <li
            key={category.id}
            onMouseEnter={() => handleMouseEnter(category, 0)}
            className="hover:text-orange-500 transition-colors duration-100"
          >
            <Link
              href={`/catalog?${new URLSearchParams({
                category: JSON.stringify(getTreeCategoriesId(category)),
              })}`}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink>{category.name}</NavigationMenuLink>
            </Link>
          </li>
        ))}
      </ul>
      {activeCategories.map((category, index) => (
        <CategoryColumn
          key={index}
          category={category}
          level={index + 1}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
}

function CategoryColumn({
  category,
  level,
  handleMouseEnter,
}: {
  category: TCategoryNode;
  level: number;
  handleMouseEnter: (category: TCategoryNode, level: number) => void;
}) {
  return (
    <ul className="pl-2">
      {category.children.map((child) => (
        <li
          className="hover:text-orange-500 transition-colors duration-100"
          key={child.id}
          onMouseEnter={() => handleMouseEnter(child, level)}
        >
          <Link
            href={`/catalog?${new URLSearchParams({
              category: JSON.stringify(getTreeCategoriesId(child)),
            })}`}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink>{child.name}</NavigationMenuLink>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryMenu;

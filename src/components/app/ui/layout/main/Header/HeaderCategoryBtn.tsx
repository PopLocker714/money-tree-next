"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";

import React from "react";
import CategoryMenu from "./CategoryMenu";
import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

function HeaderCategoryBtn({ categories }: { categories: TCategoryNode[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-orange-500 hover:text-orange-500">
            <Link href="/catalog" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  // navigationMenuTriggerStyle(),
                  `flex items-center rounded p-1 transition-colors text-orange-500`
                )}
              >
                <svg
                  className="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5C2.5 4.61438 2.5 3.67157 3.08579 3.08579C3.67157 2.5 4.61438 2.5 6.5 2.5C8.38562 2.5 9.32843 2.5 9.91421 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5C10.5 8.38562 10.5 9.32843 9.91421 9.91421C9.32843 10.5 8.38562 10.5 6.5 10.5C4.61438 10.5 3.67157 10.5 3.08579 9.91421C2.5 9.32843 2.5 8.38562 2.5 6.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M13.5 17.5C13.5 15.6144 13.5 14.6716 14.0858 14.0858C14.6716 13.5 15.6144 13.5 17.5 13.5C19.3856 13.5 20.3284 13.5 20.9142 14.0858C21.5 14.6716 21.5 15.6144 21.5 17.5C21.5 19.3856 21.5 20.3284 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M13.5 6.5C13.5 4.61438 13.5 3.67157 14.0858 3.08579C14.6716 2.5 15.6144 2.5 17.5 2.5C19.3856 2.5 20.3284 2.5 20.9142 3.08579C21.5 3.67157 21.5 4.61438 21.5 6.5C21.5 8.38562 21.5 9.32843 20.9142 9.91421C20.3284 10.5 19.3856 10.5 17.5 10.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <span>Каталог</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[700px] w-full">
            {/* <NavigationMenuLink>nice nice nice</NavigationMenuLink> */}
            {/* <CategoryMenuTest categories={categories} /> */}
            <CategoryMenu categories={categories} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  // return (

  // );
}

export default HeaderCategoryBtn;

// "use client";

import Link from "next/link";
import Logo from "../../../components/Logo";
import NavLink from "../NavLink";
import CardCount from "../components/CardCount";
import Whatsapp from "../../../components/Whatsapp";
import { conf } from "@/src/config/conf";
import HeaderCategoryBtn from "./HeaderCategoryBtn";
import { getCategoryTree } from "@/src/app/(shop)/actions/getCategoryTree";

export default async function Header() {
  const categories = await getCategoryTree();
  const config = conf();

  return (
    <header className="container mx-auto">
      {config.name === "money-tree" && (
        <div className="flex justify-between flex-wrap pt-4 pb-2">
          <nav className="flex flex-1 min-w-[280px] max-w-[280px] justify-between">
            <NavLink text="Статьи" href="/" />
            <NavLink text="Доставка" href="/order" />
            <NavLink text="Оплата" href="/payment" />
          </nav>
          <nav className="flex flex-wrap justify-between items-center w-[380px]">
            <NavLink text="Обратный звонок" href="/recall" />

            <span className="bg-gray-300 w-[1px] h-[20px]"></span>

            <a className="text-green-400 font-medium" href="tel:+79001111111">
              +7-900-111-11-11
            </a>

            <span className="bg-gray-300 w-[1px] h-[20px]"></span>

            <Whatsapp />
          </nav>
        </div>
      )}

      <span className="flex bg-gray-100 w-full h-[1px] mb-2"></span>

      <div className="flex justify-between items-center ">
        <nav className="flex items-center justify-between max-w-[320px] w-full">
          <Link href={"/"}>
            <Logo
              style={{
                maxHeight: config.content.logo.height,
                maxWidth: config.content.logo.width,
              }}
              width={config.content.logo.width}
              alt={config.title}
              height={config.content.logo.height}
              src={`/${config.name}/Logo.png`}
            />
          </Link>
          <HeaderCategoryBtn categories={categories} />
        </nav>
        <nav className="flex">
          <Link aria-label="Корзина" href="/cart">
            <svg
              className="text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m2.667 4 .353.118c1.76.586 2.64.88 3.143 1.578.504.698.504 1.626.504 3.481v3.49c0 3.77 0 5.656 1.171 6.828 1.172 1.172 3.057 1.172 6.829 1.172h10.666"
              ></path>
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M10 24a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM22 24a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6.667 8h15.267c2.74 0 4.11 0 4.703.899.592.899.053 2.158-1.027 4.677l-.571 1.333c-.504 1.176-.756 1.764-1.257 2.094-.5.33-1.14.33-2.42.33H6.667"
              ></path>
            </svg>
          </Link>
          <CardCount />
        </nav>
      </div>
    </header>
  );
}

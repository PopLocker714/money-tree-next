"use client";
import Link from "next/link";
import React from "react";
import logout from "../../../actions/auth/logout";
import Image from "next/image";
import AsideItem from "./AsideItem";
import { usePathname } from "next/navigation";
import { ChartBarStacked, Home, Package, PlusCircle, Shrub } from "lucide-react";

export default function Aside() {
  const currentPath = usePathname();
  return (
    <aside className="col-md-3">
      <Link className="flex mt-2 mb-4" target="_blank" href={"/"}>
        <Image src="/Logo.png" alt="Logo" width="172" height="56" />
      </Link>
      <ul className="nav flex-column nav-pills ">
        <AsideItem currentPath={currentPath} href="/dashboard">
          <Home className="mr-2" />
          Главная
        </AsideItem>
        <AsideItem currentPath={currentPath} href="/dashboard/orders">
          <Package className="mr-2" />
          Заказы
        </AsideItem>
        <AsideItem
          subChildren={
            <>
              <AsideItem currentPath={currentPath} href="/dashboard/products/new">
                <PlusCircle className="mr-2" />
                Добавить товар
              </AsideItem>
            </>
          }
          currentPath={currentPath}
          href="/dashboard/products"
        >
          <Shrub className="mr-2" />
          Товары
        </AsideItem>
        <AsideItem currentPath={currentPath} href="/dashboard/categories">
          <ChartBarStacked className="mr-2" />
          Категории
        </AsideItem>
        <li className="nav-item">
          <form action={logout} className="d-flex">
            <button className="btn btn-outline-secondary" type="submit">
              Выйти
            </button>
          </form>
        </li>
      </ul>
    </aside>
  );
}

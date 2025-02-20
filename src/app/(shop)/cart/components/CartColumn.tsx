"use client";
import { ICartProduct } from "@/src/app/api/cart/route";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import UpdateQuantity from "./UpdateQuantity";
import Link from "next/link";

export const CartColumn: ColumnDef<ICartProduct>[] = [
  {
    accessorKey: "previewImage",
    header: () => <div className="text-left">Картинка</div>,
    cell: ({ row }) => {
      const previewImage: string = row.getValue("previewImage");
      return (
        <Link href={`/product/${row.original.id}`}>
          <Image
            className="w-20 h-20 object-cover"
            width={30}
            height={30}
            src={previewImage}
            alt=""
          />
        </Link>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Название",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-center">Цена</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const amount = price - (row.original.discount || 0);
      const formattedPrice = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0,
      }).format(price);
      const formatted = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0,
      }).format(amount);

      return (
        <div className="text-center font-medium">
          {formatted}{" "}
          <span className="text-gray-400 line-through">{formattedPrice}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-center">Количество</div>,
    cell: ({ row }) => {
      // const quantity = parseFloat(row.getValue("quantity"));
      return (
        <div className="flex justify-center">
          <UpdateQuantity
            id={row.original.id.toString()}
            max={row.original.stock}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "priceTotal",
    header: () => <div className="text-right">Итого</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("priceTotal"));
      const formatted = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0,
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

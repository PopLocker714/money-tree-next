"use client";
import { ColumnDef } from "@tanstack/react-table";

export type TProductColumn = {
  id: number;
  title: string;
  sku: string;
  price: number;
  discount: number | null;
};

export const ProductColumn: ColumnDef<TProductColumn>[] = [
  {
    accessorKey: "title",
    header: "Название",
  },
  {
    accessorKey: "sku",
    header: "Артикул",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Цена</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "discount",
    header: () => <div className="text-right">Скидка</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("discount"));
      const formatted = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

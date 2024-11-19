import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IProductCard {
  title: string;
  image: string | null | undefined;
  id: string;
  cost: number | undefined;
  discount: number | null | undefined;
  className?: string;
}

function ProductCard({ cost = 0, discount, id, image, title, className }: IProductCard) {
  return (
    <Link
      // className="relative flex flex-col overflow-hidden max-w-[266px] rounded-3xl shadow-[0px_0px_16px_0_rgba(51,37,87,0.15)]"
      //
      className={clsx(
        "relative flex flex-col overflow-hidden max-w-[266px] rounded-3xl shadow-[0px_0px_16px_0_rgba(51,37,87,0.15)]",
        className
      )}
      href={`/product/${id}`}
      key={id}
    >
      {discount ? (
        <>
          <span className="absolute top-4 right-4 bg-red-500 text-white-100  text-sm font-medium p-[6px] rounded-full">Распродажа</span>
          <span className="absolute top-4 left-4  bg-red-500 text-white-100 text-sm font-medium p-[6px] rounded-full">
            {Math.floor(100 - ((cost - discount) / cost) * 100)}%
          </span>
        </>
      ) : null}
      <Image className="max-w-[266px] max-h-[235px]" alt={title} width={266} height={235} src={image || "https://placehold.co/266x235/000000/FFFFFF/png"} />
      <div className="p-4">
        <h3 className="text-base text-foreground mb-4">{title}</h3>
        {!discount ? (
          <p className="text-foreground flex text-xl w-fit rounded-xl py-3 px-6 bg-gray-100">{cost}₽</p>
        ) : (
          <p className="text-green-400 flex items-center text-xl w-fit rounded-xl py-3 px-6 bg-gray-100 ">
            {cost - discount}₽ <span className="line-through ml-1 text-gray-400 text-xs">{cost}₽</span>
          </p>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProductCard {
  title: string;
  image: string;
  id: string;
  cost: number;
  discount: number;
}

function ProductCard({ cost, discount, id, image, title }: IProductCard) {
  return (
    <Link
      className="relative flex flex-col overflow-hidden max-w-[266px] rounded-3xl shadow-[0px_0px_16px_0_rgba(51,37,87,0.15)]"
      href={`/product/${id}`}
      key={id}
    >
      {discount ? (
        <>
          <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium p-[6px] rounded-full">Распродажа</span>
          <span className="absolute top-4 left-4  bg-red-500 text-white text-sm font-medium p-[6px] rounded-full">
            {Math.floor(100 - ((cost - discount) / cost) * 100)}%
          </span>
        </>
      ) : null}
      <Image alt={title} width={266} height={375} src={image} />
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

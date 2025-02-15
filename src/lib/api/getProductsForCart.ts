import { ICartResponse } from "@/src/app/api/cart/route";
import { ICartItem } from "@/src/components/app/CardContext";

export const getProductsForCart = async (body: Record<string, ICartItem>): Promise<ICartResponse> => {
  const res = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return res;
};

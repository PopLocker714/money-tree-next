"use client";
import { TProductInsert } from "@/src/lib/db/schema";
import { useActionState } from "react";
import Input from "../../../../components/input/Input";
import { deleteProductActon } from "@/src/app/(cms)/actions/product/deleteProduct";
import { IReturnProductAction } from "@/src/app/(cms)/actions/product/types";

export default function DeleteProductForm({ product }: { product: TProductInsert | undefined }) {
  const [state, formAction, pending] = useActionState(deleteProductActon, { data: {}, ok: false, error: null } as IReturnProductAction);

  if (product === undefined) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <form className="flex flex-col max-w-[400px] flex-1 mb-4" action={formAction}>
        <Input hidden label="id" defaultValue={product.id} type="number" name="id" id="id" placeholder="id" required />
        {state.error && <pre>{JSON.stringify(state)}</pre>}
        <button
          disabled={pending}
          className="bg-red-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-red-500 disabled:bg-gray-400"
          type="submit"
        >
          Удалить
        </button>
      </form>
    </>
  );
}

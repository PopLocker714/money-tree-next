"use client";
import { deleteProductActon } from "@/app/dashboard/productActions";
import { TProductInsert } from "@/app/lib/db/schema";
import Input from "@/app/ui/components/input/Input";
import { RunResult } from "better-sqlite3";
import { useActionState } from "react";

export default function DeleteProductForm({ product }: { product: TProductInsert | undefined }) {
  const [state, formAction, pending] = useActionState(deleteProductActon, { error: null, data: {} as RunResult });

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

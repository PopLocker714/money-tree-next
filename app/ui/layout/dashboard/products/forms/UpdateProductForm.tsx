"use client";
import { updateProductActon } from "@/app/dashboard/productActions";
import { TProductInsert } from "@/app/lib/db/schema";
import Input from "@/app/ui/components/input/Input";
import Textarea from "@/app/ui/components/input/Textarea";
import { RunResult } from "better-sqlite3";
import { useActionState } from "react";

export default function UpdateProductForm({ product }: { product: TProductInsert | undefined }) {
  const [state, formAction, pending] = useActionState(updateProductActon, { error: null, data: {} as RunResult });

  if (product === undefined) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <form className="flex flex-col mb-4" action={formAction}>
        <div className="flex w-full justify-between">
          <div className="flex-1 max-w-[400px] mr-4">
            <Input label="Название" defaultValue={product.title} type="text" name="title" id="title" placeholder="Название" required />
            <Textarea
              label="Описание"
              defaultValue={product.description || ""}
              name="description"
              id="description"
              placeholder="Описание"
            />
            <Input label="Артикул" defaultValue={product.sku} type="text" name="sku" id="sku" placeholder="Артикул" required />
            <Input label="Цена" defaultValue={product.price} type="number" name="price" id="price" placeholder="Цена" required />
          </div>
          <div className="flex-1 mr-4">
            <Input label="Скидка" defaultValue={product.discount || 0} type="number" name="discount" id="discount" placeholder="Скидка" />
            <Input label="Наличие" defaultValue={product.stock} type="number" name="stock" id="stock" placeholder="Наличие" required />
            <Input
              label="Категория"
              defaultValue={product.categoryId || ""}
              type="text"
              name="categoryId"
              id="categoryId"
              placeholder="Категория [id]"
            />
            <Input
              label="Ключевые слова"
              defaultValue={product.keywordsSearch || ""}
              type="text"
              name="keywordsSearch"
              id="keywordsSearch"
              placeholder="Ключевые слова"
            />
          </div>
        </div>


        <Input hidden label="id" defaultValue={product.id} type="number" name="id" id="id" placeholder="id" required />
        <Input
          defaultChecked={product.isFeatured || undefined}
          label="Добавить на главный экран"
          type="checkbox"
          name="isFeatured"
          id="isFeatured"
        />

        <Input
          //   checked={product.isActive || false}
          defaultChecked={product.isActive || undefined}
          label="Активировать"
          type="checkbox"
          name="isActive"
          id="isActive"
        />

        {state.error && <pre>{JSON.stringify(state)}</pre>}
        <button
          disabled={pending}
          className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
          type="submit"
        >
          Обновить
        </button>
      </form>
    </>
  );
}

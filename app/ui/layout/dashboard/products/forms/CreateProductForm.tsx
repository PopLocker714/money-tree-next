"use client";
import { createProductActon } from "@/app/dashboard/productActions";
import Input from "@/app/ui/components/input/Input";
import Textarea from "@/app/ui/components/input/Textarea";
import { RunResult } from "better-sqlite3";
import { useActionState } from "react";

export default function CreateProductForm() {
  const [state, createCategoryAction, pending] = useActionState(createProductActon, { error: null, data: {} as RunResult });

  return (
    <>
      <form className="flex flex-col mb-4" action={createCategoryAction}>
        <div className="flex justify-between">
          <div className="flex-1 mr-4">
            <Input type="text" name="title" id="title" placeholder="Название" required />
            <Textarea name="description" id="description" placeholder="Описание" />
            <Input type="text" name="sku" id="sku" placeholder="Артикул" required />
            <Input type="number" name="price" id="price" placeholder="Цена" required />
          </div>
          <div className="flex-1">
            <Input type="number" name="discount" id="discount" placeholder="Скидка" />
            <Input type="number" name="stock" id="stock" placeholder="Наличие" required />
            <Input type="text" name="categoryId" id="categoryId" placeholder="Категория [id]" />
            <Input type="text" name="keywordSearch" id="keywordSearch" placeholder="Ключевые слова" />
          </div>
        </div>

        <Input label="Добавить на главный экран" type="checkbox" name="isFeatured" id="isFeatured" />
        <Input label="Активировать" type="checkbox" name="isActive" id="isActive" />

        {state.error && <pre>{JSON.stringify(state)}</pre>}
        <button
          disabled={pending}
          className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
          type="submit"
        >
          Создать
        </button>
      </form>
    </>
  );
}

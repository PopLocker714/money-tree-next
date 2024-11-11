"use client";
import { TProductInsert } from "@/src/lib/db/schema";
import { useActionState } from "react";
import Input from "../../../../components/input/Input";
import Textarea from "../../../../components/input/Textarea";
import File from "../../../../components/input/File";
import updateProductActon from "@/src/app/(cms)/actions/product/updateProduct";
import { IReturnProductAction } from "@/src/app/(cms)/actions/product/types";

export default function UpdateProductForm({ product }: { product: TProductInsert }) {
  const [state, formAction, pending] = useActionState(updateProductActon, { error: null, data: {} } as IReturnProductAction);
  const images = JSON.parse(product.images || "[]");

  if (images.length < 5) {
    for (let i = images.length; i < 5; i++) {
      images.push(null);
    }
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

        <File label="Превью" keyName="preview" initialValue={product.previewImage} />

        <h2 className="text-2xl mb-1">Галерея</h2>
        <div className="flex flex-wrap">
          {images.map((image: string | null, index: number) => (
            <File key={image + `${index + 1}`} label={`Изображение ${index + 1}`} keyName={`image${index + 1}`} initialValue={image} />
          ))}
        </div>

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

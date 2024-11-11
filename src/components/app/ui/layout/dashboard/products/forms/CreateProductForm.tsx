"use client";
import { useActionState, useEffect } from "react";
import Input from "../../../../components/input/Input";
import Textarea from "../../../../components/input/Textarea";
import File from "../../../../components/input/File";
import createProductActon from "@/src/app/(cms)/actions/product/createProduct";
import { IReturnProductAction } from "@/src/app/(cms)/actions/product/types";

export default function CreateProductForm() {
  const [state, createCategoryAction, pending] = useActionState(createProductActon, {
    error: null,
    ok: false,
    data: {},
  } as IReturnProductAction);

  useEffect(() => {
    if (state.ok) {
      console.log("state", state);
    }
  }, [state]);

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

        {/* <div className="flex flex-col my-4 ">
          <label htmlFor="preview">Превью</label>
          <input onChange={handleFileChange} type="file" name="preview" id="preview" accept="image/*" />
          {preview && <Image src={preview} alt="Preview" width={200} height={200} className="w-[200px] h-[200px] object-cover" />}
        </div> */}
        <File label="Превью" keyName="preview" />

        <h2 className="text-2xl mb-1">Галерея</h2>
        <div className="flex flex-wrap">
          <File label="Изображение 1" keyName="image1" />
          <File label="Изображение 2" keyName="image2" />
          <File label="Изображение 3" keyName="image3" />
          <File label="Изображение 4" keyName="image4" />
          <File label="Изображение 5" keyName="image5" />
        </div>

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

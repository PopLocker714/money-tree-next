"use client";
import { useActionState } from "react";
import { RunResult } from "better-sqlite3";
import Input from "../../../../components/input/Input";
import deleteCategory from "@/src/app/(cms)/actions/category/deleteCategory";

export default function DeleteCategory() {
  const [state, createCategoryAction, pending] = useActionState(deleteCategory, { error: null, data: {} as RunResult });

  return (
    <>
      <form className="flex flex-col max-w-[400px] flex-1" action={createCategoryAction}>
        <Input type="number" name="id" id="parentId" placeholder="Category [id]" />
        {state.error && <pre>{JSON.stringify(state)}</pre>}
        <button
          disabled={pending}
          className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
          type="submit"
        >
          Удалить
        </button>
      </form>
    </>
  );
}

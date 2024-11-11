"use client";
import { useActionState } from "react";
import { RunResult } from "better-sqlite3";
import Input from "../../../../components/input/Input";
import { updateCategory } from "@/src/app/(cms)/actions/category/updateCategory";

export default function UpdateCategory() {
  const [state, createCategoryAction, pending] = useActionState(updateCategory, { error: null, data: {} as RunResult });

  return (
    <>
      <form className="flex flex-col max-w-[400px] flex-1" action={createCategoryAction}>
        <Input type="number" name="id" id="id" placeholder="Category [id]" required />
        <Input type="text" name="name" id="name" placeholder="Name" required />
        <Input type="number" name="parentId" id="parentId" placeholder="Parent [id]" />

        {state.error && <pre>{JSON.stringify(state)}</pre>}
        <button
          disabled={pending}
          className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
          type="submit"
        >
          Изменить
        </button>
      </form>
    </>
  );
}

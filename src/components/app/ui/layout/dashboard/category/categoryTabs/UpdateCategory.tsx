"use client";
import { useActionState, useEffect, useState } from "react";
import { RunResult } from "better-sqlite3";
import Input from "@/src/components/app/ui/components/input/Input";
import Textarea from "@/src/components/app/ui/components/input/Textarea";
import { updateCategory } from "@/src/app/(cms)/actions/category/updateCategory";
import { getCategoryById } from "@/src/lib/categories/getCategoryById";
import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";

const findCategoryRecursive = (
  categories: TCategoryNode[],
  id: number
): TCategoryNode | undefined => {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    const foundInChildren = category.children
      ? findCategoryRecursive(category.children, id)
      : undefined;
    if (foundInChildren) {
      return foundInChildren;
    }
  }
  return undefined;
};

export default function UpdateCategory({
  categories,
}: {
  categories: TCategoryNode[];
}) {
  const [state, createCategoryAction, pending] = useActionState(
    updateCategory,
    { error: null, data: {} as RunResult }
  );

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      const category = findCategoryRecursive(categories, Number(id));
      setName(category?.name || "");
      setParentId(category?.parentId?.toString() || "");
      setContent(category?.content || "");
    }
  }, [id]);

  return (
    <>
      <form
        className="flex flex-col max-w-[400px] flex-1"
        action={createCategoryAction}
      >
        <Input
          onChange={(e) => {
            if (e.target.value) {
            }
            setId(e.target.value);
          }}
          value={id}
          type="number"
          name="id"
          id="id"
          placeholder="Category [id]"
          required
        />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
        <Input
          type="number"
          name="parentId"
          id="parentId"
          value={parentId}
          onChange={(e) => setParentId(e.target.value)}
          placeholder="Parent [id]"
        />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
          id="content"
          placeholder="Content"
        />

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

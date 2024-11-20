import CategoryTree from "./CategoryTree";
import CategoryTabs, { ICategoryTab } from "./CategoryTabs";
import DeleteCategory from "./categoryTabs/DeleteCategory";
import AddCategory from "./categoryTabs/AddCategory";
import UpdateCategory from "./categoryTabs/UpdateCategory";
import { getCategoryTree } from "@/src/app/(shop)/actions/getCategoryTree";

export default async function CategoriesBoard() {
  const categories = await getCategoryTree();

  const tabs: ICategoryTab[] = [
    { id: "0", label: "Добавить", content: <AddCategory /> },
    { id: "1", label: "Удалить", content: <DeleteCategory /> },
    { id: "2", label: "Изменить", content: <UpdateCategory /> },
  ];

  return (
    <section className="py-6">
      <div className="flex">
        <CategoryTree categories={categories} />
        <CategoryTabs tabs={tabs} />
      </div>
    </section>
  );
}

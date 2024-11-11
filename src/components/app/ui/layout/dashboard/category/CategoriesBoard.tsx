import CategoryTree from "./CategoryTree";
import CategoryTabs, { ICategoryTab } from "./CategoryTabs";
import DeleteCategory from "./categoryTabs/DeleteCategory";
import AddCategory from "./categoryTabs/AddCategory";
import UpdateCategory from "./categoryTabs/UpdateCategory";
import { getCategory } from "@/src/app/(shop)/actions/getCategoryTree";

export default async function CategoriesBoard() {
  const categories = await getCategory();

  const tabs: ICategoryTab[] = [
    { id: "0", label: "Добавить", content: <AddCategory /> },
    { id: "1", label: "Удалить", content: <DeleteCategory /> },
    { id: "2", label: "Изменить", content: <UpdateCategory /> },
  ];

  return (
    <section className="container py-6">
      <div className="flex justify-between ">
        <CategoryTree categories={categories} />
        <CategoryTabs tabs={tabs} />
      </div>
    </section>
  );
}

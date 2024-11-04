import { CategoryItem } from "./CategoryItem";
import { TCategoryNode } from "@/app/dashboard/actions";

function CategoryTree({ categories }: { categories: TCategoryNode[] }) {
  return (
    <div className="">
      <h2 className="text-2xl mb-4">Категории</h2>
      <div>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryTree;

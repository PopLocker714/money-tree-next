import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import { CategoryItem } from "./CategoryItem";

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

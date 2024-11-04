import { TCategoryNode } from "@/app/dashboard/actions";

export function CategoryItem({ category }: { category: TCategoryNode }) {
  return (
    <div className="pl-4 border-l border-gray-300">
      <div className="py-2 flex items-center">
        <span className="font-semibold text-gray-700">
          {category.name} [{category.id}]
        </span>
      </div>
      {category.children && category.children.length > 0 && (
        <div className="ml-4">
          {category.children.map((child) => (
            <CategoryItem key={child.id} category={child} />
          ))}
        </div>
      )}
    </div>
  );
}

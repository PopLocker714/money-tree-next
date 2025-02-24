import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import AsideCategoryItem from "./AsideCategoryItem";

export default function AsideCategories({ items }: { items: TCategoryNode[] }) {
  return (
    <div className="flex flex-wrap">
      {items.map((item) => (
        <AsideCategoryItem isRoot={true} key={item.id} category={item} />
      ))}
    </div>
  );
}

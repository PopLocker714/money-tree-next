import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import AsideCategoryItem from "./AsideCategoryItem";

export default function AsideCategories({ items }: { items: TCategoryNode[] }) {
  return (
    <ul className="flex flex-wrap">
      {items.map((item) => (
        <AsideCategoryItem key={item.id} category={item} isRoot={true} />
      ))}
    </ul>
  );
}

import { TCategoryNode } from "@/app/dashboard/actions";
import AsideCategoryItem from "./AsideCategoryItem";

export default function AsideCategories({ items }: { items: TCategoryNode[] }) {
  return (
    <ul className="pr-4">
      {items.map((item) => (
        <AsideCategoryItem key={item.id} category={item} isRoot={true} />
      ))}
    </ul>
  );
}

import db from "../../../lib/db/db";
import { TCategorySelect } from "../../../lib/db/schema";

export type TCategoryNode = TCategorySelect & { children: TCategoryNode[] };

function buildCategoryTree(categories: TCategorySelect[]) {
  const categoryMap: Record<number, TCategoryNode> = {};

  categories.forEach((category) => {
    categoryMap[category.id] = { ...category, children: [] };
  });

  const tree: TCategoryNode[] = [];

  categories.forEach((category) => {
    if (category.parentId === null) {
      tree.push(categoryMap[category.id]);
    } else {
      categoryMap[category.parentId].children.push(categoryMap[category.id]);
    }
  });

  return tree;
}

export const getCategoryTree = async () => {
  const categories = await db.query.$Categories.findMany();
  return buildCategoryTree(categories);
};

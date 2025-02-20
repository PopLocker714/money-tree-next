import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";

export function getTreeCategoriesId(category: TCategoryNode): number[] {
  const ids = [category.id]; // Добавляем текущую категорию
  if (category.children && category.children.length > 0) {
    for (const child of category.children) {
      ids.push(...getTreeCategoriesId(child)); // Рекурсивно добавляем вложенные категории
    }
  }
  return ids;
}

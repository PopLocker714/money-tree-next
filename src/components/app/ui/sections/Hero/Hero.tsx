import { conf } from "@/src/config/conf";
import HeroSwiper, { TSlide } from "./HeroSwiper";
import { TCategoryNode } from "@/src/app/(shop)/actions/getCategoryTree";
import { getTreeCategoriesId } from "../../layout/main/Catalog/getTreeCategoriesId";

export default function Hero({ categories }: { categories: TCategoryNode[] }) {
  const data: TSlide[] = conf().content.hero.slides.map((slide) => {
    const categoryData = categories.find(
      (category) => slide.categoryId === category.id
    );

    return {
      bgColor: slide.bgColor,
      url: categoryData
        ? "/catalog?" +
          new URLSearchParams({
            category: JSON.stringify(getTreeCategoriesId(categoryData)),
          })
        : "/catalog",
      id: slide.categoryId,
      btn: slide.btn,
      title: slide.title,
      subTitle: slide.subTitle,
    };
  });

  return (
    <section className="container my-9">
      <HeroSwiper data={data} />
    </section>
  );
}

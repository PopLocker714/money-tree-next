import { conf } from "@/src/config/conf";
import HeroSwiper, { TSlide } from "./HeroSwiper";
import { ICategoryItem } from "@/src/app/(shop)/page";

export default function Hero({ categories }: { categories: ICategoryItem[] }) {
  const data = conf()
    .content.hero.slides.map((slide, index) => {
      const categoryData = categories.find(
        (item) => slide.categoryId === item.id
      );

      if (categoryData === undefined) {
        return;
      }

      const slideRes: TSlide = { ...slide, url: categoryData.url, id: slide.categoryId };
      return slideRes;
    })
    .filter((item) => item !== undefined);

  return (
    <section className="container my-9">
      <HeroSwiper data={data} />
    </section>
  );
}

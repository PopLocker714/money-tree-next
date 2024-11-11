"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";
import RightArrow from "../../components/slider/RightArrow";
import LeftArrow from "../../components/slider/LeftArrow";
const categories = [
  { title: "Розы", image: "/categories/rouse.png" },
  { title: "Готовые букеты", image: "/categories/buket.png" },
  { title: "Горшки", image: "/categories/pot.png" },
  { title: "Суккулент", image: "/categories/sykylent.png" },
  { title: "Готовые наборы", image: "/categories/nabor.png" },
  { title: "Еще категория", image: "/categories/rouse.png" },
  { title: "Еще категория", image: "/categories/rouse.png" },
];

function CategoriesList() {
  return (
    <section className="container my-9 relative mb-12">
      <Swiper
        className="swiper-categories min-w-full h-[207px]"
        slidesPerView={5}
        spaceBetween={24}
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next__category",
          prevEl: ".swiper-button-prev__category",
        }}
        modules={[Navigation]}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryItem {...category} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev swiper-button-prev__category">
        <RightArrow />
      </button>
      <button className="swiper-button-next swiper-button-next__category">
        <LeftArrow />
      </button>
    </section>
  );
}

export default CategoriesList;

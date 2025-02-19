"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";
import RightArrow from "../../components/slider/RightArrow";
import LeftArrow from "../../components/slider/LeftArrow";

function CategoriesList({ categories }: { categories: { title: string; image: string }[] }) {
  return (
    <section className="container my-9  mb-12">
      <div className="relative">
        <Swiper
          className="swiper-categories min-w-full h-[207px]"
          // slidesPerView={5}
          // spaceBetween={24}
          breakpoints={{
            390: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1087: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
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
      </div>
    </section>
  );
}

export default CategoriesList;

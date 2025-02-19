"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Virtual } from "swiper/modules";
import HeroSlideItem from "./HeroSlideItem";
import RightArrow from "../../components/slider/RightArrow";
import LeftArrow from "../../components/slider/LeftArrow";

type TSlide =
  | {
      title: string;
      subTitle: string;
      btn: string;
      bgColor: string;
    }
  | {
      title: string;
      btn: string;
      bgColor: string;
      subTitle?: undefined;
    };

export default function HeroSwiper({ data }: { data: TSlide[] }) {
  return (
    <Swiper
      // virtual
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={{
        enabled: true,
        nextEl: ".swiper-button-next__hero",
        prevEl: ".swiper-button-prev__hero",
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination__hero",
      }}
      direction="horizontal"
      modules={[Virtual, Navigation, Pagination, Autoplay]}
      className="swiper swiper__hero rounded-xl"
    >
      {data.map((slide, index) => {
        return (
          <SwiperSlide
            key={`slide-${index}`}
            virtualIndex={index}
            className={`${slide.bgColor}`}
          >
            <HeroSlideItem {...slide} />
          </SwiperSlide>
        );
      })}
      <div className="swiper-pagination swiper-pagination__hero"></div>
      <button className="swiper-button-prev swiper-button-prev__hero">
        <RightArrow />
      </button>
      <button className="swiper-button-next swiper-button-next__hero">
        <LeftArrow />
      </button>
    </Swiper>
  );
}

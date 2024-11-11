"use client";
import { TImageItem } from "@/src/app/(cms)/actions/product/types";
import LeftArrow from "@/src/components/app/ui/components/slider/LeftArrow";
import RightArrow from "@/src/components/app/ui/components/slider/RightArrow";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

export default function GalleryProduct({ images }: { images: string }) {
  const imageArray: TImageItem[] = JSON.parse(images);
  return (
    <Swiper
      className="swiper min-w-full h-[500px]"
      navigation={{
        enabled: true,
        nextEl: ".swiper-button-next__product",
        prevEl: ".swiper-button-prev__product",
      }}
      modules={[Navigation]}
      slidesPerView={1}
    >
      {imageArray.map(
        (src, index) =>
          src && (
            <SwiperSlide key={index}>
              <Image width={500} height={500} src={src} alt={`Product image ${index + 1}`} className="w-full h-auto object-cover" />
            </SwiperSlide>
          )
      )}
      <button className="swiper-button-prev swiper-button-prev__product">
        <RightArrow />
      </button>
      <button className="swiper-button-next swiper-button-next__product">
        <LeftArrow />
      </button>
    </Swiper>
  );
}

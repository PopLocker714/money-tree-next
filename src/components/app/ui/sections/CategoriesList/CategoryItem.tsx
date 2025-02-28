import { ICategoryItem } from "@/src/app/(shop)/page";
import Link from "next/link";

const CategoryItem = ({ url, title, image }: ICategoryItem) => {
  return (
    <Link href={url} style={styleItem(image || "")} className="swiper-slide">
      {title}
    </Link>
  );
};

const styleItem = (url: string) => {
  return {
    display: "flex",
    alignItems: "flex-start",
    color: "var(--color-black)",
    padding: "20px",
    borderRadius: "25px",
    backgroundColor: "#F1F6F8",
    backgroundImage: `url(${url})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 100%",
  };
};

export default CategoryItem;

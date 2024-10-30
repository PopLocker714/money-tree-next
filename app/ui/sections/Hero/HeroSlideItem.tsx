import Link from "next/link";

interface IHeroSlideItemProps {
  title: string;
  subTitle?: string;
  btn: string;
}

function HeroSlideItem({ subTitle, title, btn }: IHeroSlideItemProps) {
  return (
    <>
      <div className={`swiper-slide__text-container `}>
        {subTitle && <h2 className="text-green-600 font-medium w-fit text-lg rounded-[30px] p-[12px] m-0 bg-gray-custom">{subTitle}</h2>}
        <h3 className="text-5xl font-semibold mt-4 mb-8">{title}</h3>
        <Link
          className="text-white font-medium text-base inline-flex rounded-full w-fit p-[12px] bg-red-custom shadow-[2px_2px_4px_rgba(0,0,0,0.2)]"
          href="/"
        >
          {btn}
        </Link>
      </div>
    </>
  );
}

export default HeroSlideItem;

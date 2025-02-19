import { conf } from "@/src/config/conf";
import HeroSwiper from "./HeroSwiper";

export default function Hero() {
  return (
    <section className="container my-9">
      <HeroSwiper data={conf().content.hero.slides} />
    </section>
  );
}

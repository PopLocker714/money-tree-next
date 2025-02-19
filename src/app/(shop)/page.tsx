// import CategoriesList from "../../components/app/ui/sections/CategoriesList/CategoriesList";
import CategoriesList from "@/src/components/app/ui/sections/CategoriesList/CategoriesList";
import Hero from "../../components/app/ui/sections/Hero/Hero";
import ProductSell from "../../components/app/ui/sections/ProductSell/ProductSell";
import { conf } from "@/src/config/conf";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesList categories={conf().content.categories.data} />
      <ProductSell />
    </main>
  );
}

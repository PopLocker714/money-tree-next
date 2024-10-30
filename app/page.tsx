import CategoriesList from "./ui/sections/CategoriesList/CategoriesList";
import Hero from "./ui/sections/Hero/Hero";
import ProductSell from "./ui/sections/ProductSell/ProductSell";

console.log(process.env.ADMIN_EMAIL);


export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesList />
      <ProductSell />
    </>
  );
}

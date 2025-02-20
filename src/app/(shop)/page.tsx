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
      <section className="container mt-4">
        <p className="mb-6">
          Купить саженцы – залог будущего сада, воплощение мечты о цветущем
          уголке, дарящем плоды и радость. Выбирайте тщательно, опираясь на
          климатические условия вашего региона, характеристики почвы и личные
          предпочтения. Отдайте предпочтение питомникам с безупречной
          репутацией, где предлагают саженцы с закрытой корневой системой,
          гарантирующие лучшую приживаемость.
        </p>
        <p className="mb-6">
          Обратите внимание на возраст, высоту и общее состояние саженца.
          Здоровое растение имеет развитую корневую систему, крепкий ствол и
          отсутствие признаков болезней или вредителей. Сортируйте сорта,
          учитывая сроки созревания, устойчивость к заболеваниям и урожайность.
        </p>
        <p className="mb-6">
          Помните, что правильный выбор саженца – это первый и самый важный шаг
          к созданию прекрасного сада, который будет радовать вас и ваших
          близких долгие годы. Не торопитесь, изучите информацию,
          проконсультируйтесь со специалистами и сделайте осознанный выбор.
        </p>
      </section>
    </main>
  );
}

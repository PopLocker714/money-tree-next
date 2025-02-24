// import CategoriesList from "../../components/app/ui/sections/CategoriesList/CategoriesList";
import CategoriesList from "@/src/components/app/ui/sections/CategoriesList/CategoriesList";
import Hero from "../../components/app/ui/sections/Hero/Hero";
import ProductSell from "../../components/app/ui/sections/ProductSell/ProductSell";
import { conf } from "@/src/config/conf";
import { getCategoryTree } from "./actions/getCategoryTree";
import { getTreeCategoriesId } from "@/src/components/app/ui/layout/main/Catalog/getTreeCategoriesId";

export default async function Home() {
  // hardcode!!!
  const categories = await getCategoryTree();
  const data = conf().content.categories.data;
  const items = categories.map((category) => {
    if (
      category.id === 2 ||
      category.id === 3 ||
      category.id === 4 ||
      category.id === 5
    ) {
      const itemData = data.find((itm, index) => index + 2 === category.id);
      const url =
        "/catalog?" +
        new URLSearchParams({
          category: JSON.stringify(getTreeCategoriesId(category)),
        });

      return { ...itemData, url };
    }
  }).filter((item) => item !== undefined);;

  // hardcode!!!

  return (
    <main>
      <Hero />
      {<CategoriesList categories={items} />}
      <ProductSell />
      <section className="container mt-4">
        <p className="mb-6">
          Купить саженцы – это ключ к вашему будущему саду, воплощающему мечту о
          зелёном оазисе, где будут созревать плоды и радовать глаз яркие цветы.
          Важно тщательно подойти к выбору, учитывая климатические условия
          вашего региона, особенности почвы и свои личные предпочтения. Лучше
          всего посещать питомники, обладающие безупречной репутацией и
          предлагающие саженцы с закрытой корневой системой, что обеспечит им
          лучшую приживаемость.
        </p>
        <p className="mb-6">
          Следите за возрастом, высотой и общим состоянием саженца. Здоровое
          растение должно иметь хорошо развитую корневую систему, прочный ствол
          и не проявлять никаких признаков заболеваний или повреждений от
          вредителей. Помимо этого, важно сортировать растения, принимая во
          внимание сроки созревания, устойчивость к болезням и ожидаемую
          урожайность.
        </p>
        <p className="mb-6">
          Не забывайте, что выбор правильного саженца – это первый и наиболее
          важный этап на пути к созданию прекрасного сада, который будет
          радовать вас и ваших близких на протяжении многих лет. Не спешите,
          тщательно изучите доступные данные, проконсультируйтесь с
          профессионалами и примите обдуманное решение.
        </p>
      </section>
    </main>
  );
}

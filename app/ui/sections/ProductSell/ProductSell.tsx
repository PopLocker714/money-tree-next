import ProductCard from "./ProductCard";

const products = [
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-1.jpg",
    id: "123412323412",
    cost: 1000,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-2.jpg",
    id: "1298751283",
    cost: 2300,
    discount: 0,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-3.jpg",
    id: "123423029",
    cost: 2300,
    discount: 300,
  },
  {
    title: "Цветкок бромелиевыхв горшке",
    image: "/products/product-4.jpg",
    id: "88888888",
    cost: 2300,
    discount: 0,
  },
];

const ProductSell = () => {
  return (
    <section className="container">
      <h2 className="text-3xl font-medium mb-7">Покупают чаще всего</h2>
      <div className="flex justify-between flex-wrap">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default ProductSell;

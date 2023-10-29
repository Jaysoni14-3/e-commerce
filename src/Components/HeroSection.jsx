import Categories from "./Categories";
import HeroProducts from "./HeroProducts";

const HeroSection = () => {
  const heroProducts = [
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      brand: "Acer",
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      brand: "Samsung",
    },
  ];

  const categoryProducts = [
    {
      id: 11,
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
      id: 8,
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 17,
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
      id: 4,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
  ];

  return (
    <div className="flex gap-4 my-4">
      <HeroProducts heroProducts={heroProducts} />
      <Categories categoryProducts={categoryProducts} />
    </div>
  );
};

export default HeroSection;

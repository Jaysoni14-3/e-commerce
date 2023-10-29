import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useProductsContext } from "../Context";
import HeroSection from "../Components/HeroSection";
import SearchBar from "../Components/SearchBar";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const products = useProductsContext();

  return (
    <div className="home-page flex flex-col max-container">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

      <section className="hero-section ">
        <HeroSection />
      </section>

      <div className="popular-products py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5">
        {products
          .filter((product) => {
            return searchValue.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(searchValue);
          })
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;

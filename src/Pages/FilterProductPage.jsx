import { useLocation, useNavigate } from "react-router-dom";
import { useProductsContext } from "../Context";
import ProductCard from "../Components/ProductCard";
import { useRef } from "react";

const categoryItems = [
  {
    value: "women's clothing",
    name: "Womens clothings",
  },
  {
    value: "men's clothing",
    name: "Mens clothings",
  },
  {
    value: "electronics",
    name: "Electronics",
  },
  {
    value: "jewelery",
    name: "Jewelery",
  },
];

const FilterProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const products = useProductsContext();

  // getting the CATEGORY from url
  let selectedCategory = location.pathname
    .substring(location.pathname.lastIndexOf("/") + 1)
    .replace("%20", " ");

  // set the CATEGORY name to the category ref
  const categoryRef = useRef(selectedCategory);

  // filter the products based on CATEGORY
  const filteredProducts = products.filter(
    (product) => product.category === categoryRef.current
  );

  const handleSelectChange = (e) => {
    // onChange of select change the categoryRef value
    categoryRef.current = e.target.value;
    // setting the CATEGORY name to the url
    navigate(`/product/${categoryRef.current}`);
  };

  return (
    <div className="filtered-product-page max-container mt-4">
      <div className="page-header flex justify-between items-center">
        <h4 className="text-textBlack dark:text-textWhite">
          Results for{" "}
          <strong className="capitalize"> {categoryRef.current}</strong>
        </h4>
        <div className="filter-dropdown">
          <label htmlFor="filter-select">
            <span className="mr-2 text-textBlack dark:text-textWhite">
              Filter
            </span>
            <select
              value={categoryRef.current}
              onChange={handleSelectChange}
              className="p-1 rounded"
              id="filter-select"
            >
              {categoryItems.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="products-container py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FilterProductPage;

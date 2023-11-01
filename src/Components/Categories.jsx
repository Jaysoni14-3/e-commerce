import { Link } from "react-router-dom";

const Categories = ({ categoryProducts }) => {
  return (
    <div className="category w-full md:w-3/12 p-4 ms-auto rounded-sm border bg-gradient-to-br from-neutral-200 from-10% via-neutral-100 via-30% to-white">
      <h4>Latest products</h4>
      <div className="mt-4 category-products-container grid grid-cols-2 gap-4">
        {categoryProducts.map((product) => (
          <Link to={"/product/" + product.category} key={product.id}>
            <figure className="product-image w-full h-16">
              <img
                className="w-full h-full object-contain"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <p className="capitalize select-none mt-2 text-center text-sm">
              {product.category}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

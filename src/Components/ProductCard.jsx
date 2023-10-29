import { LuStar } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product-details/${product.id}`}>
      <article
        className="product-card cursor-pointer bg-white border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg overflow-hidden"
        id={product.id}
      >
        <figure className="product-image h-48 overflow-hidden p-2">
          <img
            className="w-full h-full rounded-md overflow-hidden object-contain"
            src={product.image}
            alt={product.title}
          />
        </figure>
        <div className="product-details flex flex-col items-stretch px-4 pb-2 ">
          <div className="product-name mb-2 h-14">
            <p className="text-neutral-900 dark:text-neutral-100 line-clamp-2">
              {product.title}
            </p>
          </div>

          <div className="rating flex items-center">
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mr-1">
              {product.rating.rate}
            </p>
            <div className="star-icons">
              <LuStar fill="#FFA500" size={20} stroke="0" />
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 ms-1">
              ({product.rating.count})
            </p>
          </div>
          <div className="price flex items-start mt-1.5">
            <span className="text-textBlack dark:text-textWhite">$</span>
            <h4 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {product.price}
            </h4>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;

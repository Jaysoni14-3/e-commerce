import { useParams } from "react-router-dom";
import { LuMinus, LuPlus, LuStar } from "react-icons/lu";
import { useCartContext, useProductsContext } from "../Context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";

const ProductDetails = () => {
  const products = useProductsContext();

  const {
    addToCart,
    productAdded,
    decreaseQuantity,
    increaseQuantity,
  } = useCartContext();

  const { id } = useParams();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [id]);

  const currentProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  const relatedProducts = products.filter(
    (product) => product.category === currentProduct.category
  );

  return (
    <div className="relative">
      <div className="max-container pb-10 mt-4">
        <div id={id} className="flex flex-col sm:flex-row gap-8">
          <div className="image-container max-w-sm">
            <figure className=" w-full mx-auto">
              <img
                className="w-full"
                src={currentProduct.image}
                alt={currentProduct.title}
              />
            </figure>
          </div>
          <div className="text-container w-full">
            <span className="text-sm cursor-default text-yellow-800 dark:text-yellow-800 bg-yellow-200 rounded-full px-2">
              {currentProduct.category}
            </span>
            <div className="product-name">
              <h1 className="text-textBlack dark:text-textWhite text-2xl">
                {currentProduct.title}
              </h1>
            </div>
            <div className="rating flex items-center mt-1">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mr-1">
                {currentProduct.rating.rate}
              </p>
              <div className="star-icons">
                <LuStar fill="#FFA500" size={20} stroke="0" />
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ms-2">
                {currentProduct.rating.count} ratings
              </p>
            </div>
            <hr className="my-2" />
            <div className="price-container flex flex-col items-start mt-1.5">
              <div className="price flex">
                <span className="text-textBlack dark:text-textWhite">$</span>
                <h4 className="text-3xl font-semibold text-neutral-700 dark:text-neutral-300">
                  {currentProduct.price}
                </h4>
              </div>
              <span className="text-textBlack dark:text-textWhite text-sm">
                Inclusive of all taxes
              </span>
            </div>
            <hr className="my-2" />
            <div className="product-description">
              <p className="font-semibold text-textBlack dark:text-textWhite">
                About this item
              </p>
              <p className=" text-textBlack dark:text-textWhite">
                {currentProduct.description}
              </p>
            </div>
            <hr className="my-2" />
            <div className="button-container pt-2">
              {currentProduct.inCart ? (
                <div className="counter flex gap-4">
                  <button
                    onClick={() => decreaseQuantity(currentProduct)}
                    className="flex justify-center items-center bg-gradient-to-tr from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-700 transition-all w-10 h-10 rounded-full text-textWhite"
                  >
                    <LuMinus />
                  </button>
                  <h2 className="text-textBlack dark:text-textWhite">
                    {currentProduct.quantity}
                  </h2>
                  <button
                    onClick={() => increaseQuantity(currentProduct)}
                    className="flex justify-center items-center bg-gradient-to-tr from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-700 transition-all w-10 h-10 rounded-full text-textWhite"
                  >
                    <LuPlus />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(currentProduct)}
                  className="bg-gradient-to-tr from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-700 transition-all px-4 py-2 rounded-full text-textWhite"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="related-products mt-6 mb-4">
          <p className="text-textBlack dark:text-textWhite mb-2">
            You might also like
          </p>
          <div className="related-products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5">
            {relatedProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {productAdded ? <ToastContainer /> : ""}
    </div>
  );
};

export default ProductDetails;

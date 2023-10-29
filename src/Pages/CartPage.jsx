import { ToastContainer } from "react-toastify";
import { useCartContext } from "../Context";
import { LuMinus, LuPlus } from "react-icons/lu";
import ProceedToBuy from "../Components/ProceedToBuy";

const CartPage = () => {
  const {
    products,
    cartItems,
    removeFromCart,
    getCartTotal,
    clearCart,
    productRemoved,
    increaseQuantity,
    decreaseQuantity,
  } = useCartContext();

  const productsInCart = products.filter((product) => {
    return product.inCart === true;
  });

  // console.log(productsInCart);

  return (
    <div className="relative max-container flex flex-col md:flex-row-reverse justify-center gap-4">
      <ProceedToBuy
        productsInCart={productsInCart}
        getCartTotal={getCartTotal}
      />
      <div className=" w-full md:w-3/4 grid gap-4 mt-4 pb-4">
        {productsInCart.map((product) => (
          <article
            key={product.id}
            className="flex gap-4 border border-neutral-300 dark:border-neutral-700 rounded-md p-2"
          >
            <figure className="h-36 w-36 overflow-hidden">
              <img
                className="object-contain h-full w-full"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <div className="product-details w-full flex flex-col">
              <h4 className="text-textBlack dark:text-textWhite">
                {product.title}
              </h4>
              <div className="price flex items-start mt-2">
                <span className="text-textBlack dark:text-textWhite">$</span>
                <h4 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
                  {product.price}
                </h4>
              </div>
              {/* <div className="stock">
                <p className="text-sm text-green-500 opacity-70">In stock</p>
              </div> */}
              <div className="quantity my-2 flex gap-4">
                <button
                  onClick={() => decreaseQuantity(product)}
                  className="flex justify-center items-center bg-gradient-to-tr from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-700 transition-all w-6 h-6 rounded-full text-textWhite"
                >
                  <LuMinus />
                </button>
                <h4 className="w-6 text-textBlack dark:text-textWhite">
                  {product.quantity}
                </h4>
                <button
                  onClick={() => increaseQuantity(product)}
                  className="flex justify-center items-center bg-gradient-to-tr from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-700 transition-all w-6 h-6 rounded-full text-textWhite"
                >
                  <LuPlus />
                </button>
              </div>
              <div className="bottom-section flex gap-4 items-center mt-auto">
                <div className="remove-btn">
                  <button
                    onClick={() => removeFromCart(product)}
                    className="px-3 py-1 text-textBlack dark:text-textWhite outline-none font-header-font font-normal text-base rounded-lg transition-colors ease-out duration-300 flex items-center justify-center bg-transparent hover:text-red-600 dark:hover:text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}

        {cartItems.length > 0 ? (
          <>
            <div className="ms-auto text-textBlack dark:text-textWhite">
              Total: <h1> ${getCartTotal()}</h1>
            </div>
            <button
              className="mx-auto px-3 py-1 border w-max border-red-600 outline-none font-header-font font-normal text-base rounded-lg transition-colors ease-out duration-300 flex items-center justify-center bg-transparent hover:bg-red-500 text-red-600 hover:text-red-800 hover:border-red-800"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </>
        ) : (
          <>
            <h1 className="text-center text-textBlack dark:text-textWhite">
              Your cart is empty
            </h1>
            <button
              onClick={() => (window.location = "/")}
              className="mx-auto px-3 py-1 w-max border border-yellow-600 outline-none font-header-font font-normal text-base rounded-lg transition-colors ease-out duration-300 flex items-center justify-center bg-transparent hover:bg-yellow-500 text-yellow-600 hover:text-yellow-800 hover:border-yellow-800"
            >
              Shop now
            </button>
          </>
        )}
      </div>

      {productRemoved ? <ToastContainer /> : ""}
    </div>
  );
};

export default CartPage;
